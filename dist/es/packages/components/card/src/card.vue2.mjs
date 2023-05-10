import { defineComponent as a, computed as n, openBlock as o, createElementBlock as s, normalizeClass as i, unref as c, renderSlot as t, createTextVNode as m, toDisplayString as p, createCommentVNode as u, createElementVNode as h, normalizeStyle as f } from "vue";
import { cardProps as _ } from "./card.mjs";
import "../../../theme-chalk/src/card.css";
const v = {
  key: 0,
  class: "vi-card__header"
}, y = a({
  name: "ViCard"
}), k = /* @__PURE__ */ a({
  ...y,
  props: _,
  setup(d) {
    const r = d, l = n(() => ({
      "vi-card": !0,
      [`is-${r.shadow}-shadow`]: r.shadow
    }));
    return (e, C) => (o(), s(
      "div",
      {
        class: i(c(l))
      },
      [
        e.$slots.header || e.header ? (o(), s("div", v, [
          t(e.$slots, "header", {}, () => [
            m(
              p(e.header),
              1
              /* TEXT */
            )
          ])
        ])) : u("v-if", !0),
        h(
          "div",
          {
            class: "vi-card__body",
            style: f(e.bodyStyle)
          },
          [
            t(e.$slots, "default")
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
