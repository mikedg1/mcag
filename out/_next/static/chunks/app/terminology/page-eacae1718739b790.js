(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{1519:function(e,t,r){Promise.resolve().then(r.t.bind(r,1749,23)),Promise.resolve().then(r.bind(r,6038)),Promise.resolve().then(r.t.bind(r,6069,23))},6038:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),o=r(2265),c=r(8792),a=r(6311),i=r.n(a);let l=window.innerWidth<701;function s(e){let{values:t,status:r}=e;function o(){l&&r(!1)}return t.map(e=>{let t=e.title.toLowerCase().replaceAll(" ","-").replace("(","").replace(")","");return(0,n.jsx)("li",{children:(0,n.jsx)(c.default,{href:"#".concat(t),onClick:o,children:e.title})},t)})}function u(e){let{data:t}=e,[r,c]=(0,o.useState)(!0),a=(0,o.useRef)(null),u=(0,o.useRef)(null);return(0,o.useEffect)(()=>{l&&c(!1)},[]),(0,o.useEffect)(()=>{l&&(r?(u.current.removeAttribute("inert"),a.current.classList.add("active-toc")):(u.current.setAttribute("inert","true"),a.current.classList.remove("active-toc")))},[r]),(0,n.jsxs)("div",{className:i().tocWrapper,ref:a,children:[(0,n.jsx)("button",{className:i().mNavToggleBtn,"aria-expendad":r,"aria-controls":"toc",onClick:()=>c(!r),children:"Table of contents"}),(0,n.jsx)("nav",{"aria-label":"Table of contents",id:"toc",className:i().toc,ref:u,tabIndex:"-1",children:(0,n.jsx)("ul",{className:i().terminology,children:Object.keys(t).map(e=>{if(t[e].length>0)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{className:i().termsSection,children:e.toUpperCase()},"l-".concat(e)),(0,n.jsx)(s,{values:t[e],status:c},"t-".concat(e))]})})})})]})}},6069:function(e){e.exports={terminologyWrapper:"terminology_terminologyWrapper__8zG8D",tocWrapper:"terminology_tocWrapper__aIwda",contentWrapper:"terminology_contentWrapper__HUR4y",imageWrapper:"terminology_imageWrapper__aHTYf"}},6311:function(e){e.exports={tocWrapper:"toc_tocWrapper__z3Qwm",toc:"toc_toc__d8JeX",terminology:"toc_terminology__WBOKc",termsSection:"toc_termsSection__qtBNw",mNavToggleBtn:"toc_mNavToggleBtn__VVfv7"}}},function(e){e.O(0,[250,782,971,69,744],function(){return e(e.s=1519)}),_N_E=e.O()}]);