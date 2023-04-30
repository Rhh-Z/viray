import { defineComponent as y, computed as a, resolveComponent as C, openBlock as s, createBlock as w, Teleport as b, createVNode as d, Transition as B, unref as o, withCtx as E, withDirectives as L, createElementVNode as i, normalizeClass as S, normalizeStyle as $, renderSlot as l, createElementBlock as c, toDisplayString as A, createCommentVNode as D, vShow as V } from "vue";
import { dialogProps as N, dialogEmits as T } from "./dialog.mjs";
import "../../../theme-chalk/src/dialog.css";
import { useDialog as z } from "./use-dialog.mjs";
import O from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const P = { class: "vi-mask" }, W = { class: "vi-dialog__header" }, j = {
  key: 1,
  class: "vi-dialog__title"
}, q = { class: "vi-dialog__content" }, F = {
  key: 0,
  class: "vi-dialog__footer"
}, M = /* @__PURE__ */ y({
  __name: "dialog",
  props: N,
  emits: T,
  setup(m) {
    const e = m;
    defineOptions({ name: "ViDialog" });
    const p = a(() => ({
      width: O(e.width) ? e.width : `${e.width}px`,
      scrollbarWidth: e.lockScroll ? "none" : "auto"
    })), {
      visible: v,
      afterEnter: f,
      afterLeave: _,
      beforeLeave: g,
      handleClose: n
    } = z(e), h = a(() => ({
      "vi-dialog": !0,
      "is-center": e.center
    }));
    return (t, r) => {
      const u = C("vi-icon");
      return s(), w(b, {
        to: "body",
        disabled: !t.appendToBody
      }, [
        d(B, {
          name: "dialog-fade",
          onAfterEnter: o(f),
          onAfterLeave: o(_),
          onBeforeLeave: o(g),
          persisted: ""
        }, {
          default: E(() => [
            L(i(
              "div",
              P,
              [
                i(
                  "div",
                  {
                    role: "dialog",
                    class: S(o(h)),
                    style: $(o(p))
                  },
                  [
                    i("div", W, [
                      t.$slots.title ? l(t.$slots, "title", { key: 0 }) : (s(), c(
                        "span",
                        j,
                        A(e.title),
                        1
                        /* TEXT */
                      )),
                      i("span", {
                        class: "vi-dialog__close",
                        onClick: r[0] || (r[0] = //@ts-ignore
                        (...k) => o(n) && o(n)(...k))
                      }, [
                        d(u, { name: "close" })
                      ])
                    ]),
                    i("div", q, [
                      l(t.$slots, "content")
                    ]),
                    t.$slots.title || e.title ? (s(), c("div", F, [
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
              [V, o(v)]
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
  M as default
};
