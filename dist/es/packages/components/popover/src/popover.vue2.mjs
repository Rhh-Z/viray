import { defineComponent as $, ref as _, computed as n, openBlock as s, createElementBlock as i, renderSlot as p, createCommentVNode as l, createVNode as E, Transition as C, withCtx as V, withDirectives as B, createElementVNode as N, normalizeClass as R, unref as r, normalizeStyle as U, toDisplayString as f, vShow as g } from "vue";
import "../../../theme-chalk/src/popover.css";
import { popoverProps as z, popoverEmits as D } from "./popover.mjs";
import H from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const L = { class: "vi-popover__container" }, P = {
  key: 0,
  class: "vi-popover__title",
  role: "title"
}, K = {
  key: 2,
  class: "vi-popover__content",
  role: "content"
}, A = /* @__PURE__ */ $({
  __name: "popover",
  props: z,
  emits: D,
  setup(d, { emit: t }) {
    const o = d;
    defineOptions({ name: "ViPopover" });
    const c = _(), m = "onUpdate:visible", a = n(() => o[m]), u = () => {
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
      width: H(o.width) ? o.width : `${o.width}px`
    }));
    return (e, v) => (s(), i("span", L, [
      e.$slots.reference ? p(e.$slots, "reference", { key: 0 }) : l("v-if", !0),
      E(C, {
        name: "popover-fade",
        persisted: ""
      }, {
        default: V(() => [
          B(N(
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
                P,
                f(e.title),
                1
                /* TEXT */
              )) : e.$slots.title ? p(e.$slots, "title", { key: 1 }) : l("v-if", !0),
              e.content ? (s(), i(
                "div",
                K,
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
  A as default
};
