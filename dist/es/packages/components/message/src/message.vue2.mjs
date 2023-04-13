import { defineComponent as f, ref as h, onMounted as L, onUnmounted as M, computed as r, openBlock as n, createBlock as a, Transition as b, withCtx as w, withDirectives as N, createElementVNode as S, normalizeClass as z, unref as o, normalizeStyle as B, renderSlot as V, createElementBlock as u, toDisplayString as E, createCommentVNode as H, vShow as I } from "vue";
import { messageProps as $, messageEmits as D } from "./message.mjs";
import "../../../theme-chalk/src/message.css";
import { ViIcon as i } from "../../icon/index.mjs";
const U = {
  key: 0,
  class: "vi-message__content"
}, A = ["innerHTML"], F = f({
  name: "ViMessage"
}), K = /* @__PURE__ */ f({
  ...F,
  props: $,
  emits: D,
  setup(p, { emit: c }) {
    const e = p, t = h(!1), d = () => {
      c("close");
    }, v = () => {
      c("destroy");
    }, g = () => {
      t.value = !1;
    };
    L(() => {
      t.value = !0, m();
    });
    let l = null;
    const m = () => {
      e.duration > 0 && (l = setTimeout(() => {
        t.value = !1;
      }, e.duration));
    }, _ = () => {
      clearTimeout(Number(l)), m();
    };
    M(() => {
      clearTimeout(Number(l));
    });
    const y = {
      info: "info-circle-fill",
      success: "check-circle-fill",
      error: "close-circle-fill",
      warning: "warning-circle-fill"
    }, k = r(() => y[e.type]), T = r(() => ({
      "vi-message": !0,
      [`vi-message--${e.type}`]: e.type,
      [e.customClass]: e.customClass,
      "is-center": e.center
    })), C = r(() => ({
      top: `${e.offset}px`,
      zIndex: e.zIndex
    }));
    return (s, P) => (n(), a(b, {
      name: "message-fade",
      onBeforeLeave: d,
      onAfterLeave: v,
      persisted: ""
    }, {
      default: w(() => [
        N(S(
          "div",
          {
            class: z(o(T)),
            style: B(o(C)),
            onMouseenter: _
          },
          [
            s.icon ? (n(), a(o(i), {
              key: 0,
              name: s.icon,
              class: "vi-message__icon"
            }, null, 8, ["name"])) : (n(), a(o(i), {
              key: 1,
              name: o(k),
              class: "vi-message__icon"
            }, null, 8, ["name"])),
            V(s.$slots, "default", {}, () => [
              s.dangerouslyUseHTMLString ? (n(), u("span", {
                key: 1,
                class: "vi-message__content",
                innerHTML: s.message
              }, null, 8, A)) : (n(), u(
                "span",
                U,
                E(s.message),
                1
                /* TEXT */
              ))
            ]),
            s.closeable ? (n(), a(o(i), {
              key: 2,
              name: "close",
              onClick: g,
              class: "vi-message__close"
            })) : H("v-if", !0)
          ],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ), [
          [I, t.value]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  K as default
};
