import { defineComponent as i, computed as o, openBlock as t, createElementBlock as s, normalizeClass as m, unref as a, renderSlot as d, createTextVNode as p, toDisplayString as u, createCommentVNode as h, createElementVNode as f, normalizeStyle as v } from "vue";
import { cardProps as y } from "./card.mjs";
import "../../../theme-chalk/src/card.css";
const _ = {
  key: 0,
  class: "vi-card__header"
}, w = /* @__PURE__ */ i({
  __name: "card",
  props: y,
  setup(n) {
    const r = n, l = o(() => ({
      "vi-card": !0,
      [`is-${r.shadow}-shadow`]: r.shadow
    })), c = o(() => ({}));
    return (e, C) => (t(), s(
      "div",
      {
        class: m(a(l))
      },
      [
        e.$slots.header || e.header ? (t(), s("div", _, [
          d(e.$slots, "header", {}, () => [
            p(
              u(e.header),
              1
              /* TEXT */
            )
          ])
        ])) : h("v-if", !0),
        f(
          "div",
          {
            class: "vi-card__body",
            style: v(a(c))
          },
          [
            d(e.$slots, "default")
          ],
          4
          /* STYLE */
        )
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  w as default
};
