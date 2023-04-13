"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/icon.css");
const icon = require("./icon.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "icon",
  props: icon.iconProps,
  setup(__props) {
    const props = __props;
    vue.useCssVars((_ctx) => ({
      "8e7c279d-color": _ctx.color,
      "8e7c279d-size": _ctx.size
    }));
    const iconCls = vue.computed(() => {
      return {
        [`vi-icon-${props.name}`]: props.name,
        [`vi-icon--${props.size}`]: props.size
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "i",
        {
          class: vue.normalizeClass(vue.unref(iconCls))
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        2
        /* CLASS */
      );
    };
  }
});
exports.default = _sfc_main;
