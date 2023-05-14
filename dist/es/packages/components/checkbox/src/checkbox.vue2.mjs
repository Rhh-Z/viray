import { defineComponent as y, useSlots as E, computed as c, openBlock as s, createBlock as L, resolveDynamicComponent as D, unref as n, normalizeClass as t, withCtx as F, createElementVNode as S, withDirectives as h, createElementBlock as d, isRef as C, vModelCheckbox as $, createCommentVNode as v, renderSlot as w, Fragment as M, createTextVNode as O, toDisplayString as z } from "vue";
import "../../../theme-chalk/src/checkbox.css";
import { checkboxProps as I, checkboxEmits as P } from "./checkbox.mjs";
import { useCheckbox as T } from "./composables/use-checkbox.mjs";
const U = ["tabindex", "role", "aria-checked"], A = ["name", "aria-hidden", "checked", "disabled", "true-value", "false-value"], R = ["value", "disabled", "aria-hidden", "name", "checked"], j = y({
  name: "ViCheckbox"
}), K = /* @__PURE__ */ y({
  ...j,
  props: I,
  emits: P,
  setup(g) {
    const m = g, o = "vi-checkbox", N = E(), {
      model: i,
      hasOwnLabel: k,
      isChecked: b,
      isFocused: r,
      isDisabled: p,
      checkboxSize: f,
      handleChange: u
    } = T(m, N), V = c(() => ({
      [o]: !0,
      [`${o}--${f.value}`]: f.value,
      "is-disabled": p.value,
      "is-border": m.border
      // 'is-focus':isFocused.value,
    })), B = c(() => ({
      [`${o}__input`]: !0,
      "is-indeterminate": m.indeterminate,
      "is-checked": b.value,
      "is-focus": r.value
    }));
    return (e, l) => (s(), L(D(n(k) ? "label" : "span"), {
      class: t(n(V)),
      "aria-controls": e.indeterminate ? e.controls : null
    }, {
      default: F(() => [
        S("span", {
          class: t(n(B)),
          tabindex: e.indeterminate ? 0 : void 0,
          role: e.indeterminate ? "checkbox" : void 0,
          "aria-checked": e.indeterminate ? "mixed" : void 0
        }, [
          e.trueLabel || e.falseLabel ? h((s(), d("input", {
            key: 0,
            id: "inputId",
            "onUpdate:modelValue": l[0] || (l[0] = (a) => C(i) ? i.value = a : null),
            type: "checkbox",
            name: e.name,
            class: t(`${o}__original`),
            "aria-hidden": e.indeterminate ? "true" : "false",
            checked: n(b),
            disabled: n(p),
            "true-value": e.trueLabel,
            "false-value": e.falseLabel,
            onChange: l[1] || (l[1] = //@ts-ignore
            (...a) => n(u) && n(u)(...a)),
            onFocus: l[2] || (l[2] = (a) => r.value = !0),
            onBlur: l[3] || (l[3] = (a) => r.value = !1)
          }, null, 42, A)), [
            [$, n(i)]
          ]) : h((s(), d("input", {
            key: 1,
            id: "inputId",
            "onUpdate:modelValue": l[4] || (l[4] = (a) => C(i) ? i.value = a : null),
            class: t(`${o}__original`),
            value: e.label,
            disabled: n(p),
            type: "checkbox",
            "aria-hidden": e.indeterminate ? "true" : "false",
            name: e.name,
            checked: n(b),
            onChange: l[5] || (l[5] = //@ts-ignore
            (...a) => n(u) && n(u)(...a)),
            onFocus: l[6] || (l[6] = (a) => r.value = !0),
            onBlur: l[7] || (l[7] = (a) => r.value = !1)
          }, null, 42, R)), [
            [$, n(i)]
          ]),
          e.indeterminate ? (s(), d(
            "span",
            {
              key: 2,
              class: t(`${o}__inner`)
            },
            null,
            2
            /* CLASS */
          )) : v("v-if", !0)
        ], 10, U),
        n(k) || e.label ? (s(), d(
          "span",
          {
            key: 0,
            role: "label",
            class: t(`${o}__label`)
          },
          [
            w(e.$slots, "default"),
            e.$slots.default ? v("v-if", !0) : (s(), d(
              M,
              { key: 0 },
              [
                O(
                  z(e.label),
                  1
                  /* TEXT */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : v("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "aria-controls"]));
  }
});
export {
  K as default
};
