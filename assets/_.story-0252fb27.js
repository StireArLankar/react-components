import{j as t,w}from"./withCustomTheme-ab58be2d.js";import{w as x}from"./withCenteredStyle-93f62c3f.js";import{w as v}from"./withTopLabel-64f9ea37.js";import{s as _}from"./theme.css-ff310367.js";import{r as D}from"./index-f1f749bf.js";import{u as n,a as i,t as y}from"./react-spring-web.esm-dd561a21.js";import{a as j}from"./use-gesture-react.esm-c354a664.js";import{c as C}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";const p={card:C({defaultClassName:"_9yh2ni0",variantClassNames:{drag:{true:"_9yh2ni1",false:"_9yh2ni2"},disabled:{true:"_9yh2ni3",false:"_9yh2ni4"}},defaultVariants:{},compoundVariants:[]}),inner:"_9yh2ni5"},S=["https://drscdn.500px.org/photo/126979479/w%3D440_h%3D440/v2?webp=true&v=2&sig=09ea71b0ddb91e24a59cecfb79a0189a2ab575d10372d3e8d3258e38f97a6a49","https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40","https://drscdn.500px.org/photo/188823103/w%3D440_h%3D440/v2?webp=true&v=3&sig=af23265ed9beaeeeb12b4f8dfed14dd613e5139495ba4a80d5dcad5cef9e39fd","https://drscdn.500px.org/photo/216094471/w%3D440_h%3D440/v2?webp=true&v=0&sig=16a2312302488ae2ce492fb015677ce672fcecac2befcb8d8e9944cbbfa1b53a","https://drscdn.500px.org/photo/227760547/w%3D440_h%3D440/v2?webp=true&v=0&sig=d00bd3de4cdc411116f82bcc4a4e8a6375ed90a686df8488088bca4b02188c73","https://drscdn.500px.org/photo/126979479/w%3D440_h%3D440/v2?webp=true&v=2&sig=09ea71b0ddb91e24a59cecfb79a0189a2ab575d10372d3e8d3258e38f97a6a49","https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40"],N=a=>{const r=window.innerWidth*.2-20;return`translateY(${-r*(a<0?6:1)-a%(r*5)}px`},$=()=>{const[{x:a,y:r,scale:l},d]=n(()=>({scale:1,x:0,y:0,config:{mass:5,tension:350,friction:40}})),[{wheelY:h},b]=n(()=>({wheelY:0})),[m,c]=D.useState(!1),u=j({onDragStart:()=>c(!0),onDrag:({offset:[e,s]})=>d.start({x:e,y:s,scale:1}),onDragEnd:()=>c(!1),onHover:({hovering:e})=>!e&&d.start({scale:1}),onWheel:({offset:[,e]})=>b.start({wheelY:e})},{eventOptions:{passive:!1}});return t.jsx(i.div,{...u(),className:p.card({drag:m}),style:{transform:y([a,r,l],(e,s,g)=>`perspective(600px) translate3d(${e}px, ${s}px, 0) scale(${g})`)},children:t.jsx(i.div,{className:p.inner,style:{transform:h.to(N)},children:S.map((e,s)=>t.jsx("div",{style:{backgroundImage:`url(${e})`}},s))})})},M=t.jsxs(t.Fragment,{children:[t.jsx("span",{children:"Credits to "}),t.jsx("a",{className:_,href:"https://github.com/react-spring/react-use-gesture",children:"docs"})]}),W={title:"Gesture/MultiCard",decorators:[x({width:"100%"}),w,v(M)]},o=()=>t.jsx($,{});var f;o.parameters={...o.parameters,storySource:{source:"() => <MultiCard />",...(f=o.parameters)==null?void 0:f.storySource}};export{o as _MultiCard,W as default};
//# sourceMappingURL=_.story-0252fb27.js.map
