"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("../../../theme-chalk/src/backtop.css");const c=require("./backtop.js"),k=require("./use-backtop.js"),m=require("../../icon/index.js"),d=e.defineComponent({__name:"backtop",props:c.backtopProps,emits:c.backtopEmits,setup(i,{emit:a}){const t=i;defineOptions({name:"ViBacktop"});const s="ViBacktop",{visible:u,handleClick:o}=k.useBacktop(t,a,s),l=e.computed(()=>({right:`${t.right}px`,bottom:`${t.bottom}px`}));return(n,r)=>(e.openBlock(),e.createBlock(e.Transition,{name:"backtop-fade"},{default:e.withCtx(()=>[e.unref(u)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"vi-backtop",style:e.normalizeStyle(e.unref(l)),onClick:r[0]||(r[0]=(...p)=>e.unref(o)&&e.unref(o)(...p))},[e.renderSlot(n.$slots,"default",{},()=>[e.createVNode(e.unref(m.ViIcon),{name:n.icon},null,8,["name"])])],4)):e.createCommentVNode("v-if",!0)]),_:3}))}});exports.default=d;
