"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("../../../constants/events.js"),e=require("vue"),f=s=>{const t=e.getCurrentInstance().emit,n=e.ref(!1),o=e.ref(!1),a=()=>{n.value=!1},l=()=>{t("opened")},r=()=>{t("opened"),t(i.UPDATE_MODEL_EVENT,!1),s.destroyOnClose&&(o.value=!1)},u=()=>{t("close")};return e.watch(()=>s.modelValue,c=>{n.value=c}),e.onMounted(()=>{s.modelValue&&(n.value=!0,o.value=!0)}),{afterEnter:l,afterLeave:r,beforeLeave:u,visible:n,handleClose:a}};exports.useDialog=f;
