"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=require("./checkbox-group.js"),a=require("../../checkbox/src/constant.js"),i=require("../../../constants/events.js");require("../../../theme-chalk/src/checkbox-group.css");const l=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js"),p=e.defineComponent({__name:"checkbox-group",props:n.checkboxGroupProps,emits:n.checkboxGroupEmits,setup(s,{emit:t}){const c=s,r=async o=>{t(i.UPDATE_MODEL_EVENT,o),await e.nextTick(),t("change",o)},u=e.computed({get(){return c.modelValue},set(o){r(o)}});return e.provide(a.checkboxGroupContextKey,{...l.default(e.toRefs(c),["size","min","max","disabled"]),modelValue:u,changeEvent:r}),(o,d)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.tag),{class:"vi-checkbox-group"},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3}))}});exports.default=p;