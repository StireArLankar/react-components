import{j as t,w as g}from"./withCustomTheme-ab58be2d.js";import{w as b}from"./withCenteredStyle-93f62c3f.js";import{r as p}from"./index-f1f749bf.js";import{d as w,u as k,a as d}from"./react-spring-web.esm-dd561a21.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const i={bubble:"_1lzwg9k0",list:"_1lzwg9k1",item:"_1lzwg9k2"},c=s=>{const{onClick:e}=s;return t.jsxs("svg",{viewBox:"0 0 200 200",onClick:e,className:i.bubble,children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"gradient--colors",x1:"0",y1:"100%",x2:"100%",y2:"0",children:[t.jsx("stop",{offset:"0%",stopColor:"dodgerblue"}),t.jsx("stop",{offset:"50%",stopColor:"fuchsia"}),t.jsx("stop",{offset:"100%",stopColor:"yellow"})]}),t.jsxs("radialGradient",{id:"gradient--colors-transparency",fx:"25%",fy:"25%",children:[t.jsx("stop",{offset:"0%",stopColor:"black"}),t.jsx("stop",{offset:"30%",stopColor:"black",stopOpacity:".2"}),t.jsx("stop",{offset:"97%",stopColor:"white",stopOpacity:".4"}),t.jsx("stop",{offset:"100%",stopColor:"black"})]}),t.jsx("mask",{id:"mask--colors-transparency",children:t.jsx("rect",{fill:"url(#gradient--colors-transparency)",width:"100%",height:"100%"})}),t.jsxs("radialGradient",{id:"gradient--bw-light",fy:"10%",children:[t.jsx("stop",{offset:"60%",stopColor:"black",stopOpacity:"0"}),t.jsx("stop",{offset:"90%",stopColor:"white",stopOpacity:".25"}),t.jsx("stop",{offset:"100%",stopColor:"black"})]}),t.jsx("mask",{id:"mask--light-bottom",children:t.jsx("rect",{fill:"url(#gradient--bw-light)",width:"100%",height:"100%"})}),t.jsx("mask",{id:"mask--light-top",children:t.jsx("rect",{fill:"url(#gradient--bw-light)",width:"100%",height:"100%",transform:"rotate(180, 100, 100)"})}),t.jsxs("radialGradient",{id:"gradient--spot",fy:"20%",children:[t.jsx("stop",{offset:"10%",stopColor:"white",stopOpacity:".7"}),t.jsx("stop",{offset:"70%",stopColor:"white",stopOpacity:"0"})]})]}),t.jsx("ellipse",{rx:"40",ry:"20",cx:"150",cy:"150",fill:"url(#gradient--spot)",transform:"rotate(-225, 150, 150)"}),t.jsx("circle",{r:"50%",cx:"50%",cy:"50%",fill:"aqua",mask:"url(#mask--light-bottom)"}),t.jsx("circle",{r:"50%",cx:"50%",cy:"50%",fill:"yellow",mask:"url(#mask--light-top)"}),t.jsx("ellipse",{rx:"55",ry:"25",cx:"55",cy:"55",fill:"url(#gradient--spot)",transform:"rotate(-45, 55, 55)"}),t.jsx("circle",{r:"50%",cx:"50%",cy:"50%",fill:"url(#gradient--colors)",mask:"url(#mask--colors-transparency)"})]})};try{c.displayName="BubbleSvg",c.__docgenInfo={description:"",displayName:"BubbleSvg",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const C=[0,1,2,3,4,5,6,7,8],_=(s,e)=>{const o=s*2*Math.PI*15+2*Math.PI*e/8;return`translate(0, ${Math.sin(o)*100}px)`},v=()=>{const[s,e]=p.useState([...C]),[o,m]=p.useState(1),x=l=>()=>e(r=>r.filter(n=>n!==l)),u=w(s,{initial:{width:100,opacity:1},enter:{width:100,opacity:1},from:{width:0,opacity:0},leave:{width:0,opacity:0},unique:!0}),h=k({x:o,from:{x:0},config:{duration:3e4},immediate:o===0,onRest:()=>m(o>1e3?0:o+1)});return t.jsx("ul",{className:i.list,children:u((l,r,n,y)=>t.jsx(d.li,{className:i.item,style:l,children:t.jsx(d.div,{className:i.item,style:{transform:h.x.to(j=>_(j,r))},children:t.jsx(c,{onClick:x(r)})})},y))})},z={title:"Spring/Bubbles",decorators:[b({width:"100%"}),g]},a=()=>t.jsx(v,{});var f;a.parameters={...a.parameters,storySource:{source:"() => <Bubbles />",...(f=a.parameters)==null?void 0:f.storySource}};export{a as _Bubbles,z as default};
//# sourceMappingURL=_.story-7be28494.js.map
