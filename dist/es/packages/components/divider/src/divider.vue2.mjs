import { defineComponent as l, computed as o, openBlock as n, createElementBlock as s, normalizeClass as d, unref as i, normalizeStyle as m, renderSlot as f, createCommentVNode as v } from "vue";
import { dividerProps as _ } from "./divider.mjs";
import "../../../theme-chalk/src/divider.css";
const $ = l({
  name: "ViDivider"
}), S = /* @__PURE__ */ l({
  ...$,
  props: _,
  setup(c) {
    const e = c, t = "vi-divider", a = o(() => ({
      [t]: !0,
      [`${t}--${e.direction}`]: e.direction
    })), p = o(() => ({
      [`${t}__text`]: !0,
      [`is-${e.contentPosition}`]: e.contentPosition
    })), u = o(() => ({
      "border-top": `2px #dcdfe6 ${e.borderStyle}`
    }));
    return (r, C) => (n(), s(
      "div",
      {
        class: d(i(a)),
        style: m(i(u)),
        role: "separator"
      },
      [
        r.$slots.default && r.direction !== "vertical" ? (n(), s(
          "div",
          {
            key: 0,
            class: d(i(p))
          },
          [
            f(r.$slots, "default")
          ],
          2
          /* CLASS */
        )) : v("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  S as default
};
