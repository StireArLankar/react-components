import{j as o,w as D}from"./withCustomTheme-ab58be2d.js";import{w as L}from"./withCenteredStyle-93f62c3f.js";import{r}from"./index-f1f749bf.js";import{N as F}from"./NeonButton-f8d1ce90.js";import{r as M}from"./index-96c5f47c.js";import{u as G,d as H,a as A,t as B}from"./react-spring-web.esm-dd561a21.js";import{d as J,u as K}from"./web-35f33cb2.js";import{c as Y}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-1229b3e0.js";const P={anchor:"dahrqo3",popup:Y({defaultClassName:"_1oknpyn0 dahrqo2",variantClassNames:{side:{top:"dahrqo0",bottom:"dahrqo1"}},defaultVariants:{},compoundVariants:[]})},U=(e,t)=>t==="top"?-e*10:e*10,X=(e,t)=>`translate(-50%, ${t==="top"?-100:0}%)
  translateY(${U(e,t)}px)`,Z=({children:e})=>M.createPortal(e,document.body),$=r.forwardRef((e,t)=>{const{isOpen:a,children:l,onClose:i,position:s}=e,[c,d]=r.useState(a),v=r.useRef(null),m=r.useRef(!1),[{left:f,top:_},y]=G(()=>({left:0,top:0})),u=r.useCallback(()=>{var h;const n=((h=t==null?void 0:t.current)==null?void 0:h.getBoundingClientRect())||{},{left:p,top:g,width:x,height:O}=n,C=p+x/2,T=g,I=s==="top"?T:T+O;y.start({left:C,top:I})},[y,t,s]);r.useEffect(()=>{if(m.current)return;let n;const p=()=>{t.current?(m.current=!0,u()):n=setTimeout(p,100)};return n=setTimeout(p,100),()=>clearTimeout(n)},[t,u]),r.useEffect(()=>{d(a);const n=g=>!g.path.includes(v.current)&&d(!1),p=J(()=>u(),100);return a&&(document.addEventListener("click",n,!0),window.addEventListener("resize",p),p()),()=>{document.removeEventListener("click",n,!0),window.removeEventListener("resize",p)}},[a,u]);const j=H(c,{from:{o:0},enter:{o:1},leave:{o:0},config:{tension:250,clamp:!0},onRest:()=>!c&&i()});return o.jsx(Z,{children:j(({o:n},p,g,x)=>p?o.jsx(A.div,{className:P.popup({side:s}),ref:v,style:{opacity:n,transform:n.to(O=>X(O,s)),left:f,top:_},children:l},x):null)})});try{$.displayName="FixedPopup",$.__docgenInfo={description:"",displayName:"FixedPopup",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const k=e=>{const{position:t="top",temp:a}=e,[l,i]=r.useState(!1),s=r.useRef(),c=()=>i(!1),d=()=>i(!0);return o.jsxs("div",{style:{position:"relative",left:`${a?-50:50}px`},children:[o.jsx(F,{onClick:d,ref:s,children:"Open popup"}),o.jsx($,{isOpen:l,onClose:c,position:t,ref:s,children:o.jsx("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, debitis eius. Quaerat, quas natus nostrum similique, deserunt laudantium velit veritatis sed dolores pariatur odit architecto totam culpa, porro magni omnis?"})})]})};try{k.displayName="Test",k.__docgenInfo={description:"",displayName:"Test",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},temp:{defaultValue:null,description:"",name:"temp",required:!1,type:{name:"boolean"}}}}}catch{}const ee=(e,t)=>t==="top"?-e*10:e*10,te=(e,t)=>`translate(-50%, ${t==="top"?-100:0}%)
  translateY(${ee(e,t)}px)`,oe=({children:e})=>M.createPortal(e,document.body),w=e=>{const{isOpen:t,children:a,onClose:l,position:i}=e,[s,c]=r.useState(t),d=r.useRef(null),[v,m]=K({debounce:50,scroll:!0}),{x:f,y:_,width:y,height:u}=m;r.useEffect(()=>{c(t);const n=p=>!p.path.includes(d.current)&&c(!1);return t&&document.addEventListener("click",n,!0),()=>document.removeEventListener("click",n,!0)},[t]);const j=H(s,{from:{o:0,x:f,y:_,width:y,height:u},enter:{o:1,x:f,y:_,width:y,height:u},leave:{o:0,x:f,y:_,width:y,height:u},update:()=>({o:s?1:0,x:f,y:_,width:y,height:u}),config:{tension:250,clamp:!0},onRest:()=>!s&&l()});return o.jsx("div",{className:P.anchor,ref:v,children:o.jsx(oe,{children:j(({o:n,x:p,y:g,width:x,height:O},C,T,I)=>C?o.jsx(A.div,{className:P.popup({side:i}),ref:d,style:{opacity:n,transform:n.to(h=>te(h,i)),left:B([p,x],(h,V)=>h+V/2),top:B([g,O],(h,V)=>i==="top"?h:h+V)},children:a},I):null)})})};try{w.displayName="PopupWithAnchor",w.__docgenInfo={description:"",displayName:"PopupWithAnchor",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const E=e=>{const{position:t="top",temp:a}=e,[l,i]=r.useState(!1),s=()=>i(!1),c=()=>i(!0);return o.jsx("div",{style:{position:"relative",left:`${a?-50:50}px`},children:o.jsxs(F,{onClick:c,children:["Open popup",o.jsx(w,{isOpen:l,onClose:s,position:t,children:o.jsx("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, debitis eius. Quaerat, quas natus nostrum similique, deserunt laudantium velit veritatis sed dolores pariatur odit architecto totam culpa, porro magni omnis?"})})]})})};try{E.displayName="Test",E.__docgenInfo={description:"",displayName:"Test",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},temp:{defaultValue:null,description:"",name:"temp",required:!1,type:{name:"boolean"}}}}}catch{}const se={popup:Y({defaultClassName:"_1oknpyn0",variantClassNames:{side:{top:"_1oknpyn1",bottom:"_1oknpyn2"}},defaultVariants:{},compoundVariants:[]})},ne=(e,t)=>t==="top"?(1-e)*10:(e-1)*10,R=e=>{const{isOpen:t,children:a,onClose:l,position:i}=e,[s,c]=r.useState(t),d=r.useRef(null);r.useEffect(()=>{c(t);const m=f=>!f.path.includes(d.current)&&c(!1);return t&&document.addEventListener("click",m,!0),()=>document.removeEventListener("click",m,!0)},[t]);const v=H(s,{from:{o:0},enter:{o:1},leave:{o:0},config:{tension:250,clamp:!0},onRest:()=>!s&&l()});return o.jsx(o.Fragment,{children:v(({o:m},f,_,y)=>f?o.jsx(A.div,{className:se.popup({side:i}),style:{opacity:m,transform:m.to(u=>`translate(-50%, ${ne(u,i)}px)`)},ref:d,children:a},y):null)})};try{R.displayName="Popup",R.__docgenInfo={description:"",displayName:"Popup",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const S=e=>{const{position:t="top"}=e,[a,l]=r.useState(!1),i=()=>l(!1),s=()=>l(!0);return console.log(e,t),o.jsxs("div",{style:{position:"relative"},children:[o.jsx(F,{onClick:s,children:"Open popup"}),o.jsx(R,{isOpen:a,onClose:i,position:t,children:o.jsx("div",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, debitis eius. Quaerat, quas natus nostrum similique, deserunt laudantium velit veritatis sed dolores pariatur odit architecto totam culpa, porro magni omnis?"})})]})};try{S.displayName="Test",S.__docgenInfo={description:"",displayName:"Test",props:{position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}}}}}catch{}const ge={title:"Spring/Popup",decorators:[D],argTypes:{position:{control:"radio",options:["top","bottom"],defaultValue:"top"}}},re=e=>o.jsx(S,{...e}),q=re.bind({});q.decorators=[L({width:"100%"})];const ie=e=>o.jsx(k,{...e}),b=ie.bind({});b.decorators=[L({width:"100%",minHeight:"200vh",display:"grid",placeItems:"center"})];const ae=e=>o.jsx(E,{...e}),N=ae.bind({});N.decorators=[L({width:"100%",minHeight:"200vh",display:"grid",placeItems:"center"})];var W;q.parameters={...q.parameters,storySource:{source:"props => <Test {...props} />",...(W=q.parameters)==null?void 0:W.storySource}};var z;b.parameters={...b.parameters,storySource:{source:"props => <FixedTest {...props} />",...(z=b.parameters)==null?void 0:z.storySource}};var Q;N.parameters={...N.parameters,storySource:{source:"props => <AnchorTest {...props} />",...(Q=N.parameters)==null?void 0:Q.storySource}};export{b as FixedPopup,q as Popup,N as PopupWithAnchor,ge as default};
//# sourceMappingURL=_.story-967b516e.js.map
