import { defineComponent as l, computed as o, provide as p, openBlock as m, createBlock as u, resolveDynamicComponent as c, normalizeClass as f, unref as s, normalizeStyle as g, withCtx as y, renderSlot as d } from "vue";
import { rowContextKey as w } from "./constants.mjs";
import { rowProps as v } from "./row.mjs";
import "../../../theme-chalk/src/row.css";
const x = /* @__PURE__ */ l({
  __name: "row",
  props: v,
  setup(n) {
    const e = n;
    defineOptions({ name: "ViRow" });
    const r = o(() => e.gutter);
    p(w, { gutter: r });
    const i = o(() => {
      const t = {};
      return r.value && (t.marginLeft = t.marginRight = `vi-row-${e.gutter / 2}px`), t;
    }), a = o(() => [
      e.justify !== "start" ? `is-justify-${e.justify}` : "",
      e.align !== "top" ? `is-align-${e.align}` : ""
    ]);
    return (t, C) => (m(), u(c(t.tag), {
      class: f(["vi-row", s(a)]),
      style: g(s(i))
    }, {
      default: y(() => [
        d(t.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "style"]));
  }
});
export {
  x as default
};
