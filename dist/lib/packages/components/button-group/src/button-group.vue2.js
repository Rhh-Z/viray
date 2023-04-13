"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("../../../theme-chalk/src/button-group.css");
const _hoisted_1 = { class: "vi-button-group" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  name: "button-group",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
exports.default = _sfc_main;
