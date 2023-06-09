import { defineComponent as n, computed as o, provide as p, openBlock as u, createBlock as m, resolveDynamicComponent as c, normalizeClass as f, unref as s, normalizeStyle as g, withCtx as y, renderSlot as d } from "vue";
import { rowContextKey as w } from "./constants.mjs";
import { rowProps as _ } from "./row.mjs";
import "../../../theme-chalk/src/row.css";
const C = n({
  name: "ViRow"
}), S = /* @__PURE__ */ n({
  ...C,
  props: _,
  setup(i) {
    const e = i, r = o(() => e.gutter);
    p(w, { gutter: r });
    const l = o(() => {
      const t = {};
      return r.value && (t.marginLeft = t.marginRight = `-${e.gutter / 2}px`), t;
    }), a = o(() => [
      e.justify !== "start" ? `is-justify-${e.justify}` : "",
      e.align !== "top" ? `is-align-${e.align}` : ""
    ]);
    return (t, v) => (u(), m(c(t.tag), {
      class: f(["vi-row", s(a)]),
      style: g(s(l))
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
  S as default
};
