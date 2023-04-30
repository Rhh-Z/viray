import { defineComponent as v, ref as $, computed as a, openBlock as s, createBlock as o, Transition as V, withCtx as w, withDirectives as B, createElementVNode as c, normalizeClass as N, unref as l, createCommentVNode as r, createElementBlock as p, renderSlot as u, createTextVNode as f, toDisplayString as m, vShow as b } from "vue";
import { alertProps as E, alertEmits as S, iconMaps as i } from "./alert.mjs";
import { ViIcon as d } from "../../icon/index.mjs";
import "../../../theme-chalk/src/alert.css";
const D = { class: "vi-alert__content" }, I = {
  key: 0,
  class: "vi-alert__title"
}, T = {
  key: 1,
  class: "vi-alert__desc"
}, g = v({ name: "ViButton" }), A = /* @__PURE__ */ v({
  ...g,
  props: E,
  emits: S,
  setup(_, { emit: h }) {
    const t = _, n = $(!0), y = a(() => ({
      [`vi-alert-${t.type}`]: t.type,
      "is-center": t.center
    })), k = a(() => i[t.type] === "success" ? "check-circle-fill" : i[t.type] === "error" ? "close-circle-fill" : `${i[t.type]}-circle-fill`), C = (e) => {
      n.value = !1, h("close", e);
    };
    return (e, z) => (s(), o(V, {
      name: "vi-alert-fade",
      persisted: ""
    }, {
      default: w(() => [
        B(c(
          "div",
          {
            class: N(["vi-alert", l(y)])
          },
          [
            e.showIcon ? (s(), o(l(d), {
              key: 0,
              name: l(k),
              class: "vi-alert__icon"
            }, null, 8, ["name"])) : r("v-if", !0),
            c("div", D, [
              e.title || e.$slots.title ? (s(), p("span", I, [
                u(e.$slots, "title", {}, () => [
                  f(
                    m(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ])) : r("v-if", !0),
              e.description || e.$slots.default ? (s(), p("p", T, [
                u(e.$slots, "default", {}, () => [
                  f(
                    m(e.description),
                    1
                    /* TEXT */
                  )
                ])
              ])) : r("v-if", !0),
              e.closable ? (s(), o(l(d), {
                key: 2,
                name: "close",
                class: "vi-alert__close-btn",
                onClick: C
              })) : r("v-if", !0)
            ])
          ],
          2
          /* CLASS */
        ), [
          [b, n.value]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  A as default
};
