import{w as P}from"./withCenteredStyle-93f62c3f.js";import{j as e,w as N}from"./withCustomTheme-ab58be2d.js";import{r as s}from"./index-f1f749bf.js";import{u as t}from"./use-motion-value-6c46813b.js";import{m as d}from"./motion-c178da69.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";const x={wrapper:"_8fto2z0",content:"_8fto2z1",constrains:"_8fto2z2",svg:"_8fto2z3",circle:"_8fto2z4"},o=g=>g.get().toFixed(0),R={left:0,top:0,right:500,bottom:500},E={left:-100,top:-100,right:600,bottom:600},S=s.memo(()=>{const g=s.useRef(null),j=s.useRef(null),n=t(0),c=t(500),a=t(100),i=t(400),l=t(400),p=t(100),u=t(500),m=t(0),_=t(""),C=t(""),b=t(""),k=s.useRef(null),y=s.useCallback(()=>{const r=`M${n.get()},${c.get()} C${a.get()},${i.get()} ${l.get()},${p.get()} ${u.get()},${m.get()}`;_.set(r),k.current.innerText=`M${o(n)},${o(c)} C${o(a)},${o(i)} ${o(l)},${o(p)} ${o(u)},${o(m)}`},[_,n,a,l,u,c,i,p,m]),f=s.useCallback(()=>{const r=`M${n.get()},${c.get()} L${a.get()},${i.get()}`;C.set(r)},[C,n,a,c,i]),$=s.useCallback(()=>{const r=`M${u.get()},${m.get()} L${l.get()},${p.get()}`;b.set(r)},[b,l,u,p,m]);s.useEffect(()=>{y(),f(),$()},[y,f,$]);const h=(r,v,B,M)=>e.jsx(d.circle,{onUpdate:()=>{r(),y()},cx:0,cy:0,r:10,style:{x:v,y:B},drag:!0,dragMomentum:!1,dragElastic:.1,dragConstraints:M?R:E,stroke:"none",fill:"red"});return e.jsxs("div",{className:x.wrapper,children:[e.jsx(d.div,{ref:k,className:x.content}),e.jsx("div",{className:x.constrains,ref:g}),e.jsxs("svg",{viewBox:"-100 -100 700 700",className:x.svg,ref:j,fill:"none",children:[e.jsx(d.path,{d:_,stroke:"black",strokeWidth:"1"}),e.jsx(d.path,{d:C,stroke:"blue",strokeWidth:"1"}),e.jsx(d.path,{d:b,stroke:"blue",strokeWidth:"1"}),h(f,n,c,!0),h(f,a,i),h($,l,p),h($,u,m,!0)]})]})});try{CubicBezier.displayName="CubicBezier",CubicBezier.__docgenInfo={description:"",displayName:"CubicBezier",props:{}}}catch{}const q={title:"Framer Motion/Cubic Bezier",component:S,decorators:[N,P({width:"100%"})]},z={};var w;z.parameters={...z.parameters,storySource:{source:"{}",...(w=z.parameters)==null?void 0:w.storySource}};export{z as CubicBezier,q as default};
//# sourceMappingURL=_.story-bf18fa2d.js.map
