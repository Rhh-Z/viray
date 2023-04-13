import { defineComponent as v, ref as $, computed as c, resolveComponent as w, openBlock as s, createBlock as o, Transition as N, withCtx as V, withDirectives as b, createElementVNode as a, normalizeClass as B, unref as p, createCommentVNode as l, createElementBlock as m, renderSlot as u, createTextVNode as d, toDisplayString as f, vShow as E } from "vue";
import { alertProps as S, alertEmits as D, iconMaps as i } from "./alert.mjs";
import "../../../theme-chalk/src/alert.css";
const T = { class: "vi-alert__content" }, g = {
  key: 0,
  class: "vi-alert__title"
}, z = {
  key: 1,
  class: "vi-alert__desc"
}, A = v({
  name: "ViAlert"
}), q = /* @__PURE__ */ v({
  ...A,
  props: S,
  emits: D,
  setup(_, { emit: h }) {
    const t = _, r = $(!0), y = c(() => ({
      [`vi-alert-${t.type}`]: t.type,
      "is-center": t.center
    })), k = c(() => i[t.type] === "success" ? "check-circle-fill" : i[t.type] === "error" ? "close-circle-fill" : `${i[t.type]}-circle-fill`), C = (e) => {
      r.value = !1, h("close", e);
    };
    return (e, I) => {
      const n = w("vi-icon");
      return s(), o(N, {
        name: "vi-alert-fade",
        persisted: ""
      }, {
        default: V(() => [
          b(a(
            "div",
            {
              class: B(["vi-alert", p(y)])
            },
            [
              e.showIcon ? (s(), o(n, {
                key: 0,
                name: p(k),
                class: "vi-alert__icon"
              }, null, 8, ["name"])) : l("v-if", !0),
              a("div", T, [
                e.title || e.$slots.title ? (s(), m("span", g, [
                  u(e.$slots, "title", {}, () => [
                    d(
                      f(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : l("v-if", !0),
                e.description || e.$slots.default ? (s(), m("p", z, [
                  u(e.$slots, "default", {}, () => [
                    d(
                      f(e.description),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : l("v-if", !0),
                e.closable ? (s(), o(n, {
                  key: 2,
                  name: "close",
                  class: "vi-alert__close-btn",
                  onClick: C
                })) : l("v-if", !0)
              ])
            ],
            2
            /* CLASS */
          ), [
            [E, r.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
export {
  q as default
};
