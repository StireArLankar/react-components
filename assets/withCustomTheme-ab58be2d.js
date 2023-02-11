import{r as l}from"./index-f1f749bf.js";var n={},m={get exports(){return n},set exports(e){n=e}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,p){var t,o={},_=null,f=null;p!==void 0&&(_=""+p),r.key!==void 0&&(_=""+r.key),r.ref!==void 0&&(f=r.ref);for(t in r)x.call(r,t)&&!v.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:a,type:e,key:_,ref:f,props:o,_owner:y.current}}s.Fragment=c;s.jsx=i;s.jsxs=i;(function(e){e.exports=s})(m);const E=e=>n.jsx(n.Fragment,{children:e()});export{n as j,E as w};
//# sourceMappingURL=withCustomTheme-ab58be2d.js.map
