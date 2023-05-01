import { defineComponent as o, openBlock as e, createElementBlock as r, renderSlot as n } from "vue";
import "../../../theme-chalk/src/button-group.css";
import { buttonGroupProps as p } from "./button-group.mjs";
const s = { class: "vi-button-group" }, u = o({
  name: "ViButtonGroup"
}), m = /* @__PURE__ */ o({
  ...u,
  props: p,
  setup(_) {
    return (t, c) => (e(), r("div", s, [
      n(t.$slots, "default")
    ]));
  }
});
export {
  m as default
};
