import { defineComponent as $, ref as N, computed as n, onMounted as E, onUnmounted as H, openBlock as s, createBlock as c, Transition as I, withCtx as V, withDirectives as p, createElementVNode as r, normalizeClass as d, unref as o, normalizeStyle as v, createCommentVNode as y, toDisplayString as C, renderSlot as W, createElementBlock as g, vShow as k } from "vue";
import { notificationProps as D, notificationEmits as P } from "./notification.mjs";
import { ViIcon as h } from "../../icon/index.mjs";
import "../../../theme-chalk/src/notification.css";
const U = { class: "vi-notification__group" }, A = ["textContent"], j = { key: 0 }, q = ["innerHTML"], O = /* @__PURE__ */ $({
  __name: "notification",
  props: D,
  emits: P,
  setup(T, { expose: _ }) {
    const t = T, i = N(!1);
    let a = null;
    const M = {
      success: "check-circle-fill",
      info: "info-circle-fill",
      warning: "warning-circle-fill",
      error: "close-circle-fill"
    }, L = n(() => M[t.type]), S = n(
      () => t.position.startsWith("top") ? "top" : "bottom"
    ), b = n(() => ({
      [S.value]: `${t.offset}px`,
      zIndex: t.zIndex
    })), w = n(() => ({
      "vi-notification": !0,
      customClass: t.customClass,
      right: t.position.endsWith("right"),
      left: t.position.endsWith("left")
    })), z = n(() => ({
      "vi-notification__icon": !0,
      [`is-${t.type}`]: t.type
    }));
    E(() => {
      i.value = !0, u();
    });
    function u() {
      t.duration > 0 && (a = setTimeout(() => {
        i.value = !1;
      }, t.duration));
    }
    function f() {
      i.value = !1;
    }
    const B = () => {
      clearTimeout(Number(a));
    };
    return H(() => {
      clearTimeout(Number(a));
    }), _({
      visible: i,
      close: f
    }), (e, l) => (s(), c(I, {
      name: "notification-fade",
      onBeforeLeave: e.onClose,
      onAfterLeave: l[1] || (l[1] = (m) => e.$emit("destroy")),
      persisted: ""
    }, {
      default: V(() => [
        p(r(
          "div",
          {
            class: d(o(w)),
            style: v(o(b)),
            onMouseenter: B,
            onMouseleave: u,
            onClick: l[0] || (l[0] = //@ts-ignore
            (...m) => e.onClick && e.onClick(...m))
          },
          [
            t.type ? (s(), c(o(h), {
              key: 0,
              name: o(L),
              class: d(o(z)),
              style: { "font-size": "24px" }
            }, null, 8, ["name", "class"])) : y("v-if", !0),
            r("div", U, [
              r("h2", {
                class: "vi-notification__title",
                textContent: C(e.title)
              }, null, 8, A),
              p(r(
                "div",
                {
                  class: "vi-notification__content",
                  style: v(e.title ? void 0 : { margin: 0 })
                },
                [
                  W(e.$slots, "default", {}, () => [
                    e.dangerouslyUseHTMLString ? (s(), g("p", {
                      key: 1,
                      innerHTML: e.message
                    }, null, 8, q)) : (s(), g(
                      "p",
                      j,
                      C(e.message),
                      1
                      /* TEXT */
                    ))
                  ])
                ],
                4
                /* STYLE */
              ), [
                [k, e.message]
              ]),
              e.closeable ? (s(), c(o(h), {
                key: 0,
                name: e.icon,
                class: "vi-notification__close",
                onClick: f
              }, null, 8, ["name"])) : y("v-if", !0)
            ])
          ],
          38
          /* CLASS, STYLE, HYDRATE_EVENTS */
        ), [
          [k, i.value]
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["onBeforeLeave"]));
  }
});
export {
  O as default
};
