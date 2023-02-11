import{j as e,w as u}from"./withCustomTheme-ab58be2d.js";import{w as _}from"./withCenteredStyle-93f62c3f.js";import{r as l}from"./index-f1f749bf.js";import{c as p}from"./clsx.m-1229b3e0.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";const j="_wrapper_exbd8_1",b="_nav_exbd8_7",f="_btnWrapper_exbd8_14",w="_toggler_exbd8_25",S="_list_exbd8_38",y="_open_exbd8_57",C="_item_exbd8_68",N="_link_exbd8_74",t={wrapper:j,nav:b,btnWrapper:f,toggler:w,list:S,open:y,item:C,link:N},r=o=>{const{items:d}=o,[i,a]=l.useState(!1),m=()=>a(n=>!n),h=()=>a(!1);l.useEffect(()=>{i?document.body.classList.add("overflow"):document.body.classList.remove("overflow")},[i]);const v=()=>d.map(n=>e.jsx("li",{className:t.item,children:e.jsx("a",{href:n.path,className:t.link,onClick:h,children:n.title})},n.title)),x=p({[t.nav]:!0,[t.open]:i}),g=p({[t.list]:!0,[t.open]:i,"custom-scroll":!0});return e.jsx("header",{className:t.wrapper,children:e.jsxs("nav",{className:x,children:[e.jsx("div",{className:t.btnWrapper,children:e.jsx("button",{className:t.toggler,onClick:m,children:"Menu"})}),e.jsx("ul",{className:g,children:v()})]})})};try{r.displayName="Header",r.__docgenInfo={description:"",displayName:"Header",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"LinkItem[]"}}}}}catch{}const A={title:"Native/Header With Sidebar",decorators:[_({width:"100%",padding:20}),u]},s=()=>{const o={items:[{path:"/",component:()=>e.jsx("div",{}),title:"Home",exact:!0},{path:"/pagination",component:()=>e.jsx("div",{}),title:"Pagination"},{path:"/intersection",component:()=>e.jsx("div",{}),title:"Intersection"},{path:"/slider-one",component:()=>e.jsx("div",{}),title:"Slider One"},{path:"/form-fields",component:()=>e.jsx("div",{}),title:"Form Fields"},{path:"/color",component:()=>e.jsx("div",{}),title:"Color"},{path:"/select",component:()=>e.jsx("div",{}),title:"Select"},{path:"/dnd-sorting",component:()=>e.jsx("div",{}),title:"DndSorting"},{path:"/lense",component:()=>e.jsx("div",{}),title:"Lense"},{path:"/autocomplete",component:()=>e.jsx("div",{}),title:"Autocomplete"},{path:"/slider-two",component:()=>e.jsx("div",{}),title:"Slider Two"},{path:"/circle-bar",component:()=>e.jsx("div",{}),title:"Circle bar"},{path:"/spring/accordion",component:()=>e.jsx("div",{}),title:"Accordion"},{path:"/spring/toggle",component:()=>e.jsx("div",{}),title:"Toggle"}]};return e.jsx(r,{...o})};var c;s.parameters={...s.parameters,storySource:{source:`() => {
  const props: HeaderProps = {
    items: [{
      path: '/',
      component: () => <div />,
      title: 'Home',
      exact: true
    }, {
      path: '/pagination',
      component: () => <div />,
      title: 'Pagination'
    }, {
      path: '/intersection',
      component: () => <div />,
      title: 'Intersection'
    }, {
      path: '/slider-one',
      component: () => <div />,
      title: 'Slider One'
    }, {
      path: '/form-fields',
      component: () => <div />,
      title: 'Form Fields'
    }, {
      path: '/color',
      component: () => <div />,
      title: 'Color'
    }, {
      path: '/select',
      component: () => <div />,
      title: 'Select'
    }, {
      path: '/dnd-sorting',
      component: () => <div />,
      title: 'DndSorting'
    }, {
      path: '/lense',
      component: () => <div />,
      title: 'Lense'
    }, {
      path: '/autocomplete',
      component: () => <div />,
      title: 'Autocomplete'
    }, {
      path: '/slider-two',
      component: () => <div />,
      title: 'Slider Two'
    }, {
      path: '/circle-bar',
      component: () => <div />,
      title: 'Circle bar'
    }, {
      path: '/spring/accordion',
      component: () => <div />,
      title: 'Accordion'
    }, {
      path: '/spring/toggle',
      component: () => <div />,
      title: 'Toggle'
    }]
  };
  return <Header {...props} />;
}`,...(c=s.parameters)==null?void 0:c.storySource}};export{s as Example,A as default};
//# sourceMappingURL=Header.story-863d0a95.js.map
