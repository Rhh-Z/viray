import { defineComponent as s, computed as n, openBlock as a, createBlock as p, resolveDynamicComponent as i, normalizeClass as c, unref as l, withCtx as m, renderSlot as u } from "vue";
import "../../../theme-chalk/src/text.css";
import { textProps as d } from "./text.mjs";
const k = /* @__PURE__ */ s({
  __name: "text",
  props: d,
  setup(o) {
    const t = o, r = n(() => ({
      [`vi-text--${t.type}`]: t.type,
      [`vi-text--${t.size}`]: t.size,
      "is-kbd": t.kbd,
      "is-truncated": t.truncated
    }));
    return (e, f) => (a(), p(i(e.tag), {
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
  k as default
};
