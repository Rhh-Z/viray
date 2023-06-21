import { defineComponent as o, provide as p, reactive as n, ref as s, openBlock as i, createElementBlock as u, renderSlot as a } from "vue";
import { buttonGroupProps as c } from "./button-group.mjs";
import { buttonGroupContextKey as d } from "./constant.mjs";
import "../../../theme-chalk/src/button-group.css";
const l = { class: "vi-button-group" }, m = o({
  name: "ViButtonGroup"
}), B = /* @__PURE__ */ o({
  ...m,
  props: c,
  setup(e) {
    const t = e;
    return p(
      d,
      n({
        size: s(t.size),
        type: t.type,
        disabled: t.disabled
      })
    ), (r, f) => (i(), u("div", l, [
      a(r.$slots, "default")
    ]));
  }
});
export {
  B as default
};
