import { defineComponent as e, openBlock as n, createElementBlock as r, normalizeClass as s } from "vue";
import "../../../theme-chalk/src/icon.css";
import { iconProps as i } from "./icon.mjs";
const c = ["size", "color"], t = e({
  name: "ViIcon"
}), f = /* @__PURE__ */ e({
  ...t,
  props: i,
  setup(l) {
    return (o, p) => (n(), r("i", {
      class: s(`vi-icon-${o.name}`),
      size: o.size,
      color: o.color
    }, null, 10, c));
  }
});
export {
  f as default
};
