import{j as i,w as C}from"./withCustomTheme-ab58be2d.js";import{w as A}from"./withCenteredStyle-93f62c3f.js";import{u as k}from"./useBgColor-6afa340b.js";import{r as m}from"./index-f1f749bf.js";import"./story.css-e50b5b1c.js";import"./_commonjsHelpers-042e6b4d.js";const _="_wrapper_1kdwk_1",B="_input_1kdwk_13",M="_list_1kdwk_19",N="_item_1kdwk_39",t={wrapper:_,input:B,list:M,item:N},s=l=>{const[p,u]=m.useState(""),[c,n]=m.useState([]),g=a=>{const e=a.target.value;if(u(e),e.length>0){const y=new RegExp(`^${e}`,"i"),b=new RegExp(`^${e}$`,"i"),w=l.items.filter(r=>y.test(r)).filter(r=>!b.test(r));n(w)}else n([])},S=a=>e=>{e.preventDefault(),u(a),n([])},h=()=>c.length===0?null:i.jsx("ul",{className:t.list,children:c.map(a=>i.jsx("li",{className:t.item,onClick:S(a),children:a},a))});return i.jsxs("div",{className:t.wrapper,children:[i.jsx("input",{type:"text",className:t.input,onChange:g,value:p}),h()]})};try{s.displayName="Autocomplete",s.__docgenInfo={description:"",displayName:"Autocomplete",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"string[]"}}}}}catch{}const v=`Afghanistan
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
`),f=()=>(k(240,208,233),i.jsx(s,{items:v})),L={title:"Native/Autocomplete",decorators:[A({width:440,alignSelf:"flex-start",padding:20}),C]},o=()=>i.jsx(f,{});var d;o.parameters={...o.parameters,storySource:{source:"() => <AutocompleteContainer />",...(d=o.parameters)==null?void 0:d.storySource}};export{o as Autocomplete,L as default};
//# sourceMappingURL=Autocomplete.story-7a93bd24.js.map
