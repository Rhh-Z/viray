import { defineComponent as _, getCurrentInstance as f, inject as k, toRefs as v, ref as C, computed as y, resolveComponent as I, openBlock as o, createElementBlock as s, createElementVNode as g, normalizeClass as h, unref as r, renderSlot as B, createBlock as x, toDisplayString as E } from "vue";
import { breadcrumbItemProps as P } from "./breadcrumb-item.mjs";
import { breadcrumbKey as S } from "../../breadcrumb/src/constants.mjs";
import "../../../theme-chalk/src/breadcrumb-item.css";
const V = { class: "vi-breadcrumb-item" }, $ = {
  key: 1,
  class: "vi-breadcrumb-item__separator",
  role: "presentation"
}, O = /* @__PURE__ */ _({
  __name: "breadcrumb-item",
  props: P,
  setup(a) {
    const e = a;
    defineOptions({ name: "ViBreadcrumbItem" });
    const c = f(), i = k(S, void 0), t = c.appContext.config.globalProperties.$router, { separator: m, separatorIcon: n } = v(i), p = C(), l = y(() => ({
      "vi-breadcrumb-item__inner": !0,
      "is-link": e.to
    })), u = () => {
      !e.to || !t || (e.replace ? t.replace(e.to) : t.push(e.to));
    };
    return (b, j) => {
      const d = I("vi-icon");
      return o(), s("span", V, [
        g(
          "span",
          {
            ref_key: "link",
            ref: p,
            role: "link",
            class: h(r(l)),
            onClick: u
          },
          [
            B(b.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        r(n) ? (o(), x(d, {
          key: 0,
          name: r(n),
          class: "vi-breadcrumb-item__separator"
        }, null, 8, ["name"])) : (o(), s(
          "span",
          $,
          E(r(m)),
          1
          /* TEXT */
        ))
      ]);
    };
  }
});
export {
  O as default
};
