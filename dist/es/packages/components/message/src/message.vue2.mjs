import { defineComponent as C, ref as M, onMounted as L, onUnmounted as b, computed as l, openBlock as n, createBlock as i, Transition as h, withCtx as w, withDirectives as N, createElementVNode as S, normalizeClass as $, unref as o, normalizeStyle as z, renderSlot as B, createElementBlock as u, toDisplayString as V, createCommentVNode as E, vShow as H } from "vue";
import { messageProps as I, messageEmits as D } from "./message.mjs";
import "../../../theme-chalk/src/message.css";
import { ViIcon as r } from "../../icon/index.mjs";
const U = {
  key: 0,
  class: "vi-message__content"
}, A = ["innerHTML"], G = /* @__PURE__ */ C({
  __name: "message",
  props: I,
  emits: D,
  setup(f, { emit: p }) {
    const e = f;
    defineOptions({ name: "ViMessage" });
    const t = M(!1), d = () => {
      p("close");
    }, g = () => {
      t.value = !1;
    };
    L(() => {
      t.value = !0, c();
    });
    let a = null;
    const c = () => {
      e.duration > 0 && (a = setTimeout(() => {
        t.value = !1;
      }, e.duration));
    }, v = () => {
      clearTimeout(Number(a)), c();
    };
    b(() => {
      clearTimeout(Number(a));
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
    return (s, m) => (n(), i(h, {
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
            onMouseenter: v
          },
          [
            s.icon ? (n(), i(o(r), {
              key: 0,
              name: s.icon,
              class: "vi-message__icon"
            }, null, 8, ["name"])) : (n(), i(o(r), {
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
                V(s.message),
                1
                /* TEXT */
              ))
            ]),
            s.closeable ? (n(), i(o(r), {
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
  G as default
};
