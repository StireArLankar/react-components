import{j as s,w as x}from"./withCustomTheme-ab58be2d.js";import{w as g}from"./withCenteredStyle-93f62c3f.js";import{r as v}from"./index-f1f749bf.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";const h={font:{bold:"dkoagg0",regular:"dkoagg1"}},c=(e,a)=>{const r=(c.canvas||(c.canvas=document.createElement("canvas"))).getContext("2d");return r?(r.font=a,r.measureText(e).width):0},y=e=>{switch(e){case"bold":return"bold 30px Roboto";case"regular":return"30px Roboto"}},f=e=>{switch(e){case"bold":return 17;case"regular":return 12}},w=e=>{switch(e){case"bold":return 50;case"regular":return 42}},p=v.memo(e=>{const{text:a,variant:t="bold"}=e,r=y(t),i=f(t),m=w(t),d=c(a,r)+i*2;return s.jsx("svg",{viewBox:`0 0 ${d} ${m}`,style:{width:d,background:"#0162c8",fill:"white"},children:s.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"central",className:h.font[t],children:a})})});try{ResponsiveText.displayName="ResponsiveText",ResponsiveText.__docgenInfo={description:"",displayName:"ResponsiveText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"regular"'}]}}}}}catch{}const C={title:"Design/ResponsiveText",component:p,decorators:[x,g({width:"100%",background:"teal",minHeight:"100vh",display:"grid",placeItems:"center"})],args:{text:"Hello world"},argTypes:{variant:{control:"radio",options:["bold","regular"],defaultValue:"bold"}}},b=e=>s.jsx("div",{style:{width:e.width,background:"red",display:"flex",justifyContent:"center"},children:s.jsx(p,{...e})}),o={},n={render:e=>s.jsx(b,{...e}),args:{width:200}};var l;o.parameters={...o.parameters,storySource:{source:"{}",...(l=o.parameters)==null?void 0:l.storySource}};var u;n.parameters={...n.parameters,storySource:{source:`{
  render: props => <Asd {...props} />,
  args: {
    width: 200
  }
}`,...(u=n.parameters)==null?void 0:u.storySource}};export{o as Base,n as WithBackground,C as default};
//# sourceMappingURL=_.story-ac2126d9.js.map
