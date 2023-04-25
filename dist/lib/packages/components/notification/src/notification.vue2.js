"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("./notification.js"),u=require("../../icon/index.js");require("../../../theme-chalk/src/notification.css");const h={class:"vi-notification__group"},B=["textContent"],S={key:0},T=["innerHTML"],_=e.defineComponent({__name:"notification",props:a.notificationProps,emits:a.notificationEmits,setup(f,{expose:m}){const o=f,n=e.ref(!1);let s=null;const d={success:"check-circle-fill",info:"info-circle-fill",warning:"warning-circle-fill",error:"close-circle-fill"},p=e.computed(()=>d[o.type]),v=e.computed(()=>o.position.startsWith("top")?"top":"bottom"),y=e.computed(()=>({[v.value]:`${o.offset}px`,zIndex:o.zIndex})),k=e.computed(()=>({"vi-notification":!0,customClass:o.customClass,right:o.position.endsWith("right"),left:o.position.endsWith("left")})),C=e.computed(()=>({"vi-notification__icon":!0,[`is-${o.type}`]:o.type}));e.onMounted(()=>{n.value=!0,l()});function l(){o.duration>0&&(s=setTimeout(()=>{n.value=!1},o.duration))}function r(){n.value=!1}const g=()=>{clearTimeout(Number(s))};return e.onUnmounted(()=>{clearTimeout(Number(s))}),m({visible:n,close:r}),(t,i)=>(e.openBlock(),e.createBlock(e.Transition,{name:"notification-fade",onBeforeLeave:t.onClose,onAfterLeave:i[1]||(i[1]=c=>t.$emit("destroy")),persisted:""},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass(e.unref(k)),style:e.normalizeStyle(e.unref(y)),onMouseenter:g,onMouseleave:l,onClick:i[0]||(i[0]=(...c)=>t.onClick&&t.onClick(...c))},[o.type?(e.openBlock(),e.createBlock(e.unref(u.ViIcon),{key:0,name:e.unref(p),class:e.normalizeClass(e.unref(C)),style:{"font-size":"24px"}},null,8,["name","class"])):e.createCommentVNode("v-if",!0),e.createElementVNode("div",h,[e.createElementVNode("h2",{class:"vi-notification__title",textContent:e.toDisplayString(t.title)},null,8,B),e.withDirectives(e.createElementVNode("div",{class:"vi-notification__content",style:e.normalizeStyle(t.title?void 0:{margin:0})},[e.renderSlot(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(e.openBlock(),e.createElementBlock("p",{key:1,innerHTML:t.message},null,8,T)):(e.openBlock(),e.createElementBlock("p",S,e.toDisplayString(t.message),1))])],4),[[e.vShow,t.message]]),t.closeable?(e.openBlock(),e.createBlock(e.unref(u.ViIcon),{key:0,name:t.icon,class:"vi-notification__close",onClick:r},null,8,["name"])):e.createCommentVNode("v-if",!0)])],38),[[e.vShow,n.value]])]),_:3},8,["onBeforeLeave"]))}});exports.default=_;