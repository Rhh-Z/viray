"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("../../../theme-chalk/src/timeline.css");const t=e.defineComponent({name:"ViTimeline",setup(r,{slots:i}){return e.provide("timeline",i),()=>e.h("ul",{class:["vi-timeline"]},[e.renderSlot(i,"default")])}});exports.default=t;