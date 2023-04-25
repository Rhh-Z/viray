import { defineComponent as u, inject as f, computed as s, openBlock as m, createBlock as d, resolveDynamicComponent as h, normalizeClass as y, unref as r, normalizeStyle as g, withCtx as v, renderSlot as C } from "vue";
import { colProps as _ } from "./col.mjs";
import { rowContextKey as $ } from "../../row/src/constants.mjs";
import { isNumber as x } from "../../../utils/common.mjs";
import "../../../theme-chalk/src/col.css";
const S = /* @__PURE__ */ u({
  __name: "col",
  props: _,
  setup(c) {
    const o = c, { gutter: n } = f($, { gutter: s(() => 0) }), i = s(() => {
      const t = [];
      return ["span", "offset", "pull", "push"].forEach((e) => {
        const l = o[e];
        x(l) && (e === "span" ? t.push(`vi-col-${o[e]}`) : l > 0 && t.push(`vi-col-${e}-${o[e]}`));
      }), t;
    }), a = s(() => {
      const t = {};
      return n.value && (t.paddingLeft = t.paddingRight = `${n.value / 2}px`), t;
    });
    return (t, p) => (m(), d(h(t.tag), {
      class: y(["vi-col", r(i)]),
      style: g(r(a))
    }, {
      default: v(() => [
        C(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "style"]));
  }
});
export {
  S as default
};
