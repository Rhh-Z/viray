"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),i=require("./avatar.js");require("../../../theme-chalk/src/avatar.css");const m=require("../../icon/index.js");require("../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");const l=require("../../../../_virtual/lodash.js"),v=["src","alt","srcset"],k=r.defineComponent({__name:"avatar",props:i.avatarProps,emits:i.avatarEmits,setup(u,{emit:p}){const o=u;r.useCssVars(e=>({"5e9f4473-fit":e.fit}));const s="vi-avatar",a=r.ref(!1),f=r.computed(()=>{const{size:e,icon:n,shape:c}=o,t=[s];return l.exports.isString(e)&&t.push(`${s}--${e}`),n&&t.push(`${s}--icon`),c&&t.push(`${s}--${c}`),t}),d=r.computed(()=>{const{size:e}=o;return l.exports.isNumber(e)?{width:`${e}px`,height:`${e}px`}:{width:e,height:e}});r.watch(()=>o.src,()=>a.value=!1);const h=e=>{a.value=!0,p("error",e)};return(e,n)=>(r.openBlock(),r.createElementBlock("span",{class:r.normalizeClass(r.unref(f)),style:r.normalizeStyle(r.unref(d))},[(e.src||e.srcSet)&&!a.value?(r.openBlock(),r.createElementBlock("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,onError:h},null,40,v)):e.icon?(r.openBlock(),r.createBlock(r.unref(m.ViIcon),{key:1,name:e.icon},null,8,["name"])):r.renderSlot(e.$slots,"default",{key:2})],6))}});exports.default=k;
