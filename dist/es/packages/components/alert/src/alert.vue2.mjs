import { defineComponent as C, ref as $, computed as a, openBlock as s, createBlock as i, Transition as V, withCtx as w, withDirectives as B, createElementVNode as c, normalizeClass as N, unref as l, createCommentVNode as r, createElementBlock as p, renderSlot as m, createTextVNode as f, toDisplayString as u, vShow as b } from "vue";
import { alertProps as E, alertEmits as S, iconMaps as o } from "./alert.mjs";
import { ViIcon as d } from "../../icon/index.mjs";
import "../../../theme-chalk/src/alert.css";
const D = { class: "vi-alert__content" }, I = {
  key: 0,
  class: "vi-alert__title"
}, T = {
  key: 1,
  class: "vi-alert__desc"
}, j = /* @__PURE__ */ C({
  __name: "alert",
  props: E,
  emits: S,
  setup(v, { emit: _ }) {
    const t = v;
    defineOptions({ name: "ViButton" });
    const n = $(!0), h = a(() => ({
      [`vi-alert-${t.type}`]: t.type,
      "is-center": t.center
    })), y = a(() => o[t.type] === "success" ? "check-circle-fill" : o[t.type] === "error" ? "close-circle-fill" : `${o[t.type]}-circle-fill`), k = (e) => {
      n.value = !1, _("close", e);
    };
    return (e, g) => (s(), i(V, {
      name: "vi-alert-fade",
      persisted: ""
    }, {
      default: w(() => [
        B(c(
          "div",
          {
            class: N(["vi-alert", l(h)])
          },
          [
            e.showIcon ? (s(), i(l(d), {
              key: 0,
              name: l(y),
              class: "vi-alert__icon"
            }, null, 8, ["name"])) : r("v-if", !0),
            c("div", D, [
              e.title || e.$slots.title ? (s(), p("span", I, [
                m(e.$slots, "title", {}, () => [
                  f(
                    u(e.title),
                    1
                    /* TEXT */
                  )
                ])
              ])) : r("v-if", !0),
              e.description || e.$slots.default ? (s(), p("p", T, [
                m(e.$slots, "default", {}, () => [
                  f(
                    u(e.description),
                    1
                    /* TEXT */
                  )
                ])
              ])) : r("v-if", !0),
              e.closable ? (s(), i(l(d), {
                key: 2,
                name: "close",
                class: "vi-alert__close-btn",
                onClick: k
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
  j as default
};
