import{_ as l}from"./ProductCard.BPgeiixQ.js";import{e as m}from"./theme.C0Xjfi7A.js";import{j as u,c as _,o as s,e as r,F as p,k as f,C as i,m as d,d as g}from"./framework.CzpmGpxr.js";const x={class:"flex flex-wrap gap-8 my-16"},w={__name:"ProductList",setup(k){const{params:a,frontmatter:y}=u(),o=_(()=>m.categories.find(t=>t.slug==a.value.slug));return(t,B)=>{const n=l;return s(),r("div",x,[(s(!0),r(p,null,f([...g(o).products].sort((e,c)=>e.sort>c.sort?1:-1),e=>(s(),i(n,d({class:"max-w-120",style:{flex:"1 1 300px"},key:e.slug,ref_for:!0},e),null,16))),128))])}}};export{w as _};
