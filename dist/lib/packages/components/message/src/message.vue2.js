"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("./message.js");require("../../../theme-chalk/src/message.css");const l=require("../../icon/index.js"),y={key:0,class:"vi-message__content"},B=["innerHTML"],_=e.defineComponent({__name:"message",props:a.messageProps,emits:a.messageEmits,setup(i,{emit:u}){const s=i,o=e.ref(!1),m=()=>{u("close")},f=()=>{o.value=!1};e.onMounted(()=>{o.value=!0,r()});let t=null;const r=()=>{s.duration>0&&(t=setTimeout(()=>{o.value=!1},s.duration))},d=()=>{clearTimeout(Number(t)),r()};e.onUnmounted(()=>{clearTimeout(Number(t))});const p={info:"info-circle-fill",success:"check-circle-fill",error:"close-circle-fill",warning:"warning-circle-fill"},v=e.computed(()=>p[s.type]),g=e.computed(()=>({"vi-message":!0,[`vi-message--${s.type}`]:s.type,[s.customClass]:s.customClass,"is-center":s.center})),k=e.computed(()=>({top:`${s.offset}px`,zIndex:s.zIndex}));return(n,c)=>(e.openBlock(),e.createBlock(e.Transition,{name:"message-fade",onBeforeLeave:m,onAfterLeave:c[0]||(c[0]=T=>n.$emit("destroy")),persisted:""},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(e.unref(g)),style:e.normalizeStyle(e.unref(k)),onMouseenter:d},[n.icon?(e.openBlock(),e.createBlock(e.unref(l.ViIcon),{key:0,name:n.icon,class:"vi-message__icon"},null,8,["name"])):(e.openBlock(),e.createBlock(e.unref(l.ViIcon),{key:1,name:e.unref(v),class:"vi-message__icon"},null,8,["name"])),e.renderSlot(n.$slots,"default",{},()=>[n.dangerouslyUseHTMLString?(e.openBlock(),e.createElementBlock("span",{key:1,class:"vi-message__content",innerHTML:n.message},null,8,B)):(e.openBlock(),e.createElementBlock("span",y,e.toDisplayString(n.message),1))]),n.closeable?(e.openBlock(),e.createBlock(e.unref(l.ViIcon),{key:2,name:"close",onClick:f,class:"vi-message__close"})):e.createCommentVNode("v-if",!0)],38),[[e.vShow,o.value]])]),_:3}))}});exports.default=_;
