import { defineComponent as k, computed as f, openBlock as i, createBlock as d, Transition as u, withCtx as b, unref as t, createElementBlock as C, normalizeStyle as B, renderSlot as N, createVNode as v, createCommentVNode as y } from "vue";
import "../../../theme-chalk/src/backtop.css";
import { backtopProps as E, backtopEmits as V } from "./backtop.mjs";
import { useBacktop as _ } from "./use-backtop.mjs";
import { ViIcon as h } from "../../icon/index.mjs";
const O = /* @__PURE__ */ k({
  __name: "backtop",
  props: E,
  emits: V,
  setup(a, { emit: m }) {
    const o = a, p = "ViBacktop", { visible: c, handleClick: e } = _(o, m, p), s = f(() => ({
      right: `${o.right}px`,
      bottom: `${o.bottom}px`
    }));
    return (r, n) => (i(), d(u, { name: "backtop-fade" }, {
      default: b(() => [
        t(c) ? (i(), C(
          "div",
          {
            key: 0,
            class: "vi-backtop",
            style: B(t(s)),
            onClick: n[0] || (n[0] = //@ts-ignore
            (...l) => t(e) && t(e)(...l))
          },
          [
            N(r.$slots, "default", {}, () => [
              v(t(h), { name: r.icon }, null, 8, ["name"])
            ])
          ],
          4
          /* STYLE */
        )) : y("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }));
  }
});
export {
  O as default
};
