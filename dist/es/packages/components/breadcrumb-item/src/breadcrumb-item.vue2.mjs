import { defineComponent as c, getCurrentInstance as f, inject as k, toRefs as v, ref as C, computed as y, resolveComponent as I, openBlock as o, createElementBlock as s, createElementVNode as g, normalizeClass as h, unref as r, renderSlot as B, createBlock as x, toDisplayString as E } from "vue";
import { breadcrumbItemProps as P } from "./breadcrumb-item.mjs";
import { breadcrumbKey as S } from "../../breadcrumb/src/constants.mjs";
import "../../../theme-chalk/src/breadcrumb-item.css";
const V = { class: "vi-breadcrumb-item" }, $ = {
  key: 1,
  class: "vi-breadcrumb-item__separator",
  role: "presentation"
}, j = c({ name: "ViBreadcrumbItem" }), q = /* @__PURE__ */ c({
  ...j,
  props: P,
  setup(a) {
    const e = a, i = f(), m = k(S, void 0), t = i.appContext.config.globalProperties.$router, { separator: l, separatorIcon: n } = v(m), p = C(), u = y(() => ({
      "vi-breadcrumb-item__inner": !0,
      "is-link": e.to
    })), _ = () => {
      !e.to || !t || (e.replace ? t.replace(e.to) : t.push(e.to));
    };
    return (d, z) => {
      const b = I("vi-icon");
      return o(), s("span", V, [
        g(
          "span",
          {
            ref_key: "link",
            ref: p,
            role: "link",
            class: h(r(u)),
            onClick: _
          },
          [
            B(d.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        r(n) ? (o(), x(b, {
          key: 0,
          name: r(n),
          class: "vi-breadcrumb-item__separator"
        }, null, 8, ["name"])) : (o(), s(
          "span",
          $,
          E(r(l)),
          1
          /* TEXT */
        ))
      ]);
    };
  }
});
export {
  q as default
};
