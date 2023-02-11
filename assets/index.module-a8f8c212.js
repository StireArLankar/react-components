import{r as c}from"./index-f1f749bf.js";import{r as P}from"./index-96c5f47c.js";function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(this,arguments)}function y(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function b(...e){return n=>e.forEach(t=>y(t,n))}function M(...e){return c.useCallback(b(...e),e)}function k(e,n=[]){let t=[];function o(s,l){const u=c.createContext(l),f=t.length;t=[...t,l];function a(i){const{scope:d,children:h,...$}=i,E=(d==null?void 0:d[e][f])||u,S=c.useMemo(()=>$,Object.values($));return c.createElement(E.Provider,{value:S},h)}function m(i,d){const h=(d==null?void 0:d[e][f])||u,$=c.useContext(h);if($)return $;if(l!==void 0)return l;throw new Error(`\`${i}\` must be used within \`${s}\``)}return a.displayName=s+"Provider",[a,m]}const r=()=>{const s=t.map(l=>c.createContext(l));return function(u){const f=(u==null?void 0:u[e])||s;return c.useMemo(()=>({[`__scope${e}`]:{...u,[e]:f}}),[u,f])}};return r.scopeName=e,[o,g(r,...n)]}function g(...e){const n=e[0];if(e.length===1)return n;const t=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const l=o.reduce((u,{useScope:f,scopeName:a})=>{const i=f(s)[`__scope${a}`];return{...u,...i}},{});return c.useMemo(()=>({[`__scope${n.scopeName}`]:l}),[l])}};return t.scopeName=n.scopeName,t}function A(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e==null||e(r),t===!1||!r.defaultPrevented)return n==null?void 0:n(r)}}function x(e){const n=c.useRef(e);return c.useEffect(()=>{n.current=e}),c.useMemo(()=>(...t)=>{var o;return(o=n.current)===null||o===void 0?void 0:o.call(n,...t)},[])}function B({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,r]=w({defaultProp:n,onChange:t}),s=e!==void 0,l=s?e:o,u=x(t),f=c.useCallback(a=>{if(s){const i=typeof a=="function"?a(e):a;i!==e&&u(i)}else r(a)},[s,e,r,u]);return[l,f]}function w({defaultProp:e,onChange:n}){const t=c.useState(e),[o]=t,r=c.useRef(o),s=x(n);return c.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),t}const D=Boolean(globalThis==null?void 0:globalThis.document)?c.useLayoutEffect:()=>{},C=c.forwardRef((e,n)=>{const{children:t,...o}=e,r=c.Children.toArray(t),s=r.find(_);if(s){const l=s.props.children,u=r.map(f=>f===s?c.Children.count(l)>1?c.Children.only(null):c.isValidElement(l)?l.props.children:null:f);return c.createElement(v,p({},o,{ref:n}),c.isValidElement(l)?c.cloneElement(l,void 0,u):null)}return c.createElement(v,p({},o,{ref:n}),t)});C.displayName="Slot";const v=c.forwardRef((e,n)=>{const{children:t,...o}=e;return c.isValidElement(t)?c.cloneElement(t,{...R(o,t.props),ref:b(n,t.ref)}):c.Children.count(t)>1?c.Children.only(null):null});v.displayName="SlotClone";const N=({children:e})=>c.createElement(c.Fragment,null,e);function _(e){return c.isValidElement(e)&&e.type===N}function R(e,n){const t={...n};for(const o in n){const r=e[o],s=n[o];/^on[A-Z]/.test(o)?r&&s?t[o]=(...u)=>{s(...u),r(...u)}:r&&(t[o]=r):o==="style"?t[o]={...r,...s}:o==="className"&&(t[o]=[r,s].filter(Boolean).join(" "))}return{...e,...t}}const O=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],T=O.reduce((e,n)=>{const t=c.forwardRef((o,r)=>{const{asChild:s,...l}=o,u=s?C:n;return c.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.createElement(u,p({},l,{ref:r}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function F(e,n){e&&P.flushSync(()=>e.dispatchEvent(n))}export{k as $,p as _,M as a,B as b,T as c,A as d,D as e,x as f,C as g,F as h,b as i};
//# sourceMappingURL=index.module-a8f8c212.js.map
