import { defineComponent as k, computed as f, openBlock as r, createBlock as d, Transition as u, withCtx as b, unref as t, createElementBlock as B, normalizeStyle as C, renderSlot as N, createVNode as V, createCommentVNode as v } from "vue";
import "../../../theme-chalk/src/backtop.css";
import { backtopProps as y, backtopEmits as E } from "./backtop.mjs";
import { useBacktop as _ } from "./use-backtop.mjs";
import { ViIcon as h } from "../../icon/index.mjs";
const M = /* @__PURE__ */ k({
  __name: "backtop",
  props: y,
  emits: E,
  setup(a, { emit: p }) {
    const o = a;
    defineOptions({ name: "ViBacktop" });
    const m = "ViBacktop", { visible: c, handleClick: e } = _(o, p, m), s = f(() => ({
      right: `${o.right}px`,
      bottom: `${o.bottom}px`
    }));
    return (n, i) => (r(), d(u, { name: "backtop-fade" }, {
      default: b(() => [
        t(c) ? (r(), B(
          "div",
          {
            key: 0,
            class: "vi-backtop",
            style: C(t(s)),
            onClick: i[0] || (i[0] = //@ts-ignore
            (...l) => t(e) && t(e)(...l))
          },
          [
            N(n.$slots, "default", {}, () => [
              V(t(h), { name: n.icon }, null, 8, ["name"])
            ])
          ],
          4
          /* STYLE */
        )) : v("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  M as default
};
