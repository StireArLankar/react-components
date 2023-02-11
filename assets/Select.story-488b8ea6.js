import{j as n,w as k}from"./withCustomTheme-ab58be2d.js";import{w as L}from"./withCenteredStyle-93f62c3f.js";import{r as l}from"./index-f1f749bf.js";import{u as E}from"./useBgColor-6afa340b.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";const x=`Afghanistan
Albania
Algeria
Andorra
Angola
Antigua & Deps
Argentina
Armenia
Australia
Austria
Azerbaijan
Bahamas
Bahrain
Bangladesh
Barbados
Belarus
Belgium
Belize
Benin
Bhutan
Bolivia
Bosnia Herzegovina
Botswana
Brazil
Brunei
Bulgaria
Burkina
Burundi
Cambodia
Cameroon
Canada
Cape Verde
Central African Rep
Chad
Chile
China
Colombia
Comoros
Congo
Congo {Democratic Rep}
Costa Rica
Croatia
Cuba
Cyprus
Czech Republic
Denmark
Djibouti
Dominica
Dominican Republic
East Timor
Ecuador
Egypt
El Salvador
Equatorial Guinea
Eritrea
Estonia
Ethiopia
Fiji
Finland
France
Gabon
Gambia
Georgia
Germany
Ghana
Greece
Grenada
Guatemala
Guinea
Guinea-Bissau
Guyana
Haiti
Honduras
Hungary
Iceland
India
Indonesia
Iran
Iraq
Ireland {Republic}
Israel
Italy
Ivory Coast
Jamaica
Japan
Jordan
Kazakhstan
Kenya
Kiribati
Korea North
Korea South
Kosovo
Kuwait
Kyrgyzstan
Laos
Latvia
Lebanon
Lesotho
Liberia
Libya
Liechtenstein
Lithuania
Luxembourg
Macedonia
Madagascar
Malawi
Malaysia
Maldives
Mali
Malta
Marshall Islands
Mauritania
Mauritius
Mexico
Micronesia
Moldova
Monaco
Mongolia
Montenegro
Morocco
Mozambique
Myanmar, {Burma}
Namibia
Nauru
Nepal
Netherlands
New Zealand
Nicaragua
Niger
Nigeria
Norway
Oman
Pakistan
Palau
Panama
Papua New Guinea
Paraguay
Peru
Philippines
Poland
Portugal
Qatar
Romania
Russian Federation
Rwanda
St Kitts & Nevis
St Lucia
Saint Vincent & the Grenadines
Samoa
San Marino
Sao Tome & Principe
Saudi Arabia
Senegal
Serbia
Seychelles
Sierra Leone
Singapore
Slovakia
Slovenia
Solomon Islands
Somalia
South Africa
South Sudan
Spain
Sri Lanka
Sudan
Suriname
Swaziland
Sweden
Switzerland
Syria
Taiwan
Tajikistan
Tanzania
Thailand
Togo
Tonga
Trinidad & Tobago
Tunisia
Turkey
Turkmenistan
Tuvalu
Uganda
Ukraine
United Arab Emirates
United Kingdom
United States
Uruguay
Uzbekistan
Vanuatu
Vatican City
Venezuela
Vietnam
Yemen
Zambia
Zimbabwe`.split(`
`),N="_list_1gqkw_1",I="_expand_1gqkw_1",B="_item_1gqkw_23",M="_wrapper_1gqkw_46",P="_inputWrapper_1gqkw_51",j="_input_1gqkw_51",q="_button_1gqkw_76",T="_placeholder_1gqkw_101",i={list:N,expand:I,item:B,wrapper:M,inputWrapper:P,input:j,button:q,placeholder:T},w=u=>{const{search:c,closeList:r,items:d,onChange:p,onEscPress:o,onSearchChange:m}=u;l.useEffect(()=>(t.current&&(t.current.scrollTop=0),document.addEventListener("click",r),document.addEventListener("keydown",o),()=>{document.removeEventListener("click",r),document.removeEventListener("keydown",o)}),[r,o]);const t=l.useRef(null),h=()=>{const a=c.toLowerCase();return d.filter(s=>s.toLowerCase().includes(a)).map(s=>{const b=g=>{g.preventDefault(),p(s)},_=g=>{g.keyCode===13&&(g.preventDefault(),p(s))};return n.jsx("li",{onClick:b,onKeyDown:_,className:i.item,tabIndex:0,children:s},s)})},y=a=>{a.stopPropagation(),a.nativeEvent.stopImmediatePropagation()},S=a=>{m(a.target.value)},C=a=>{a.stopPropagation(),a.nativeEvent.stopImmediatePropagation()};return n.jsxs("ul",{className:i.list+" custom-scroll",onClick:y,ref:t,children:[n.jsx("li",{className:i.inputWrapper,children:n.jsx("input",{type:"text",value:c,onChange:S,className:i.input,onKeyDown:C,autoFocus:!0})}),h()]})};try{w.displayName="List",w.__docgenInfo={description:"",displayName:"List",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: string) => void"}},onSearchChange:{defaultValue:null,description:"",name:"onSearchChange",required:!0,type:{name:"(arg: string) => void"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}},search:{defaultValue:null,description:"",name:"search",required:!0,type:{name:"string"}},closeList:{defaultValue:null,description:"",name:"closeList",required:!0,type:{name:"() => void"}},onEscPress:{defaultValue:null,description:"",name:"onEscPress",required:!0,type:{name:"(evt: KeyboardEvent) => void"}}}}}catch{}const A="Choose country",G=()=>{const[u,c]=l.useState(""),[r,d]=l.useState(!1),[p,o]=l.useState(""),m=l.useRef(null);E(220,208,220);const t=()=>{var e;d(!1),o(""),(e=m.current)==null||e.focus()},h=e=>{e.keyCode===27&&t()},y=()=>{d(!0)},S=e=>{c(e),t()},C=e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),r?t():y()},a=()=>u!==""?n.jsx("span",{children:u}):n.jsx("span",{className:i.placeholder,children:A});return n.jsxs("div",{className:i.wrapper,children:[n.jsx("button",{className:i.button,onClick:C,ref:m,children:n.jsx("span",{children:a()})}),r&&n.jsx(w,{onChange:S,onSearchChange:o,items:x,search:p,closeList:t,onEscPress:h})]})},F={title:"Native/Select",decorators:[L({width:"100%",padding:20,height:"100vh",alignItems:"flex-start"}),k]},v=()=>n.jsx(G,{});var f;v.parameters={...v.parameters,storySource:{source:"() => <Select />",...(f=v.parameters)==null?void 0:f.storySource}};export{v as Example,F as default};
//# sourceMappingURL=Select.story-488b8ea6.js.map
