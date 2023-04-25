import { defineComponent as c, ref as n, provide as m, onMounted as u, openBlock as b, createElementBlock as l, renderSlot as i } from "vue";
import { breadcrumbProps as d } from "./breadcrumb.mjs";
import { breadcrumbKey as p } from "./constants.mjs";
import "../../../theme-chalk/src/breadcrumb.css";
const g = /* @__PURE__ */ c({
  __name: "breadcrumb",
  props: d,
  setup(o) {
    const a = o, t = n();
    return m(p, a), u(() => {
      var e;
      const r = (e = t.value) == null ? void 0 : e.querySelectorAll("vi-breadcrumb--item");
      r != null && r.length && r[r.length - 1].setAttribute("aria-current", "page");
    }), (r, e) => (b(), l(
      "div",
      {
        ref_key: "breadcrumb",
        ref: t,
        "aria-label": "Breadcrumb",
        class: "vi-breadcrumb",
        role: "navigation"
      },
      [
        i(r.$slots, "default")
      ],
      512
      /* NEED_PATCH */
    ));
  }
});
export {
  g as default
};
