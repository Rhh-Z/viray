import { defineComponent as r, computed as s, openBlock as u, createElementBlock as p, normalizeClass as a, unref as l, renderSlot as c } from "vue";
import "./style/index.less";
const b = /* @__PURE__ */ r({
  name: "button",
  props: {
    type: { type: String, required: !1 }
  },
  setup(e) {
    const t = e;
    defineOptions({ name: "vi-button" });
    const n = s(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (o, i) => (u(), p(
      "button",
      {
        class: a(["ea-button", l(n)])
      },
      [
        c(o.$slots, "default")
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  b as default
};
