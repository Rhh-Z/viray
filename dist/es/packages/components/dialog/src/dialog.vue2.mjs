import { defineComponent as m, computed as a, resolveComponent as C, openBlock as s, createBlock as w, Teleport as b, createVNode as d, Transition as B, unref as o, withCtx as E, withDirectives as L, createElementVNode as i, normalizeClass as S, normalizeStyle as $, renderSlot as l, createElementBlock as c, toDisplayString as A, createCommentVNode as D, vShow as V } from "vue";
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
}, H = m({
  name: "ViDialog"
}), Q = /* @__PURE__ */ m({
  ...H,
  props: N,
  emits: T,
  setup(p) {
    const e = p, v = a(() => ({
      width: P(e.width) ? e.width : `${e.width}px`,
      scrollbarWidth: e.lockScroll ? "none" : "auto"
    })), {
      visible: _,
      afterEnter: f,
      afterLeave: g,
      beforeLeave: h,
      handleClose: n
    } = z(e), u = a(() => ({
      "vi-dialog": !0,
      "is-center": e.center
    }));
    return (t, r) => {
      const k = C("vi-icon");
      return s(), w(b, {
        to: "body",
        disabled: !t.appendToBody
      }, [
        d(B, {
          name: "dialog-fade",
          onAfterEnter: o(f),
          onAfterLeave: o(g),
          onBeforeLeave: o(h),
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
                    class: S(o(u)),
                    style: $(o(v))
                  },
                  [
                    i("div", j, [
                      t.$slots.title ? l(t.$slots, "title", { key: 0 }) : (s(), c(
                        "span",
                        q,
                        A(e.title),
                        1
                        /* TEXT */
                      )),
                      i("span", {
                        class: "vi-dialog__close",
                        onClick: r[0] || (r[0] = //@ts-ignore
                        (...y) => o(n) && o(n)(...y))
                      }, [
                        d(k, { name: "close" })
                      ])
                    ]),
                    i("div", F, [
                      l(t.$slots, "content")
                    ]),
                    t.$slots.title || e.title ? (s(), c("div", G, [
                      l(t.$slots, "footer")
                    ])) : D("v-if", !0)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [V, o(_)]
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
