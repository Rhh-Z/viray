"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue");require("../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");const i=require("../../../../_virtual/lodash.js"),f=500,E=(n,r)=>{const v=t.getCurrentInstance(),a=v.slots.default&&v.slots.default(),e=t.ref(0),o=t.computed(()=>e.value-1<0?a.length-1:e.value-1),h=l=>{e.value=l},s=()=>{e.value===a.length-1&&(e.value=-1),e.value++,r("change",t.unref(e),t.unref(o))},d=l=>{n.trigger==="hover"&&l!==e.value&&(e.value=l,c()),r("change",t.unref(e),t.unref(o))},g=l=>{n.trigger==="click"&&l!==e.value&&(e.value=l,c()),r("change",t.unref(e),t.unref(o))},I=()=>{c(),e.value<=0&&(e.value=a==null?void 0:a.length),e.value--,r("change",t.unref(e),t.unref(o))},w=i.exports.throttle(I,f),y=()=>{c(),e.value===(a==null?void 0:a.length)-1&&(e.value=-1),e.value++,r("change",t.unref(e),t.unref(o))},T=i.exports.throttle(y,f);let u=0;const x=()=>{u&&(window.clearInterval(u),u=0)},c=()=>{n.autoplay&&n.pauseOnHover&&x()},C=()=>{u||n.autoplay&&n.pauseOnHover&&(u=window.setInterval(s,n.interval))};return t.watch(()=>n.autoplay,()=>{n.autoplay&&(u=window.setInterval(s,n.interval))},{immediate:!0}),{handleIndicatorEnter:d,handleIndicatorClick:g,setIndex:h,activeIndex:e,handleMouseLeave:C,throttlePrev:w,throttleNext:T}};exports.useCarousel=E;
