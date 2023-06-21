import { defineComponent as f, computed as l, ref as y, openBlock as n, createElementBlock as i, normalizeClass as d, unref as o, createCommentVNode as p, renderSlot as C } from "vue";
import "../../../theme-chalk/src/button.css";
import { buttonProps as h, buttonEmits as B } from "./button.mjs";
import { useButton as $ } from "./use-button.mjs";
const g = ["type", "autofocus", "disabled"], z = { key: 0 }, E = f({
  name: "ViButton"
}), T = /* @__PURE__ */ f({
  ...E,
  props: h,
  emits: B,
  setup(m, { expose: v, emit: b }) {
    const e = m, { _disabled: s, _size: r, _type: u } = $(e), _ = (t) => {
      b("click", t);
    }, k = l(() => ({
      [`vi-button--${u.value}`]: u.value,
      "is-plain": e.plain,
      "is-disabled": s.value,
      "is-round": e.round,
      "is-active": e.active,
      [`vi-button--${r.value}`]: r.value,
      "is-circle": e.circle,
      "is-text": e.text,
      "is-bg": e.bg
    })), a = l(() => `vi-icon-${e.icon}`), c = y();
    return v({
      /** @description button html element */
      ref: c
    }), (t, N) => (n(), i("button", {
      ref_key: "_ref",
      ref: c,
      class: d(["vi-button", o(k)]),
      type: t.nativeType,
      autofocus: t.autoFocus,
      disabled: o(s),
      onClick: _
    }, [
      t.icon ? (n(), i("span", z, [
        o(a) && !t.loading ? (n(), i(
          "i",
          {
            key: 0,
            class: d(o(a))
          },
          null,
          2
          /* CLASS */
        )) : p("v-if", !0)
      ])) : p("v-if", !0),
      C(t.$slots, "default")
    ], 10, g));
  }
});
export {
  T as default
};
