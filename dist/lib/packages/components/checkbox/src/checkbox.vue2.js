"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("../../../theme-chalk/src/checkbox.css");const k=require("./checkbox.js"),C=require("./composables/use-checkbox.js"),h=["tabindex","role","aria-checked"],B=["name","aria-hidden","checked","disabled","true-value","false-value"],$=["value","disabled","aria-hidden","name","checked"],y=e.defineComponent({name:"ViCheckbox"}),g=e.defineComponent({...y,props:k.checkboxProps,emits:k.checkboxEmits,setup(f){const r=f,a="vi-checkbox",b=e.useSlots(),{model:s,hasOwnLabel:d,isChecked:c,isFocused:t,isDisabled:u,checkboxSize:m,handleChange:i}=C.useCheckbox(r,b),p=e.computed(()=>({[a]:!0,[`${a}--${m.value}`]:m.value,"is-disabled":u.value,"is-border":r.border})),v=e.computed(()=>({[`${a}__input`]:!0,"is-checked":r.checked,"is-indeterminate":r.indeterminate,"is-focus":r.isFocused}));return(n,l)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(d)?"label":"span"),{class:e.normalizeClass(e.unref(p)),"aria-controls":n.indeterminate?n.controls:null},{default:e.withCtx(()=>[e.createElementVNode("span",{class:e.normalizeClass(e.unref(v)),tabindex:n.indeterminate?0:void 0,role:n.indeterminate?"checkbox":void 0,"aria-checked":n.indeterminate?"mixed":void 0},[n.trueLabel||n.falseLabel?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,id:"inputId","onUpdate:modelValue":l[0]||(l[0]=o=>e.isRef(s)?s.value=o:null),type:"checkbox",name:n.name,class:e.normalizeClass(`${a}__original`),"aria-hidden":n.indeterminate?"true":"false",checked:e.unref(c),disabled:e.unref(u),"true-value":n.trueLabel,"false-value":n.falseLabel,onChange:l[1]||(l[1]=(...o)=>e.unref(i)&&e.unref(i)(...o)),onFocus:l[2]||(l[2]=o=>t.value=!0),onBlur:l[3]||(l[3]=o=>t.value=!1)},null,42,B)),[[e.vModelCheckbox,e.unref(s)]]):e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:1,id:"inputId","onUpdate:modelValue":l[4]||(l[4]=o=>e.isRef(s)?s.value=o:null),class:e.normalizeClass(`${a}__original`),value:n.label,disabled:e.unref(u),type:"checkbox","aria-hidden":n.indeterminate?"true":"false",name:n.name,checked:e.unref(c),onChange:l[5]||(l[5]=(...o)=>e.unref(i)&&e.unref(i)(...o)),onFocus:l[6]||(l[6]=o=>t.value=!0),onBlur:l[7]||(l[7]=o=>t.value=!1)},null,42,$)),[[e.vModelCheckbox,e.unref(s)]]),n.indeterminate?(e.openBlock(),e.createElementBlock("span",{key:2,class:e.normalizeClass(`${a}__inner`)},null,2)):e.createCommentVNode("v-if",!0)],10,h),e.unref(d)||n.label?(e.openBlock(),e.createElementBlock("span",{key:0,role:"label",class:e.normalizeClass(`${a}__label`)},[e.renderSlot(n.$slots,"default"),n.$slots.default?e.createCommentVNode("v-if",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(n.label),1)],64))],2)):e.createCommentVNode("v-if",!0)]),_:3},8,["class","aria-controls"]))}});exports.default=g;
