import { defineComponent as a, computed as f, openBlock as i, createBlock as d, Transition as u, withCtx as b, unref as t, createElementBlock as B, normalizeStyle as C, renderSlot as _, createVNode as N, createCommentVNode as V } from "vue";
import "../../../theme-chalk/src/backtop.css";
import { backtopProps as v, backtopEmits as y } from "./backtop.mjs";
import { useBacktop as E } from "./use-backtop.mjs";
import { ViIcon as h } from "../../icon/index.mjs";
const x = a({ name: "ViBacktop" }), P = /* @__PURE__ */ a({
  ...x,
  props: v,
  emits: y,
  setup(c, { emit: m }) {
    const o = c, p = "ViBacktop", { visible: s, handleClick: e } = E(o, m, p), l = f(() => ({
      right: `${o.right}px`,
      bottom: `${o.bottom}px`
    }));
    return (n, r) => (i(), d(u, { name: "backtop-fade" }, {
      default: b(() => [
        t(s) ? (i(), B(
          "div",
          {
            key: 0,
            class: "vi-backtop",
            style: C(t(l)),
            onClick: r[0] || (r[0] = //@ts-ignore
            (...k) => t(e) && t(e)(...k))
          },
          [
            _(n.$slots, "default", {}, () => [
              N(t(h), { name: n.icon }, null, 8, ["name"])
            ])
          ],
          4
          /* STYLE */
        )) : V("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  P as default
};
