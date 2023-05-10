import { defineComponent as u, computed as c, ref as _, openBlock as o, createElementBlock as i, normalizeClass as a, unref as n, createCommentVNode as l, renderSlot as k } from "vue";
import "../../../theme-chalk/src/button.css";
import { buttonProps as v, buttonEmits as y } from "./button.mjs";
const C = ["autofocus", "disabled"], h = { key: 0 }, $ = u({
  name: "ViButton"
}), N = /* @__PURE__ */ u({
  ...$,
  props: v,
  emits: y,
  setup(d, { expose: f, emit: p }) {
    const e = d, m = (t) => {
      p("click", t);
    }, b = c(() => ({
      [`vi-button--${e.type}`]: e.type,
      "is-plain": e.plain,
      "is-disabled": e.disabled,
      "is-round": e.round,
      "is-active": e.active,
      [`vi-button--${e.size}`]: e.size,
      "is-circle": e.circle,
      "is-text": e.text,
      "is-bg": e.bg
    })), s = c(() => `vi-icon-${e.icon}`), r = _();
    return f({
      /** @description button html element */
      ref: r
    }), (t, g) => (o(), i("button", {
      ref_key: "_ref",
      ref: r,
      class: a(["vi-button", n(b)]),
      autofocus: t.autoFocus,
      disabled: t.disabled,
      onClick: m
    }, [
      t.icon ? (o(), i("span", h, [
        n(s) && !t.loading ? (o(), i(
          "i",
          {
            key: 0,
            class: a(n(s))
          },
          null,
          2
          /* CLASS */
        )) : l("v-if", !0)
      ])) : l("v-if", !0),
      k(t.$slots, "default")
    ], 10, C));
  }
});
export {
  N as default
};
