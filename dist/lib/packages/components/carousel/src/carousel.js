"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});require("../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");const e=require("../../../utils/definePropType.js"),a=require("../../../../_virtual/lodash.js"),o={height:{type:String,default:""},width:{type:String,default:""},animated:{type:e.definePropType([String]),default:"default"},trigger:{type:e.definePropType([String]),values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}},l={change:(t,r)=>[t,r].every(a.exports.isNumber)};exports.carouselEmits=l;exports.carouselProps=o;