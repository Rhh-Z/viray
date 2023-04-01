import { defineComponent as d, computed as c, openBlock as e, createElementBlock as i, normalizeClass as r, unref as o, createCommentVNode as a, renderSlot as $ } from "vue";
import "../../../theme-chalk/src/button.css";
import { buttonProps as B, buttonEmits as z } from "./button.mjs";
const E = ["disabled"], N = { key: 0 }, S = d({
  name: "ViButton"
}), x = /* @__PURE__ */ d({
  ...S,
  props: B,
  emits: z,
  setup(u, { emit: m }) {
    const {
      type: n,
      plain: p,
      disabled: b,
      round: f,
      active: v,
      size: s,
      circle: _,
      icon: k,
      text: C,
      bg: g,
      loading: V
    } = u, h = c(() => ({
      [`vi-button--${n}`]: n,
      "is-plain": p,
      "is-disabled": b,
      "is-round": f,
      "is-active": v,
      [`vi-button--${s}`]: s,
      "is-circle": _,
      "is-text": C,
      "is-bg": g
    })), y = (t) => {
      m("click", t);
    }, l = c(() => `vi-icon-${k}`);
    return (t, P) => (e(), i("button", {
      class: r(["vi-button", o(h)]),
      disabled: t.disabled,
      onClick: y
    }, [
      t.icon ? (e(), i("span", N, [
        o(l) && !t.loading ? (e(), i(
          "i",
          {
            key: 0,
            class: r(o(l))
          },
          null,
          2
          /* CLASS */
        )) : a("v-if", !0)
      ])) : a("v-if", !0),
      $(t.$slots, "default")
    ], 10, E));
  }
});
export {
  x as default
};
