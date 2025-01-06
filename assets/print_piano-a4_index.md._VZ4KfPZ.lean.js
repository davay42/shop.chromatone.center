import{P as m,_}from"./chunks/SaveButtons.BFROZ3Tm.js";import{_ as y,e as x,f as s,h as n,j as t,F as r,m as o,t as u,G as w,y as h,B as k}from"./chunks/framework.Ah7888pN.js";const I=["viewBox"],P=["y","width","height"],v=["transform"],$=["y","width","fill"],b={class:"scales","font-size":"4"},A=["transform"],B=["transform"],C=["x1"],D=["x1","x2","y1","y2"],V={__name:"PianoChords",setup(g){const d=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],e=x({width:210,height:297,margin:6,head:10,padding:{x:4,y:4,left:31.2}}),l={scale:"101101011010",list:[{pitch:0,chroma:"100100010010",type:"m7",scale:"Aeolian",degree:"I"},{pitch:2,chroma:"100100100010",type:"ø7",scale:"Locrian",degree:"II"},{pitch:3,chroma:"100010010001",type:"M7",scale:"Ionian",degree:"III"},{pitch:5,chroma:"100100010010",type:"m7",scale:"Dorian",degree:"IV"},{pitch:7,chroma:"100100010010",type:"m7",scale:"Phrygian",degree:"V"},{pitch:8,chroma:"100010010001",type:"M7",scale:"Lydian",degree:"VI"},{pitch:10,chroma:"100010010010",type:"7",scale:"Myxolydian",degree:"VII"}]};return(O,p)=>(s(),n("svg",{class:"m-8 select-none",id:"diatonic",version:"1.1",baseProfile:"full",viewBox:`-${e.margin} -${e.margin+e.head} ${e.width+2*e.margin} ${e.height+2*e.margin+e.head}`,xmlns:"http://www.w3.org/2000/svg","font-family":"Commissioner, sans-serif","text-anchor":"start","dominant-baseline":"middle"},[t("rect",{class:"page",x:"-2",y:-e.head,width:e.width+e.padding.x,height:e.height+e.head,stroke:"none","stroke-width":"0.2",rx:"1",fill:"#fff"},null,8,P),p[0]||(p[0]=t("text",{"font-size":"3",transform:"translate(3,-1)"},[t("tspan",null,"CHROMATONE"),t("tspan",{dy:"4",x:"0"},"SCALE CHORDS"),t("tspan",{dy:"4",x:"0"},"PIANO KEYS")],-1)),(s(),n(r,null,o(d,(c,a)=>t("g",{class:"striped",key:a,transform:`translate(0, ${e.head-2+a*(e.height-2*e.padding.y-5)/12})`},[t("rect",{x:0,y:e.padding.y,rx:"4",width:e.width,height:"22",opacity:"1",fill:a%2?"#ccc":"#ddd"},null,8,$)],8,v)),64)),(s(!0),n(r,null,o(l.list,(c,a)=>(s(),n("g",b,[t("text",{transform:`translate(${e.padding.left+a*24.6+4},3)`},u(c.scale),9,A)]))),256)),(s(),n(r,null,o(d,(c,a)=>t("g",{key:a,transform:`translate(0, ${e.head+a*(e.height-2*e.padding.y-5)/12-6})`},[(s(!0),n(r,null,o(l.list,(i,f)=>(s(),w(m,{key:i,type:i.type,pitch:(i.pitch+a)%12,transform:`translate(${f*25+e.padding.left}, 0) scale(0.1228)`,chroma:i.chroma},null,8,["type","pitch","transform","chroma"]))),128)),h(m,{pitch:a,transform:"translate(1, 0) scale(0.12)",chroma:l.scale},null,8,["pitch","chroma"])],8,B)),64)),t("line",{x1:e.padding.left+2,x2:"208",y1:"7",y2:"7","stroke-width":"0.1",stroke:"black"},null,8,C),t("line",{x1:e.padding.left-1.5,x2:e.padding.left-1.5,y1:e.head+2.2,y2:e.height-5,stroke:"#777","stroke-linecap":"round","stroke-width":"0.2"},null,8,D)],8,I))}},E=y(V,[["__scopeId","data-v-5b1f4567"]]),L=JSON.parse('{"title":"Printable A4 piano chords","description":"All chords for all scales on one page","frontmatter":{"title":"Printable A4 piano chords","description":"All chords for all scales on one page","cover":"piano.png","date":"2023-08-02T00:00:00.000Z","layout":"app","hidden":true,"product":{"price":10,"id":"print-piano-a4","digital":true}},"headers":[],"relativePath":"print/piano-a4/index.md","filePath":"print/piano-a4/index.md"}'),N={name:"print/piano-a4/index.md"},M=Object.assign(N,{setup(g){return(d,e)=>(s(),n("div",null,[e[0]||(e[0]=t("h2",{id:"diatonic-scales-and-modes",tabindex:"-1"},[k("Diatonic scales and modes "),t("a",{class:"header-anchor",href:"#diatonic-scales-and-modes","aria-label":'Permalink to "Diatonic scales and modes"'},"​")],-1)),h(E,{width:"100%",class:"max-w-55ch"}),h(_,{svg:"diatonic",password:"piano-a4-Vr74E"})]))}});export{L as __pageData,M as default};
