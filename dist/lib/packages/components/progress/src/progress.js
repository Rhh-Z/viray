"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../../utils/definePropType.js"),r={type:{type:String,default:"line",values:["line","circle","dashboard"]},status:{type:String,default:"",values:["","success","exception","warning"]},percentage:{type:Number,default:0,validator:e=>e>=0&&e<=100},strokeLinecap:{type:t.definePropType(String),default:"round"},format:{type:t.definePropType(Function),default:e=>`${e}%`},strokeWidth:{type:Number,default:6},duration:{type:Number,default:3},color:{type:t.definePropType([String,Array,Function]),default:""},showText:{type:Boolean,default:!0},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},indeterminate:{type:Boolean,default:!1}};exports.progressProps=r;
