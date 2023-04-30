import { defineComponent as n, computed as r, openBlock as i, createBlock as a, resolveDynamicComponent as p, normalizeClass as c, unref as l, withCtx as m, renderSlot as d } from "vue";
import "../../../theme-chalk/src/text.css";
import { textProps as u } from "./text.mjs";
const k = /* @__PURE__ */ n({
  __name: "text",
  props: u,
  setup(o) {
    const t = o;
    defineOptions({ name: "ViText" });
    const s = r(() => ({
      [`vi-text--${t.type}`]: t.type,
      [`vi-text--${t.size}`]: t.size,
      "is-kbd": t.kbd,
      "is-truncated": t.truncated
    }));
    return (e, f) => (i(), a(p(e.tag), {
      class: c(["vi-text", l(s)])
    }, {
      default: m(() => [
        d(e.$slots, "default")
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});
export {
  k as default
};
