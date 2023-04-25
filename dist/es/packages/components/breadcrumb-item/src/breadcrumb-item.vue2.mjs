import { defineComponent as d, getCurrentInstance as f, inject as k, toRefs as v, ref as C, computed as y, resolveComponent as g, openBlock as o, createElementBlock as s, createElementVNode as h, normalizeClass as I, unref as r, renderSlot as x, createBlock as B, toDisplayString as E } from "vue";
import { breadcrumbItemProps as P } from "./breadcrumb-item.mjs";
import { breadcrumbKey as S } from "../../breadcrumb/src/constants.mjs";
import "../../../theme-chalk/src/breadcrumb-item.css";
const $ = { class: "vi-breadcrumb-item" }, j = {
  key: 1,
  class: "vi-breadcrumb-item__separator",
  role: "presentation"
}, V = /* @__PURE__ */ d({
  __name: "breadcrumb-item",
  props: P,
  setup(c) {
    const e = c, a = f(), i = k(S, void 0), t = a.appContext.config.globalProperties.$router, { separator: m, separatorIcon: n } = v(i), l = C(), p = y(() => ({
      "vi-breadcrumb-item__inner": !0,
      "is-link": e.to
    })), u = () => {
      !e.to || !t || (e.replace ? t.replace(e.to) : t.push(e.to));
    };
    return (b, z) => {
      const _ = g("vi-icon");
      return o(), s("span", $, [
        h(
          "span",
          {
            ref_key: "link",
            ref: l,
            role: "link",
            class: I(r(p)),
            onClick: u
          },
          [
            x(b.$slots, "default")
          ],
          2
          /* CLASS */
        ),
        r(n) ? (o(), B(_, {
          key: 0,
          name: r(n),
          class: "vi-breadcrumb-item__separator"
        }, null, 8, ["name"])) : (o(), s(
          "span",
          j,
          E(r(m)),
          1
          /* TEXT */
        ))
      ]);
    };
  }
});
export {
  V as default
};
