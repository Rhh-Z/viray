import { defineComponent as o, ref as n, provide as m, onMounted as u, openBlock as l, createElementBlock as i, renderSlot as b } from "vue";
import { breadcrumbProps as d } from "./breadcrumb.mjs";
import { breadcrumbKey as p } from "./constants.mjs";
import "../../../theme-chalk/src/breadcrumb.css";
const s = o({
  name: "ViBreadcrumb"
}), B = /* @__PURE__ */ o({
  ...s,
  props: d,
  setup(a) {
    const c = a, t = n();
    return m(p, c), u(() => {
      var r;
      const e = (r = t.value) == null ? void 0 : r.querySelectorAll(".vi-breadcrumb-item");
      e != null && e.length && e[e.length - 1].setAttribute("aria-current", "page");
    }), (e, r) => (l(), i(
      "div",
      {
        ref_key: "breadcrumb",
        ref: t,
        "aria-label": "Breadcrumb",
        class: "vi-breadcrumb",
        role: "navigation"
      },
      [
        b(e.$slots, "default")
      ],
      512
      /* NEED_PATCH */
    ));
  }
});
export {
  B as default
};
