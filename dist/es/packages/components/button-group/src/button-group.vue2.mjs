import { defineComponent as e, openBlock as o, createElementBlock as n, renderSlot as r } from "vue";
import "../../../theme-chalk/src/button-group.css";
const p = { class: "vi-button-group" }, c = /* @__PURE__ */ e({
  __name: "button-group",
  setup(s) {
    return defineOptions({ name: "ViButtonGroup" }), (t, u) => (o(), n("div", p, [
      r(t.$slots, "default")
    ]));
  }
});
export {
  c as default
};
