import { defineComponent as s, useCssVars as t, computed as c, openBlock as i, createElementBlock as a, normalizeClass as l, unref as m, renderSlot as p } from "vue";
import "../../../theme-chalk/src/icon.css";
import { iconProps as u } from "./icon.mjs";
const d = s({
  name: "ViIcon"
}), v = /* @__PURE__ */ s({
  ...d,
  props: u,
  setup(n) {
    const e = n;
    t((o) => ({
      "8e7c279d-color": o.color,
      "8e7c279d-size": o.size
    }));
    const r = c(() => ({
      [`vi-icon-${e.name}`]: e.name,
      [`vi-icon--${e.size}`]: e.size
    }));
    return (o, f) => (i(), a(
      "i",
      {
        class: l(m(r))
      },
      [
        p(o.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  v as default
};
