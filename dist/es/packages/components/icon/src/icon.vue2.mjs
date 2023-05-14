import { defineComponent as r, computed as o, openBlock as l, createElementBlock as m, normalizeClass as p, unref as n, normalizeStyle as a, renderSlot as u } from "vue";
import "../../../theme-chalk/src/icon.css";
import { iconProps as f } from "./icon.mjs";
import z from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.mjs";
const _ = r({
  name: "ViIcon"
}), k = /* @__PURE__ */ r({
  ..._,
  props: f,
  setup(t) {
    const e = t, s = o(() => ({
      [`vi-icon-${e.name}`]: e.name,
      [`vi-icon--${e.size}`]: e.size
    })), i = o(() => ({
      color: e.color,
      fontSize: z(e.size) ? `${e.size}px` : e.size
    }));
    return (c, d) => (l(), m(
      "i",
      {
        class: p(n(s)),
        style: a(n(i))
      },
      [
        u(c.$slots, "default")
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  k as default
};
