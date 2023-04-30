import { defineComponent as t, openBlock as o, createElementBlock as n, renderSlot as r } from "vue";
import "../../../theme-chalk/src/button-group.css";
const s = { class: "vi-button-group" }, _ = t({ name: "ViButtonGroup" }), l = /* @__PURE__ */ t({
  ..._,
  setup(c) {
    return (e, p) => (o(), n("div", s, [
      r(e.$slots, "default")
    ]));
  }
});
export {
  l as default
};
