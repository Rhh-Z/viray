import { defineComponent as C, ref as L, onMounted as M, onUnmounted as b, computed as l, openBlock as n, createBlock as a, Transition as h, withCtx as w, withDirectives as N, createElementVNode as S, normalizeClass as $, unref as o, normalizeStyle as z, renderSlot as B, createElementBlock as u, toDisplayString as E, createCommentVNode as H, vShow as I } from "vue";
import { messageProps as V, messageEmits as D } from "./message.mjs";
import "../../../theme-chalk/src/message.css";
import { ViIcon as r } from "../../icon/index.mjs";
const U = {
  key: 0,
  class: "vi-message__content"
}, A = ["innerHTML"], J = /* @__PURE__ */ C({
  __name: "message",
  props: V,
  emits: D,
  setup(f, { emit: p }) {
    const e = f, t = L(!1), d = () => {
      p("close");
    }, v = () => {
      t.value = !1;
    };
    M(() => {
      t.value = !0, c();
    });
    let i = null;
    const c = () => {
      e.duration > 0 && (i = setTimeout(() => {
        t.value = !1;
      }, e.duration));
    }, g = () => {
      clearTimeout(Number(i)), c();
    };
    b(() => {
      clearTimeout(Number(i));
    });
    const y = {
      info: "info-circle-fill",
      success: "check-circle-fill",
      error: "close-circle-fill",
      warning: "warning-circle-fill"
    }, _ = l(() => y[e.type]), k = l(() => ({
      "vi-message": !0,
      [`vi-message--${e.type}`]: e.type,
      [e.customClass]: e.customClass,
      "is-center": e.center
    })), T = l(() => ({
      top: `${e.offset}px`,
      zIndex: e.zIndex
    }));
    return (s, m) => (n(), a(h, {
      name: "message-fade",
      onBeforeLeave: d,
      onAfterLeave: m[0] || (m[0] = (F) => s.$emit("destroy")),
      persisted: ""
    }, {
      default: w(() => [
        N(S(
          "div",
          {
            class: $(o(k)),
            style: z(o(T)),
            onMouseenter: g
          },
          [
            s.icon ? (n(), a(o(r), {
              key: 0,
              name: s.icon,
              class: "vi-message__icon"
            }, null, 8, ["name"])) : (n(), a(o(r), {
              key: 1,
              name: o(_),
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
                E(s.message),
                1
                /* TEXT */
              ))
            ]),
            s.closeable ? (n(), a(o(r), {
              key: 2,
              name: "close",
              onClick: v,
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
  J as default
};
