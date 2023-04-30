import { defineComponent as c, computed as o, openBlock as t, createElementBlock as s, normalizeClass as m, unref as a, renderSlot as d, createTextVNode as p, toDisplayString as u, createCommentVNode as h, createElementVNode as f, normalizeStyle as v } from "vue";
import { cardProps as y } from "./card.mjs";
import "../../../theme-chalk/src/card.css";
const _ = {
  key: 0,
  class: "vi-card__header"
}, k = /* @__PURE__ */ c({
  __name: "card",
  props: y,
  setup(n) {
    const r = n;
    defineOptions({ name: "ViCard" });
    const i = o(() => ({
      "vi-card": !0,
      [`is-${r.shadow}-shadow`]: r.shadow
    })), l = o(() => ({}));
    return (e, C) => (t(), s(
      "div",
      {
        class: m(a(i))
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
            style: v(a(l))
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
  k as default
};
