"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("../../../constants/events.js"),t=require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.js"),l={appendToBody:{type:Boolean,default:!1},width:{type:[String,Number]},title:{type:String,default:""},modelValue:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1},lockScroll:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0}},a={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[o.UPDATE_MODEL_EVENT]:e=>t.default(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0};exports.dialogEmits=a;exports.dialogProps=l;
