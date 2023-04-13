import { defineComponent as r, computed as c, openBlock as o, createElementBlock as i, normalizeClass as a, unref as n, createCommentVNode as l, renderSlot as b } from "vue";
import "../../../theme-chalk/src/button.css";
import { buttonProps as f, buttonEmits as v } from "./button.mjs";
const k = ["autofocus", "disabled"], _ = { key: 0 }, y = r({
  name: "ViButton"
}), z = /* @__PURE__ */ r({
  ...y,
  props: f,
  emits: v,
  setup(u, { emit: d }) {
    const t = u, p = c(() => ({
      [`vi-button--${t.type}`]: t.type,
      "is-plain": t.plain,
      "is-disabled": t.disabled,
      "is-round": t.round,
      "is-active": t.active,
      [`vi-button--${t.size}`]: t.size,
      "is-circle": t.circle,
      "is-text": t.text,
      "is-bg": t.bg
    })), m = (e) => {
      d("click", e);
    }, s = c(() => `vi-icon-${t.icon}`);
    return (e, C) => (o(), i("button", {
      class: a(["vi-button", n(p)]),
      autofocus: e.autoFocus,
      disabled: e.disabled,
      onClick: m
    }, [
      e.icon ? (o(), i("span", _, [
        n(s) && !e.loading ? (o(), i(
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
      b(e.$slots, "default")
    ], 10, k));
  }
});
export {
  z as default
};
