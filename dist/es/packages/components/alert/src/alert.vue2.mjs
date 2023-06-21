import { defineComponent as v, ref as $, computed as a, openBlock as s, createBlock as i, Transition as V, withCtx as w, withDirectives as N, createElementVNode as c, normalizeClass as B, unref as l, createCommentVNode as r, createElementBlock as p, renderSlot as f, createTextVNode as m, toDisplayString as u, vShow as E } from "vue";
import { alertProps as S, alertEmits as b, iconMaps as o } from "./alert.mjs";
import { ViIcon as d } from "../../icon/index.mjs";
import "../../../theme-chalk/src/alert.css";
const D = { class: "vi-alert__content" }, I = {
  key: 0,
  class: "vi-alert__title"
}, T = {
  key: 1,
  class: "vi-alert__description"
}, g = v({
  name: "ViAlert"
}), q = /* @__PURE__ */ v({
  ...g,
  props: S,
  emits: b,
  setup(_, { emit: h }) {
    const t = _, n = $(!0), y = a(() => ({
      [`vi-alert--${t.type}`]: t.type,
      "is-center": t.center
    })), k = a(() => o[t.type] === "success" ? "check-circle-fill" : o[t.type] === "error" ? "close-circle-fill" : `${o[t.type]}-circle-fill`), C = (e) => {
      n.value = !1, h("close", e);
    };
    return (e, z) => (s(), i(V, {
      name: "vi-alert-fade",
      persisted: ""
    }, {
      default: w(() => [
        N(c(
          "div",
          {
            class: B(["vi-alert", l(y)])
          },
          [
            e.showIcon ? (s(), i(l(d), {
              key: 0,
              name: l(k),
              class: "vi-alert__icon"
            }, null, 8, ["name"])) : r("v-if", !0),
            c("div", D, [
              e.title || e.$slots.title ? (s(), p("span", I, [
                f(e.$slots, "title", {}, () => [
                  m(
                    u(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ])) : r("v-if", !0),
              e.description || e.$slots.default ? (s(), p("p", T, [
                f(e.$slots, "default", {}, () => [
                  m(
                    u(e.description),
                    1
                    /* TEXT */
                  )
                ])
              ])) : r("v-if", !0),
              e.closable ? (s(), i(l(d), {
                key: 2,
                name: "close",
                class: "vi-alert__close",
                onClick: C
              })) : r("v-if", !0)
            ])
          ],
          2
          /* CLASS */
        ), [
          [E, n.value]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  q as default
};
