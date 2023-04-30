import { defineComponent as c, inject as p, computed as s, openBlock as m, createBlock as d, resolveDynamicComponent as h, normalizeClass as y, unref as r, normalizeStyle as C, withCtx as _, renderSlot as g } from "vue";
import { colProps as v } from "./col.mjs";
import { rowContextKey as $ } from "../../row/src/constants.mjs";
import { isNumber as x } from "../../../utils/common.mjs";
import "../../../theme-chalk/src/col.css";
const z = c({ name: "ViCol" }), b = /* @__PURE__ */ c({
  ...z,
  props: v,
  setup(i) {
    const o = i, { gutter: n } = p($, { gutter: s(() => 0) }), a = s(() => {
      const t = [];
      return ["span", "offset", "pull", "push"].forEach((e) => {
        const l = o[e];
        x(l) && (e === "span" ? t.push(`vi-col-${o[e]}`) : l > 0 && t.push(`vi-col-${e}-${o[e]}`));
      }), t;
    }), u = s(() => {
      const t = {};
      return n.value && (t.paddingLeft = t.paddingRight = `${n.value / 2}px`), t;
    });
    return (t, f) => (m(), d(h(t.tag), {
      class: y(["vi-col", r(a)]),
      style: C(r(u))
    }, {
      default: _(() => [
        g(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "style"]));
  }
});
export {
  b as default
};
