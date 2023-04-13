"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/text.css");
const text = require("./text.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "text",
  props: text.textProps,
  setup(__props) {
    const props = __props;
    const textCls = vue.computed(() => {
      return {
        [`vi-text--${props.type}`]: props.type,
        [`vi-text--${props.size}`]: props.size,
        "is-kbd": props.kbd,
        "is-truncated": props.truncated
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        class: vue.normalizeClass(["vi-text", vue.unref(textCls)])
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class"]);
    };
  }
});
exports.default = _sfc_main;
