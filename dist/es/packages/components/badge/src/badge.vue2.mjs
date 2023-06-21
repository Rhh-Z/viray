import { defineComponent as r, useSlots as d, computed as o, openBlock as m, createElementBlock as p, renderSlot as _, createVNode as f, Transition as v, withCtx as x, createElementVNode as g, toDisplayString as b, unref as n, normalizeClass as C } from "vue";
import { badgeProps as $ } from "./badge.mjs";
import "../../../theme-chalk/src/badge.css";
import s from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.mjs";
const h = { class: "vi-badge" }, y = ["textContent"], B = r({
  name: "ViBadge"
}), z = /* @__PURE__ */ r({
  ...B,
  props: $,
  setup(a, { expose: i }) {
    const t = a, l = d(), c = o(() => ({
      "vi-badge__content": !0,
      [`vi-badge__content--${t.type}`]: t.type,
      "is-fixed": !!l.default,
      "is-dot": t.isDot
    })), e = o(() => t.isDot ? "" : s(t.value) && s(t.max) ? t.max < t.value ? `${t.max}+` : `${t.value}` : `${t.value}`);
    return i({
      content: e
    }), (u, D) => (m(), p("div", h, [
      _(u.$slots, "default"),
      f(v, { name: "vi-badge-zoom-in-center" }, {
        default: x(() => [
          g("sup", {
            textContent: b(n(e)),
            class: C(n(c))
          }, null, 10, y)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
});
export {
  z as default
};
