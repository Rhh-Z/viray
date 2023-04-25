import { defineComponent as e, openBlock as o, createElementBlock as n, renderSlot as r } from "vue";
import "../../../theme-chalk/src/button-group.css";
const s = { class: "vi-button-group" }, a = /* @__PURE__ */ e({
  __name: "button-group",
  setup(p) {
    return (t, c) => (o(), n("div", s, [
      r(t.$slots, "default")
    ]));
  }
});
export {
  a as default
};
