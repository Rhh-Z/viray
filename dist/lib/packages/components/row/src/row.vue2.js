"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const constants = require("./constants.js");
const row = require("./row.js");
require("../../../theme-chalk/src/row.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "row",
  props: row.rowProps,
  setup(__props) {
    const props = __props;
    const gutter = vue.computed(() => props.gutter);
    vue.provide(constants.rowContextKey, { gutter });
    const style = vue.computed(() => {
      const styles = {};
      if (!gutter.value) {
        return styles;
      }
      styles.marginLeft = styles.marginRight = `vi-row-${props.gutter / 2}px`;
      return styles;
    });
    const rowKls = vue.computed(() => [
      props.justify !== "start" ? `is-justify-${props.justify}` : "",
      props.align !== "top" ? `is-align-${props.align}` : ""
    ]);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        class: vue.normalizeClass(["vi-row", vue.unref(rowKls)]),
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
