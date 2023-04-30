import { defineComponent as n, ref as c, provide as m, onMounted as i, openBlock as u, createElementBlock as b, renderSlot as d } from "vue";
import { breadcrumbProps as l } from "./breadcrumb.mjs";
import { breadcrumbKey as p } from "./constants.mjs";
import "../../../theme-chalk/src/breadcrumb.css";
const g = /* @__PURE__ */ n({
  __name: "breadcrumb",
  props: l,
  setup(o) {
    const a = o;
    defineOptions({ name: "ViBreadcrumb" });
    const t = c();
    return m(p, a), i(() => {
      var r;
      const e = (r = t.value) == null ? void 0 : r.querySelectorAll("vi-breadcrumb--item");
      e != null && e.length && e[e.length - 1].setAttribute("aria-current", "page");
    }), (e, r) => (u(), b(
      "div",
      {
        ref_key: "breadcrumb",
        ref: t,
        "aria-label": "Breadcrumb",
        class: "vi-breadcrumb",
        role: "navigation"
      },
      [
        d(e.$slots, "default")
      ],
      512
      /* NEED_PATCH */
    ));
  }
});
export {
  g as default
};
