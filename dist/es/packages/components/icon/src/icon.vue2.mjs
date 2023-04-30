import { defineComponent as r, useCssVars as i, computed as c, openBlock as t, createElementBlock as a, normalizeClass as m, unref as p, renderSlot as l } from "vue";
import "../../../theme-chalk/src/icon.css";
import { iconProps as u } from "./icon.mjs";
const _ = /* @__PURE__ */ r({
  __name: "icon",
  props: u,
  setup(n) {
    const e = n;
    i((o) => ({
      "8e7c279d-color": o.color,
      "8e7c279d-size": o.size
    })), defineOptions({ name: "ViIcon" });
    const s = c(() => ({
      [`vi-icon-${e.name}`]: e.name,
      [`vi-icon--${e.size}`]: e.size
    }));
    return (o, d) => (t(), a(
      "i",
      {
        class: m(p(s))
      },
      [
        l(o.$slots, "default", {}, void 0, !0)
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  _ as default
};
