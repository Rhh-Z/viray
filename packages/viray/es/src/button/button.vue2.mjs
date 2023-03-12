import { defineComponent as e, computed as s, openBlock as u, createElementBlock as a, normalizeClass as p, unref as l, renderSlot as c } from "vue";
import "./style/index.css";
const m = e({ name: "vi-button" }), _ = /* @__PURE__ */ e({
  ...m,
  props: {
    type: { type: String, required: !1 }
  },
  setup(o) {
    const t = o, n = s(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (r, f) => (u(), a(
      "button",
      {
        class: p(["ea-button", l(n)])
      },
      [
        c(r.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  _ as default
};
