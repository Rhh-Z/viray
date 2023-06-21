import { defineComponent as v, computed as d, resolveComponent as w, openBlock as s, createBlock as $, Teleport as b, createVNode as c, Transition as B, unref as t, withCtx as E, withDirectives as L, createElementVNode as i, normalizeClass as S, normalizeStyle as A, renderSlot as l, createElementBlock as n, toDisplayString as D, createCommentVNode as m, vShow as V } from "vue";
import { dialogProps as N, dialogEmits as T } from "./dialog.mjs";
import "../../../theme-chalk/src/dialog.css";
import { useDialog as z } from "./use-dialog.mjs";
import P from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const W = { class: "vi-mask" }, j = { class: "vi-dialog__header" }, q = {
  key: 1,
  class: "vi-dialog__title"
}, F = { class: "vi-dialog__content" }, G = {
  key: 0,
  class: "vi-dialog__footer"
}, H = v({
  name: "ViDialog"
}), Q = /* @__PURE__ */ v({
  ...H,
  props: N,
  emits: T,
  setup(f) {
    const o = f, p = d(() => ({
      width: P(o.width) ? o.width : `${o.width}px`,
      scrollbarWidth: o.lockScroll ? "none" : "auto"
    })), {
      visible: _,
      afterEnter: g,
      afterLeave: h,
      beforeLeave: u,
      handleClose: r
    } = z(o), k = d(() => ({
      "vi-dialog": !0,
      "is-center": o.center
    }));
    return (e, a) => {
      const y = w("vi-icon");
      return s(), $(b, {
        to: "body",
        disabled: !e.appendToBody
      }, [
        c(B, {
          name: "dialog-fade",
          onAfterEnter: t(g),
          onAfterLeave: t(h),
          onBeforeLeave: t(u),
          persisted: ""
        }, {
          default: E(() => [
            L(i(
              "div",
              W,
              [
                i(
                  "div",
                  {
                    role: "dialog",
                    class: S(t(k)),
                    style: A(t(p))
                  },
                  [
                    i("div", j, [
                      e.$slots.title ? l(e.$slots, "title", { key: 0 }) : (s(), n(
                        "span",
                        q,
                        D(o.title),
                        1
                        /* TEXT */
                      )),
                      e.showClose ? (s(), n("span", {
                        key: 2,
                        class: "vi-dialog__close",
                        onClick: a[0] || (a[0] = //@ts-ignore
                        (...C) => t(r) && t(r)(...C))
                      }, [
                        c(y, { name: "close" })
                      ])) : m("v-if", !0)
                    ]),
                    i("div", F, [
                      e.$slots.content ? l(e.$slots, "content", { key: 0 }) : l(e.$slots, "default", { key: 1 })
                    ]),
                    e.$slots.title || o.title ? (s(), n("div", G, [
                      l(e.$slots, "footer")
                    ])) : m("v-if", !0)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [V, t(_)]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
export {
  Q as default
};
