import { defineComponent as n, computed as o, openBlock as t, createElementBlock as s, normalizeClass as m, unref as a, renderSlot as d, createTextVNode as p, toDisplayString as u, createCommentVNode as h, createElementVNode as f, normalizeStyle as _ } from "vue";
import { cardProps as v } from "./card.mjs";
import "../../../theme-chalk/src/card.css";
const y = {
  key: 0,
  class: "vi-card__header"
}, C = n({ name: "ViCard" }), w = /* @__PURE__ */ n({
  ...C,
  props: v,
  setup(l) {
    const r = l, c = o(() => ({
      "vi-card": !0,
      [`is-${r.shadow}-shadow`]: r.shadow
    })), i = o(() => ({}));
    return (e, S) => (t(), s(
      "div",
      {
        class: m(a(c))
      },
      [
        e.$slots.header || e.header ? (t(), s("div", y, [
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
            style: _(a(i))
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
