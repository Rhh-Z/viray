"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../../utils/definePropType.js"),n={type:{type:t.definePropType([String]),default:"default",validator(e){return["default","primary","success","info","danger","warning","error"].includes(e)}},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},icon:{type:String,default:""},href:{type:String,default:""}},r={click:e=>e instanceof MouseEvent};exports.linkEmits=r;exports.linkProps=n;
