import{w as g}from"./withCenteredStyle-93f62c3f.js";import{j as o,w as f}from"./withCustomTheme-ab58be2d.js";import{r}from"./index-f1f749bf.js";import{d as u,a as d}from"./react-spring-web.esm-dd561a21.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const a={wrapper:"s5bj2n0",img:"s5bj2n1"},y="/react-components/assets/gift-notice-7cc02224.svg",v="/react-components/assets/info-notice-3da9e29c.svg",w=()=>{const[c,i]=r.useState(!1);r.useEffect(()=>{const t=setInterval(()=>i(e=>!e),2e3);return()=>clearInterval(t)},[]);const m=u(c,{from:{opacity:0,y:-10},enter:{opacity:1,y:0},leave:{opacity:0,y:-10}}),p=()=>m((t,e,j,l)=>o.jsx(d.img,{alt:"info-notice",className:a.img,src:e?v:y,style:t},`info-notice-${l}`));return o.jsx("div",{className:a.wrapper,children:p()})},I={title:"Spring/Toggle",component:w,decorators:[g({width:600}),f]},s={};var n;s.parameters={...s.parameters,storySource:{source:"{}",...(n=s.parameters)==null?void 0:n.storySource}};export{s as Toggle,I as default};
//# sourceMappingURL=_.story-45cda870.js.map
