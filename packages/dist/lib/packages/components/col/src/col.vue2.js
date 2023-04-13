"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const col = require("./col.js");
const constants = require("../../row/src/constants.js");
const common = require("../../../utils/common.js");
require("../../../theme-chalk/src/col.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "col",
  props: col.colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = vue.inject(constants.rowContextKey, { gutter: vue.computed(() => 0) });
    const colClK = vue.computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (common.isNumber(size)) {
          if (prop === "span")
            classes.push(`vi-col-${props[prop]}`);
          else if (size > 0)
            classes.push(`vi-col-${prop}-${props[prop]}`);
        }
      });
      return classes;
    });
    const style = vue.computed(() => {
      const styles = {};
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
      }
      return styles;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        class: vue.normalizeClass(["vi-col", vue.unref(colClK)]),
        style: vue.normalizeStyle(vue.unref(style))
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "style"]);
    };
  }
});
exports.default = _sfc_main;
