import { defineComponent as t, computed as m, resolveComponent as f, openBlock as i, createElementBlock as p, normalizeClass as u, unref as k, createBlock as v, createCommentVNode as o, createElementVNode as h, renderSlot as s } from "vue";
import { linkProps as _, linkEmits as y } from "./link.mjs";
import "../../../theme-chalk/src/link.css";
const C = ["href"], $ = { class: "vi-link__inner" }, b = t({
  name: "ViLink"
}), S = /* @__PURE__ */ t({
  ...b,
  props: _,
  emits: y,
  setup(l, { emit: r }) {
    const n = l;
    function a(e) {
      n.disabled || r("click", e);
    }
    const c = m(() => ({
      "vi-link": !0,
      [`vi-link--${n.type}`]: n.type,
      "is-underline": n.underline,
      "is-disabled": n.disabled
    }));
    return (e, B) => {
      const d = f("vi-icon");
      return i(), p("a", {
        class: u(k(c)),
        href: e.disabled || !e.href ? void 0 : e.href,
        onClick: a
      }, [
        e.icon ? (i(), v(d, {
          key: 0,
          name: e.icon
        }, null, 8, ["name"])) : o("v-if", !0),
        h("span", $, [
          e.$slots.default ? s(e.$slots, "default", { key: 0 }) : o("v-if", !0)
        ]),
        e.$slots.icon ? s(e.$slots, "icon", { key: 1 }) : o("v-if", !0)
      ], 10, C);
    };
  }
});
export {
  S as default
};
