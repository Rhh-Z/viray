import { defineComponent as f, ref as M, onMounted as L, onUnmounted as b, computed as l, openBlock as n, createBlock as a, Transition as h, withCtx as w, withDirectives as N, createElementVNode as S, normalizeClass as $, unref as o, normalizeStyle as z, renderSlot as B, createElementBlock as u, toDisplayString as V, createCommentVNode as E, vShow as H } from "vue";
import { messageProps as I, messageEmits as D } from "./message.mjs";
import "../../../theme-chalk/src/message.css";
import { ViIcon as r } from "../../icon/index.mjs";
const U = {
  key: 0,
  class: "vi-message__content"
}, A = ["innerHTML"], F = f({ name: "ViMessage" }), K = /* @__PURE__ */ f({
  ...F,
  props: I,
  emits: D,
  setup(p, { emit: d }) {
    const e = p, t = M(!1), v = () => {
      d("close");
    }, g = () => {
      t.value = !1;
    };
    L(() => {
      t.value = !0, c();
    });
    let i = null;
    const c = () => {
      e.duration > 0 && (i = setTimeout(() => {
        t.value = !1;
      }, e.duration));
    }, y = () => {
      clearTimeout(Number(i)), c();
    };
    b(() => {
      clearTimeout(Number(i));
    });
    const _ = {
      info: "info-circle-fill",
      success: "check-circle-fill",
      error: "close-circle-fill",
      warning: "warning-circle-fill"
    }, k = l(() => _[e.type]), T = l(() => ({
      "vi-message": !0,
      [`vi-message--${e.type}`]: e.type,
      [e.customClass]: e.customClass,
      "is-center": e.center
    })), C = l(() => ({
      top: `${e.offset}px`,
      zIndex: e.zIndex
    }));
    return (s, m) => (n(), a(h, {
      name: "message-fade",
      onBeforeLeave: v,
      onAfterLeave: m[0] || (m[0] = (P) => s.$emit("destroy")),
      persisted: ""
    }, {
      default: w(() => [
        N(S(
          "div",
          {
            class: $(o(T)),
            style: z(o(C)),
            onMouseenter: y
          },
          [
            s.icon ? (n(), a(o(r), {
              key: 0,
              name: s.icon,
              class: "vi-message__icon"
            }, null, 8, ["name"])) : (n(), a(o(r), {
              key: 1,
              name: o(k),
              class: "vi-message__icon"
            }, null, 8, ["name"])),
            B(s.$slots, "default", {}, () => [
              s.dangerouslyUseHTMLString ? (n(), u("span", {
                key: 1,
                class: "vi-message__content",
                innerHTML: s.message
              }, null, 8, A)) : (n(), u(
                "span",
                U,
                V(s.message),
                1
                /* TEXT */
              ))
            ]),
            s.closeable ? (n(), a(o(r), {
              key: 2,
              name: "close",
              onClick: g,
              class: "vi-message__close"
            })) : E("v-if", !0)
          ],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ), [
          [H, t.value]
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
