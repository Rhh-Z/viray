import { defineComponent as o, computed as n, openBlock as a, createBlock as i, resolveDynamicComponent as p, normalizeClass as c, unref as l, withCtx as m, renderSlot as u } from "vue";
import "../../../theme-chalk/src/text.css";
import { textProps as d } from "./text.mjs";
const f = o({ name: "ViText" }), v = /* @__PURE__ */ o({
  ...f,
  props: d,
  setup(s) {
    const t = s, r = n(() => ({
      [`vi-text--${t.type}`]: t.type,
      [`vi-text--${t.size}`]: t.size,
      "is-kbd": t.kbd,
      "is-truncated": t.truncated
    }));
    return (e, x) => (a(), i(p(e.tag), {
      class: c(["vi-text", l(r)])
    }, {
      default: m(() => [
        u(e.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});
export {
  v as default
};
