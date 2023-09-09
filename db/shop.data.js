import download from 'image-downloader'

import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from 'node:fs'
import { useItems } from '.';

export default {
  async load() {
    const products = await useItems('products',
      {
        filter: {
          status: {
            _eq: 'published'
          },

        },
        fields: [
          '*',
          { category: ['slug'] }
        ]
      })

    const categories = await useItems('categories',
      {
        filter: {
          status: {
            _eq: 'published'
          }
        },
        fields: [
          '*',
          {
            products: ['*',
              { category: ['slug'] }]
          }
        ]
      })

    await downloadCovers(products)
    await downloadCovers(categories)

    return {
      products,
      categories
    }
  }
}


async function downloadCovers(records) {

  const dirname = path.dirname(fileURLToPath(import.meta.url));
  let dest = path.resolve(dirname, '../shop/public/cover/')
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const urls = []

  for (let r of records) {
    let filePath = path.resolve(dest, `${r.slug}.webp`)
    if (fs.existsSync(filePath)) continue
    let url = `https://db.chromatone.center/assets/${r.cover}?quality=70&width=1000&format=webp&download`
    console.log('downloading file:', r.slug + '.webp')
    urls.push({ url, dest: filePath })
  }

  const chunkSize = 5;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    await Promise.all(chunk.map(cover => download.image(cover)));
  }

}