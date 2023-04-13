import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
import "../../../theme-chalk/src/button-group.css";
const _hoisted_1 = { class: "vi-button-group" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "button-group",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
