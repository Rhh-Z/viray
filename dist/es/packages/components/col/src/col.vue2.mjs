import { defineComponent as f, inject as m, computed as s, openBlock as u, createBlock as d, resolveDynamicComponent as h, normalizeClass as y, unref as r, normalizeStyle as C, withCtx as g, renderSlot as v } from "vue";
import { colProps as _ } from "./col.mjs";
import { rowContextKey as $ } from "../../row/src/constants.mjs";
import { isNumber as x } from "../../../utils/common.mjs";
import "../../../theme-chalk/src/col.css";
const S = /* @__PURE__ */ f({
  __name: "col",
  props: _,
  setup(c) {
    const o = c;
    defineOptions({ name: "ViCol" });
    const { gutter: n } = m($, { gutter: s(() => 0) }), i = s(() => {
      const e = [];
      return ["span", "offset", "pull", "push"].forEach((t) => {
        const l = o[t];
        x(l) && (t === "span" ? e.push(`vi-col-${o[t]}`) : l > 0 && e.push(`vi-col-${t}-${o[t]}`));
      }), e;
    }), a = s(() => {
      const e = {};
      return n.value && (e.paddingLeft = e.paddingRight = `${n.value / 2}px`), e;
    });
    return (e, p) => (u(), d(h(e.tag), {
      class: y(["vi-col", r(i)]),
      style: C(r(a))
    }, {
      default: g(() => [
        v(e.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "style"]));
  }
});
export {
  S as default
};
