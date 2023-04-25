import { defineComponent as m, computed as c, openBlock as o, createElementBlock as i, normalizeClass as r, unref as n, createCommentVNode as a, renderSlot as b } from "vue";
import "../../../theme-chalk/src/button.css";
import { buttonProps as f, buttonEmits as v } from "./button.mjs";
const k = ["autofocus", "disabled"], y = { key: 0 }, g = /* @__PURE__ */ m({
  __name: "button",
  props: f,
  emits: v,
  setup(l, { emit: u }) {
    const t = l, d = c(() => ({
      [`vi-button--${t.type}`]: t.type,
      "is-plain": t.plain,
      "is-disabled": t.disabled,
      "is-round": t.round,
      "is-active": t.active,
      [`vi-button--${t.size}`]: t.size,
      "is-circle": t.circle,
      "is-text": t.text,
      "is-bg": t.bg
    })), p = (e) => {
      u("click", e);
    }, s = c(() => `vi-icon-${t.icon}`);
    return (e, C) => (o(), i("button", {
      class: r(["vi-button", n(d)]),
      autofocus: e.autoFocus,
      disabled: e.disabled,
      onClick: p
    }, [
      e.icon ? (o(), i("span", y, [
        n(s) && !e.loading ? (o(), i(
          "i",
          {
            key: 0,
            class: r(n(s))
          },
          null,
          2
          /* CLASS */
        )) : a("v-if", !0)
      ])) : a("v-if", !0),
      b(e.$slots, "default")
    ], 10, k));
  }
});
export {
  g as default
};
