"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("./message.js"),x=require("./message.vue.js"),c=require("vue"),v=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js"),i=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.js");let T=1;const s=[];let y=2e3;const r=function(e={},t){(i.default(e)||c.isVNode(e))&&(e={message:e});const l=`message_${T++}`;let d=20;s.forEach(g=>{var m;d+=((m=g.el)==null?void 0:m.offsetHeight)+16});const f={...e,zIndex:y++,id:l,offset:d,onClose:()=>{q(l,e.onClose)}},o=f.message,n=c.createVNode(x.default,f,v.default(o)?{default:o}:c.isVNode(o)?{default:()=>o}:null);n.appContext=t||r._context,n.props.onDestroy=()=>{c.render(null,a)};const a=document.createElement("div");c.render(n,a);let u=document.body;return i.default(e.appendTo)?u=document.querySelector(e.appendTo):e.appendTo&&e.appendTo instanceof Element&&(u=e.appendTo),u.appendChild(a.firstElementChild),s.push(n),{close:()=>n.component.proxy.visible=!1}};h.messageTypes.forEach(e=>{r[e]=(t={},l)=>{(i.default(t)||c.isVNode(t))&&(t={message:t}),r({...t,type:e},l)}});function q(e,t){var o;const l=s.findIndex(n=>n.props.id===e);if(l===-1)return;const d=s[l];t&&t(d),s.splice(l,1);const f=d.el.offsetHeight;for(let n=l;n<s.length;n++){const a=parseInt((o=s[n].el)==null?void 0:o.style.top)-f-16;s[n].component.props.offset=a}}function p(){for(let e=s.length-1;e>=0;e--){const t=s[e].component;(t==null?void 0:t.proxy).close()}}r.closeAll=p;r._context=null;exports.closeAll=p;exports.default=r;
