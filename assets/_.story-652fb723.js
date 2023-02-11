import{w as g,j as e}from"./withCustomTheme-ab58be2d.js";import{r as d}from"./index-f1f749bf.js";import{w as u}from"./withCenteredStyle-93f62c3f.js";import{C as p}from"./index-3e4e2ef3.js";import"./_commonjsHelpers-042e6b4d.js";import"./story.css-e50b5b1c.js";import"./index.module-a8f8c212.js";import"./index-96c5f47c.js";import"./index.module-c5bca08f.js";import"./index.module-d4f16e55.js";import"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import"./motion-c178da69.js";const H={title:"Design/Checkbox",component:p,decorators:[g,u({width:"100%",background:"teal",minHeight:"100vh",display:"grid",placeItems:"center"})]},f=r=>{const{err:n,label:l,helper:i}=r,[m,c]=d.useState(!0);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",gridGap:10,minHeight:80,alignItems:"start"},children:[e.jsx("a",{href:"#11",children:"for accessible"}),e.jsx(p,{id:"tmep",value:m,label:l,onChange:()=>c(h=>!h),error:n,helperText:n?i:""}),e.jsx("a",{href:"#11",children:"for accessible"})]})},t={render:r=>e.jsx(f,{...r}),args:{label:"label",err:!1,helper:"helper"},argTypes:{helper:{control:"text",if:{arg:"err"}}}},a={args:{id:"123",value:!0},argTypes:{onChange:{action:"onChange"}}};var o;t.parameters={...t.parameters,storySource:{source:`{
  render: props => <Asd {...props} />,
  args: {
    label: 'label',
    err: false,
    helper: 'helper'
  },
  argTypes: {
    helper: {
      control: 'text',
      if: {
        arg: 'err'
      }
    }
  }
}`,...(o=t.parameters)==null?void 0:o.storySource}};var s;a.parameters={...a.parameters,storySource:{source:`{
  args: {
    id: '123',
    value: true
  },
  argTypes: {
    onChange: {
      action: 'onChange'
    }
  }
}`,...(s=a.parameters)==null?void 0:s.storySource}};export{a as Base,t as Controlled,H as default};
//# sourceMappingURL=_.story-652fb723.js.map
