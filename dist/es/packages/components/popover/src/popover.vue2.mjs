import { defineComponent as $, ref as E, computed as n, openBlock as s, createElementBlock as i, renderSlot as p, createCommentVNode as l, createVNode as _, Transition as C, withCtx as B, withDirectives as V, createElementVNode as N, normalizeClass as R, unref as r, normalizeStyle as U, toDisplayString as f, vShow as g } from "vue";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import "../../../theme-chalk/src/popover.css";
import { popoverProps as z, popoverEmits as D } from "./popover.mjs";
import { exports as H } from "../../../../_virtual/lodash.mjs";
const L = { class: "vi-popover__container" }, K = {
  key: 0,
  class: "vi-popover__title",
  role: "title"
}, P = {
  key: 2,
  class: "vi-popover__content",
  role: "content"
}, G = /* @__PURE__ */ $({
  __name: "popover",
  props: z,
  emits: D,
  setup(d, { emit: t }) {
    const o = d, c = E(), m = "onUpdate:visible", a = n(() => o[m]), u = () => {
      t("before-enter");
    }, h = () => {
      t("before-leave");
    }, y = () => {
      t("after-enter");
    }, w = () => {
      t("update:visible", !1), t("after-leave");
    }, b = n(() => ({
      "vi-popover": !0,
      [`is-${o.placement.split("-")[0]}`]: o.placement
    })), k = n(() => ({
      width: H.isString(o.width) ? o.width : `${o.width}px`
    }));
    return (e, v) => (s(), i("span", L, [
      e.$slots.reference ? p(e.$slots, "reference", { key: 0 }) : l("v-if", !0),
      _(C, {
        name: "popover-fade",
        persisted: ""
      }, {
        default: B(() => [
          V(N(
            "div",
            {
              class: R(r(b)),
              ref_key: "popoverRef",
              ref: c,
              style: U(r(k)),
              "onUpdate:visible": v[0] || (v[0] = //@ts-ignore
              (...S) => r(a) && r(a)(...S)),
              onBeforeShow: u,
              onBeforeHide: h,
              onShow: y,
              onHide: w
            },
            [
              e.title ? (s(), i(
                "div",
                K,
                f(e.title),
                1
                /* TEXT */
              )) : e.$slots.title ? p(e.$slots, "title", { key: 1 }) : l("v-if", !0),
              e.content ? (s(), i(
                "div",
                P,
                f(e.content),
                1
                /* TEXT */
              )) : e.$slots.content ? p(e.$slots, "content", { key: 3 }) : l("v-if", !0)
            ],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [
            [g, e.visible]
          ])
        ]),
        _: 3
        /* FORWARDED */
      })
    ]));
  }
});
export {
  G as default
};
