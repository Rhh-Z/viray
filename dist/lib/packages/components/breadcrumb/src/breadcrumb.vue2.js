"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("vue"),c=require("./breadcrumb.js"),n=require("./constants.js");require("../../../theme-chalk/src/breadcrumb.css");const l=r.defineComponent({__name:"breadcrumb",props:c.breadcrumbProps,setup(a){const o=a,u=r.ref();return r.provide(n.breadcrumbKey,o),r.onMounted(()=>{var t;const e=(t=u.value)==null?void 0:t.querySelectorAll("vi-breadcrumb--item");e!=null&&e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,t)=>(r.openBlock(),r.createElementBlock("div",{ref_key:"breadcrumb",ref:u,"aria-label":"Breadcrumb",class:"vi-breadcrumb",role:"navigation"},[r.renderSlot(e.$slots,"default")],512))}});exports.default=l;