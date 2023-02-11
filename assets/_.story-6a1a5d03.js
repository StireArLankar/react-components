import{j as b,w as re}from"./withCustomTheme-ab58be2d.js";import{R as V,r as _}from"./index-f1f749bf.js";import{w as ae}from"./withCenteredStyle-93f62c3f.js";import{w as ie}from"./withTopLabel-64f9ea37.js";import{s as oe}from"./theme.css-ff310367.js";import{c as ne}from"./vanilla-extract-recipes-createRuntimeFn.esm-d30eb010.js";import{A as se}from"./index-5256da60.js";import{m as fe}from"./motion-c178da69.js";import"./_commonjsHelpers-042e6b4d.js";import"./story.css-e50b5b1c.js";import"./use-force-update-1df41dbe.js";function j(){}function le(){return!0}function E(a){return!!(a||"").match(/\d/)}function L(a){return a==null}function K(a){return a.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function ue(a){switch(a){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function ce(a,n,l){var e=ue(l),t=a.search(/[1-9]/);return t=t===-1?a.length:t,a.substring(0,t)+a.substring(t,a.length).replace(e,"$1"+n)}function $(a,n){n===void 0&&(n=!0);var l=a[0]==="-",e=l&&n;a=a.replace("-","");var t=a.split("."),r=t[0],o=t[1]||"";return{beforeDecimal:r,afterDecimal:o,hasNagation:l,addNegation:e}}function pe(a){if(!a)return a;var n=a[0]==="-";n&&(a=a.substring(1,a.length));var l=a.split("."),e=l[0].replace(/^0+/,"")||"0",t=l[1]||"";return(n?"-":"")+e+(t?"."+t:"")}function q(a,n,l){for(var e="",t=l?"0":"",r=0;r<=n-1;r++)e+=a[r]||t;return e}function G(a,n){return Array(n+1).join(a)}function me(a){a+="";var n=a[0]==="-"?"-":"";n&&(a=a.substring(1));var l=a.split(/[eE]/g),e=l[0],t=l[1];if(t=Number(t),!t)return n+e;e=e.replace(".","");var r=1+t,o=e.length;return r<0?e="0."+G("0",Math.abs(r))+e:r>=o?e=e+G("0",r-o):e=(e.substring(0,r)||"0")+"."+e.substring(r),n+e}function he(a,n,l){if(["","-"].indexOf(a)!==-1)return a;var e=a.indexOf(".")!==-1&&n,t=$(a),r=t.beforeDecimal,o=t.afterDecimal,f=t.hasNagation,i=parseFloat("0."+(o||"0")),s=o.length<=n?"0."+o:i.toFixed(n),u=s.split("."),p=r.split("").reverse().reduce(function(m,d,S){return m.length>S?(Number(m[0])+Number(d)).toString()+m.substring(1,m.length):d+m},u[0]),c=q(u[1]||"",Math.min(n,o.length),l),h=f?"-":"",v=e?".":"";return""+h+p+v+c}function W(a,n){if(a.value=a.value,a!==null){if(a.createTextRange){var l=a.createTextRange();return l.move("character",n),l.select(),!0}return a.selectionStart||a.selectionStart===0?(a.focus(),a.setSelectionRange(n,n),!0):(a.focus(),!1)}}function ve(a,n){for(var l=0,e=0,t=a.length,r=n.length;a[l]===n[l]&&l<t;)l++;for(;a[t-1-e]===n[r-1-e]&&r-e>l&&t-e>l;)e++;return{start:l,end:t-e}}function M(a,n,l){return Math.min(Math.max(a,n),l)}function Z(a){return Math.max(a.selectionStart,a.selectionEnd)}function de(a){return a||typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function ge(a,n){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&n.indexOf(e)===-1&&(l[e]=a[e]);return l}var xe={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:j,onChange:j,onKeyDown:j,onMouseUp:j,onFocus:j,onBlur:j,isAllowed:le},z=function(a){function n(l){a.call(this,l);var e=l.defaultValue;this.validateProps();var t=this.formatValueProp(e);this.state={value:t,numAsString:this.removeFormatting(t),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return a&&(n.__proto__=a),n.prototype=Object.create(a&&a.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){this.setState({mounted:!0})},n.prototype.componentDidUpdate=function(e){this.updateValueIfRequired(e)},n.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout)},n.prototype.updateValueIfRequired=function(e){var t=this,r=t.props,o=t.state,f=t.focusedElm,i=o.value,s=o.numAsString;if(s===void 0&&(s=""),e!==r){this.validateProps();var u=this.formatNumString(s),p=L(r.value)?u:this.formatValueProp(),c=this.removeFormatting(p),h=parseFloat(c),v=parseFloat(s);((!isNaN(h)||!isNaN(v))&&h!==v||u!==i||f===null&&p!==i)&&this.updateValue({formattedValue:p,numAsString:c,input:f,source:"prop",event:null})}},n.prototype.getFloatString=function(e){e===void 0&&(e="");var t=this.props,r=t.decimalScale,o=this.getSeparators(),f=o.decimalSeparator,i=this.getNumberRegex(!0),s=e[0]==="-";s&&(e=e.replace("-","")),f&&r===0&&(e=e.split(f)[0]),e=(e.match(i)||[]).join("").replace(f,".");var u=e.indexOf(".");return u!==-1&&(e=e.substring(0,u)+"."+e.substring(u+1,e.length).replace(new RegExp(K(f),"g"),"")),s&&(e="-"+e),e},n.prototype.getNumberRegex=function(e,t){var r=this.props,o=r.format,f=r.decimalScale,i=r.customNumerals,s=this.getSeparators(),u=s.decimalSeparator;return new RegExp("[0-9"+(i?i.join(""):"")+"]"+(u&&f!==0&&!t&&!o?"|"+K(u):""),e?"g":void 0)},n.prototype.getSeparators=function(){var e=this.props,t=e.decimalSeparator,r=this.props,o=r.thousandSeparator,f=r.allowedDecimalSeparators;return o===!0&&(o=","),f||(f=[t,"."]),{decimalSeparator:t,thousandSeparator:o,allowedDecimalSeparators:f}},n.prototype.getMaskAtIndex=function(e){var t=this.props,r=t.mask;return r===void 0&&(r=" "),typeof r=="string"?r:r[e]||" "},n.prototype.getValueObject=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},n.prototype.validateProps=function(){var e=this.props,t=e.mask,r=this.getSeparators(),o=r.decimalSeparator,f=r.thousandSeparator;if(o===f)throw new Error(`
          Decimal separator can't be same as thousand separator.
          thousandSeparator: `+f+` (thousandSeparator = {true} is same as thousandSeparator = ",")
          decimalSeparator: `+o+` (default value for decimalSeparator is .)
       `);if(t){var i=t==="string"?t:t.toString();if(i.match(/\d/g))throw new Error(`
          Mask `+t+` should not contain numeric character;
        `)}},n.prototype.setPatchedCaretPosition=function(e,t,r){W(e,t),this.caretPositionTimeout=setTimeout(function(){e.value===r&&W(e,t)},0)},n.prototype.correctCaretPosition=function(e,t,r){var o=this.props,f=o.prefix,i=o.suffix,s=o.format;if(e==="")return 0;if(t=M(t,0,e.length),!s){var u=e[0]==="-";return M(t,f.length+(u?1:0),e.length-i.length)}if(typeof s=="function"||s[t]==="#"&&E(e[t])||s[t-1]==="#"&&E(e[t-1]))return t;var p=s.indexOf("#"),c=s.lastIndexOf("#");t=M(t,p,c+1);for(var h=s.substring(t,s.length).indexOf("#"),v=t,m=t+(h===-1?0:h);v>p&&(s[v]!=="#"||!E(e[v]));)v-=1;var d=!E(e[m])||r==="left"&&t!==p||t-v<m-t;return d?E(e[v])?v+1:v:m},n.prototype.getCaretPosition=function(e,t,r){var o=this.props,f=o.format,i=this.state.value,s=this.getNumberRegex(!0),u=(e.match(s)||[]).join(""),p=(t.match(s)||[]).join(""),c,h;for(c=0,h=0;h<r;h++){var v=e[h]||"",m=t[c]||"";if(!(!v.match(s)&&v!==m)&&!(v==="0"&&m.match(s)&&m!=="0"&&u.length!==p.length)){for(;v!==t[c]&&c<t.length;)c++;c++}}return typeof f=="string"&&!i&&(c=t.length),c=this.correctCaretPosition(t,c),c},n.prototype.removePrefixAndSuffix=function(e){var t=this.props,r=t.format,o=t.prefix,f=t.suffix;if(!r&&e){var i=e[0]==="-";i&&(e=e.substring(1,e.length)),e=o&&e.indexOf(o)===0?e.substring(o.length,e.length):e;var s=e.lastIndexOf(f);e=f&&s!==-1&&s===e.length-f.length?e.substring(0,s):e,i&&(e="-"+e)}return e},n.prototype.removePatternFormatting=function(e){for(var t=this.props,r=t.format,o=r.split("#").filter(function(h){return h!==""}),f=0,i="",s=0,u=o.length;s<=u;s++){var p=o[s]||"",c=s===u?e.length:e.indexOf(p,f);if(c===-1){i=e;break}else i+=e.substring(f,c),f=c+p.length}return(i.match(this.getNumberRegex(!0))||[]).join("")},n.prototype.removeFormatting=function(e){var t=this.props,r=t.format,o=t.removeFormatting;return e&&(r?typeof r=="string"?e=this.removePatternFormatting(e):typeof o=="function"?e=o(e):e=(e.match(this.getNumberRegex(!0))||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e)},n.prototype.formatWithPattern=function(e){for(var t=this.props,r=t.format,o=0,f=r.split(""),i=0,s=r.length;i<s;i++)r[i]==="#"&&(f[i]=e[o]||this.getMaskAtIndex(o),o+=1);return f.join("")},n.prototype.formatAsNumber=function(e){var t=this.props,r=t.decimalScale,o=t.fixedDecimalScale,f=t.prefix,i=t.suffix,s=t.allowNegative,u=t.thousandsGroupStyle,p=this.getSeparators(),c=p.thousandSeparator,h=p.decimalSeparator,v=e.indexOf(".")!==-1||r&&o,m=$(e,s),d=m.beforeDecimal,S=m.afterDecimal,y=m.addNegation;return r!==void 0&&(S=q(S,r,o)),c&&(d=ce(d,c,u)),f&&(d=f+d),i&&(S=S+i),y&&(d="-"+d),e=d+(v&&h||"")+S,e},n.prototype.formatNumString=function(e){e===void 0&&(e="");var t=this.props,r=t.format,o=t.allowEmptyFormatting,f=t.customNumerals,i=e;if(f&&f.length===10){var s=new RegExp("["+f.join("")+"]","g");i=e.replace(s,function(u){return f.indexOf(u).toString()})}return e===""&&!o?i="":e==="-"&&!r?i="-":typeof r=="string"?i=this.formatWithPattern(i):typeof r=="function"?i=r(i):i=this.formatAsNumber(i),i},n.prototype.formatValueProp=function(e){var t=this.props,r=t.format,o=t.decimalScale,f=t.fixedDecimalScale,i=t.allowEmptyFormatting,s=this.props,u=s.value,p=s.isNumericString;u=L(u)?e:u;var c=!u&&u!==0;if(c&&i&&(u=""),c&&!i)return"";typeof u=="number"&&(u=me(u),p=!0),u==="Infinity"&&p&&(u=""),p&&!r&&typeof o=="number"&&(u=he(u,o,f));var h=p?this.formatNumString(u):this.formatInput(u);return h},n.prototype.formatNegation=function(e){e===void 0&&(e="");var t=this.props,r=t.allowNegative,o=new RegExp("(-)"),f=new RegExp("(-)(.)*(-)"),i=o.test(e),s=f.test(e);return e=e.replace(/-/g,""),i&&!s&&r&&(e="-"+e),e},n.prototype.formatInput=function(e){e===void 0&&(e="");var t=this.props,r=t.format;return r||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)},n.prototype.isCharacterAFormat=function(e,t){var r=this.props,o=r.format,f=r.prefix,i=r.suffix,s=r.decimalScale,u=r.fixedDecimalScale,p=this.getSeparators(),c=p.decimalSeparator;return!!(typeof o=="string"&&o[e]!=="#"||!o&&(e<f.length||e>=t.length-i.length||s&&u&&t[e]===c))},n.prototype.correctInputValue=function(e,t,r){var o=this,f=this.props,i=f.format,s=f.allowNegative,u=f.prefix,p=f.suffix,c=f.decimalScale,h=this.getSeparators(),v=h.allowedDecimalSeparators,m=h.decimalSeparator,d=this.state.numAsString||"",S=this.selectionBeforeInput,y=S.selectionStart,D=S.selectionEnd,F=ve(t,r),g=F.start,x=F.end;if(!i&&g===x&&v.indexOf(r[y])!==-1){var N=c===0?"":m;return r.substr(0,y)+N+r.substr(y+1,r.length)}var T=i?0:u.length,I=t.length-(i?0:p.length);if(r.length>t.length||!r.length||g===x||y===0&&D===t.length||g===0&&x===t.length||y===T&&D===I)return r;var k=t.substr(g,x-g),J=!![].concat(k).find(function(w,A){return o.isCharacterAFormat(A+g,t)});if(J){var Q=t.substr(g),R={},P=[];[].concat(Q).forEach(function(w,A){o.isCharacterAFormat(A+g,t)?R[A]=w:A>k.length-1&&P.push(w)}),Object.keys(R).forEach(function(w){P.length>w?P.splice(w,0,R[w]):P.push(R[w])}),r=t.substr(0,g)+P.join("")}if(!i){var U=this.removeFormatting(r),O=$(U,s),X=O.beforeDecimal,Y=O.afterDecimal,ee=O.addNegation,te=e<r.indexOf(m)+1;if(U.length<d.length&&te&&X===""&&!parseFloat(Y))return ee?"-":""}return r},n.prototype.updateValue=function(e){var t=e.formattedValue,r=e.input,o=e.setCaretPosition;o===void 0&&(o=!0);var f=e.source,i=e.event,s=e.numAsString,u=e.caretPos,p=this.props,c=p.onValueChange,h=this.state,v=h.value;if(r){if(u===void 0&&o){var m=e.inputValue||r.value,d=Z(r);r.value=t,u=this.getCaretPosition(m,t,d)}r.value=t,o&&this.setPatchedCaretPosition(r,u,t)}s===void 0&&(s=this.removeFormatting(t)),t!==v&&(this.setState({value:t,numAsString:s}),c(this.getValueObject(t,s),{event:i,source:f}))},n.prototype.onChange=function(e){var t=e.target,r=t.value,o=this,f=o.state,i=o.props,s=i.isAllowed,u=f.value||"",p=Z(t);r=this.correctInputValue(p,u,r);var c=this.formatInput(r)||"",h=this.removeFormatting(c),v=this.getValueObject(c,h),m=s(v);m||(c=u),this.updateValue({formattedValue:c,numAsString:h,inputValue:r,input:t,event:e,source:"event"}),m&&i.onChange(e)},n.prototype.onBlur=function(e){var t=this,r=t.props,o=t.state,f=r.format,i=r.onBlur,s=r.allowLeadingZeros,u=o.numAsString,p=o.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout),!f){isNaN(parseFloat(u))&&(u=""),s||(u=pe(u));var c=this.formatNumString(u);if(c!==p){this.updateValue({formattedValue:c,numAsString:u,input:e.target,setCaretPosition:!1,event:e,source:"event"}),i(e);return}}i(e)},n.prototype.onKeyDown=function(e){var t=e.target,r=e.key,o=t.selectionStart,f=t.selectionEnd,i=t.value;i===void 0&&(i="");var s,u=this.props,p=u.decimalScale,c=u.fixedDecimalScale,h=u.prefix,v=u.suffix,m=u.format,d=u.onKeyDown,S=p!==void 0&&c,y=this.getNumberRegex(!1,S),D=new RegExp("-"),F=typeof m=="string";if(this.selectionBeforeInput={selectionStart:o,selectionEnd:f},r==="ArrowLeft"||r==="Backspace"?s=o-1:r==="ArrowRight"?s=o+1:r==="Delete"&&(s=o),s===void 0||o!==f){d(e);return}var g=s,x=F?m.indexOf("#"):h.length,N=F?m.lastIndexOf("#")+1:i.length-v.length;if(r==="ArrowLeft"||r==="ArrowRight"){var T=r==="ArrowLeft"?"left":"right";g=this.correctCaretPosition(i,s,T)}else if(r==="Delete"&&!y.test(i[s])&&!D.test(i[s]))for(;!y.test(i[g])&&g<N;)g++;else if(r==="Backspace"&&!y.test(i[s])){if(o<=x+1&&i[0]==="-"&&typeof m>"u"){var I=i.substring(1);this.updateValue({formattedValue:I,caretPos:g,input:t,event:e,source:"event"})}else if(!D.test(i[s])){for(;!y.test(i[g-1])&&g>x;)g--;g=this.correctCaretPosition(i,g,"left")}}(g!==s||s<x||s>N)&&(e.preventDefault(),this.setPatchedCaretPosition(t,g,i)),e.isUnitTestRun&&this.setPatchedCaretPosition(t,g,i),d(e)},n.prototype.onMouseUp=function(e){var t=e.target,r=t.selectionStart,o=t.selectionEnd,f=t.value;if(f===void 0&&(f=""),r===o){var i=this.correctCaretPosition(f,r);i!==r&&this.setPatchedCaretPosition(t,i,f)}this.props.onMouseUp(e)},n.prototype.onFocus=function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout(function(){var r=e.target,o=r.selectionStart,f=r.selectionEnd,i=r.value;i===void 0&&(i="");var s=t.correctCaretPosition(i,o);s!==o&&!(o===0&&f===i.length)&&t.setPatchedCaretPosition(r,s,i),t.props.onFocus(e)},0)},n.prototype.render=function(){var e=this.props,t=e.type,r=e.displayType,o=e.customInput,f=e.renderText,i=e.getInputRef,s=e.format;e.thousandSeparator,e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle,e.decimalScale,e.fixedDecimalScale,e.prefix,e.suffix,e.removeFormatting,e.mask,e.defaultValue,e.isNumericString,e.allowNegative,e.allowEmptyFormatting,e.allowLeadingZeros,e.onValueChange,e.isAllowed,e.customNumerals,e.onChange,e.onKeyDown,e.onMouseUp,e.onFocus,e.onBlur,e.value;var u=ge(e,["type","displayType","customInput","renderText","getInputRef","format","thousandSeparator","decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","decimalScale","fixedDecimalScale","prefix","suffix","removeFormatting","mask","defaultValue","isNumericString","allowNegative","allowEmptyFormatting","allowLeadingZeros","onValueChange","isAllowed","customNumerals","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value"]),p=u,c=this.state,h=c.value,v=c.mounted,m=v&&de(s)?"numeric":void 0,d=Object.assign({inputMode:m},p,{type:t,value:h,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if(r==="text")return f?f(h,p)||null:V.createElement("span",Object.assign({},p,{ref:i}),h);if(o){var S=o;return V.createElement(S,Object.assign({},d,{ref:i}))}return V.createElement("input",Object.assign({},d,{ref:i}))},n}(V.Component);z.defaultProps=xe;const C={container:"_10pcjf88",label:"_10pcjf89",inputWrapper:ne({defaultClassName:"_10pcjf87",variantClassNames:{focused:{true:"_10pcjf81",false:"_10pcjf82"},error:{true:"_10pcjf83",false:"_10pcjf84"},disabled:{true:"_10pcjf85",false:"_10pcjf86"}},defaultVariants:{},compoundVariants:[]}),input:"_10pcjf8g",children:"_10pcjf8h",helper:"_10pcjf80"},Se=_.memo(a=>{const{label:n,error:l,helperText:e,onChange:t,value:r,id:o,placeholder:f,disabled:i,multiline:s,children:u,readOnly:p,autoComplete:c,onUpdate:h,...v}=a,[m,d]=_.useState(!1),S=x=>{var N;(N=a==null?void 0:a.onBlur)==null||N.call(a,x),d(!1)},y=x=>{var N;(N=a==null?void 0:a.onFocus)==null||N.call(a,x),d(!0)},D=()=>u?b.jsx("div",{className:C.children,children:u}):null,F=x=>{if(!i)return t==null?void 0:t(x.target.value)},g=()=>b.jsx(z,{...v,placeholder:f,readOnly:p,disabled:i,id:o,onChange:F,className:C.input,value:r,onFocus:y,onBlur:S,autoComplete:c,format:x=>be(x,"+7 (###) ###-##-##","_"),removeFormatting:x=>ye(x,"+7 ##########")});return b.jsxs("div",{className:C.container,children:[b.jsx("label",{className:C.label,htmlFor:o,children:n}),b.jsxs("div",{className:C.inputWrapper({error:l,disabled:i,focused:m}),children:[g(),D(),b.jsx(se,{children:e&&b.jsx(fe.div,{className:C.helper,exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},children:b.jsx("span",{children:e})},"helper")})]})]})}),ye=(a,n)=>{const l=n.split("#").filter(r=>r!=="");let e=0,t="";for(let r=0,o=l.length;r<=o;r++){const f=l[r]||"",i=r===o?a.length:a.indexOf(f,e);if(i===-1){t=a;break}else t+=a.substring(e,i),e=i+f.length}return(t.match(/\d/g)||[]).join("")},be=(a,n,l=" ")=>{let e=0;const t=n.split("");a.match(/[78][0-9]{10}/)&&(a=a.slice(1));for(let r=0,o=n.length;r<o;r++)n[r]==="#"&&(t[r]=a[e]||Ne(e,l),e+=1);return t.join("")},Ne=(a,n)=>typeof n=="string"?n:n[a]||" ",we=b.jsx(b.Fragment,{children:b.jsx("a",{className:oe,href:"https://github.com/s-yadav/react-number-format",children:"docs"})}),Me={title:"Design/MaskedInput",decorators:[re,ae({width:"100%",background:"teal",minHeight:"100vh",display:"grid",placeItems:"center"}),ie(we)]},De=()=>{const[a,n]=_.useState("");return b.jsx(Se,{value:a,onChange:n,id:"phone",name:"phone",label:"Phone input"})},B=()=>b.jsx(De,{});var H;B.parameters={...B.parameters,storySource:{source:"() => <Example />",...(H=B.parameters)==null?void 0:H.storySource}};export{B as Phone,Me as default};
//# sourceMappingURL=_.story-6a1a5d03.js.map
