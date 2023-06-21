import { defineComponent as r, computed as f, resolveComponent as u, openBlock as c, createBlock as _, Transition as b, withCtx as v, unref as t, createElementBlock as C, normalizeStyle as B, renderSlot as N, createVNode as y, createCommentVNode as E } from "vue";
import "../../../theme-chalk/src/backtop.css";
import { backtopProps as V, backtopEmits as h } from "./backtop.mjs";
import { useBacktop as x } from "./use-backtop.mjs";
const S = r({
  name: "ViBacktop"
}), P = /* @__PURE__ */ r({
  ...S,
  props: V,
  emits: h,
  setup(a, { emit: p }) {
    const o = a, m = "ViBacktop", { visible: s, handleClick: e } = x(o, p, m), l = f(() => ({
      right: `${o.right}px`,
      bottom: `${o.bottom}px`
    }));
    return (n, i) => {
      const k = u("vi-icon");
      return c(), _(b, { name: "backtop-fade" }, {
        default: v(() => [
          t(s) ? (c(), C(
            "div",
            {
              key: 0,
              class: "vi-backtop",
              style: B(t(l)),
              onClick: i[0] || (i[0] = //@ts-ignore
              (...d) => t(e) && t(e)(...d))
            },
            [
              N(n.$slots, "default", {}, () => [
                y(k, { name: n.icon }, null, 8, ["name"])
              ])
            ],
            4
            /* STYLE */
          )) : E("v-if", !0)
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
});
export {
  P as default
};
