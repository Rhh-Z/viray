import { defineComponent as n, useCssVars as c, computed as i, openBlock as t, createElementBlock as a, normalizeClass as l, unref as m, renderSlot as p } from "vue";
import "../../../theme-chalk/src/icon.css";
import { iconProps as u } from "./icon.mjs";
const _ = /* @__PURE__ */ n({
  __name: "icon",
  props: u,
  setup(r) {
    const e = r;
    c((o) => ({
      "8e7c279d-color": o.color,
      "8e7c279d-size": o.size
    }));
    const s = i(() => ({
      [`vi-icon-${e.name}`]: e.name,
      [`vi-icon--${e.size}`]: e.size
    }));
    return (o, d) => (t(), a(
      "i",
      {
        class: l(m(s))
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
  _ as default
};
