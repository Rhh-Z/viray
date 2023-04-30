import { defineComponent as B, useSlots as E, computed as f, openBlock as s, createBlock as F, resolveDynamicComponent as L, unref as l, normalizeClass as t, withCtx as D, createElementVNode as O, withDirectives as h, createElementBlock as d, isRef as C, vModelCheckbox as $, createCommentVNode as p, renderSlot as S, Fragment as w, createTextVNode as M, toDisplayString as z } from "vue";
import "../../../theme-chalk/src/checkbox.css";
import { checkboxProps as I, checkboxEmits as P } from "./checkbox.mjs";
import { useCheckbox as T } from "./composables/use-checkbox.mjs";
const U = ["tabindex", "role", "aria-checked"], A = ["name", "aria-hidden", "checked", "disabled", "true-value", "false-value"], R = ["value", "disabled", "aria-hidden", "name", "checked"], J = /* @__PURE__ */ B({
  __name: "checkbox",
  props: I,
  emits: P,
  setup(y) {
    const r = y;
    defineOptions({ name: "ViCheckbox" });
    const i = "vi-checkbox", g = E(), {
      model: o,
      hasOwnLabel: v,
      isChecked: k,
      isFocused: u,
      isDisabled: b,
      checkboxSize: c,
      handleChange: m
    } = T(r, g), N = f(() => ({
      [i]: !0,
      [`${i}--${c.value}`]: c.value,
      "is-disabled": b.value,
      "is-border": r.border
    })), V = f(() => ({
      [`${i}__input`]: !0,
      "is-checked": r.checked,
      "is-indeterminate": r.indeterminate,
      "is-focus": r.isFocused
    }));
    return (e, n) => (s(), F(L(l(v) ? "label" : "span"), {
      class: t(l(N)),
      "aria-controls": e.indeterminate ? e.controls : null
    }, {
      default: D(() => [
        O("span", {
          class: t(l(V)),
          tabindex: e.indeterminate ? 0 : void 0,
          role: e.indeterminate ? "checkbox" : void 0,
          "aria-checked": e.indeterminate ? "mixed" : void 0
        }, [
          e.trueLabel || e.falseLabel ? h((s(), d("input", {
            key: 0,
            id: "inputId",
            "onUpdate:modelValue": n[0] || (n[0] = (a) => C(o) ? o.value = a : null),
            type: "checkbox",
            name: e.name,
            class: t(`${i}__original`),
            "aria-hidden": e.indeterminate ? "true" : "false",
            checked: l(k),
            disabled: l(b),
            "true-value": e.trueLabel,
            "false-value": e.falseLabel,
            onChange: n[1] || (n[1] = //@ts-ignore
            (...a) => l(m) && l(m)(...a)),
            onFocus: n[2] || (n[2] = (a) => u.value = !0),
            onBlur: n[3] || (n[3] = (a) => u.value = !1)
          }, null, 42, A)), [
            [$, l(o)]
          ]) : h((s(), d("input", {
            key: 1,
            id: "inputId",
            "onUpdate:modelValue": n[4] || (n[4] = (a) => C(o) ? o.value = a : null),
            class: t(`${i}__original`),
            value: e.label,
            disabled: l(b),
            type: "checkbox",
            "aria-hidden": e.indeterminate ? "true" : "false",
            name: e.name,
            checked: l(k),
            onChange: n[5] || (n[5] = //@ts-ignore
            (...a) => l(m) && l(m)(...a)),
            onFocus: n[6] || (n[6] = (a) => u.value = !0),
            onBlur: n[7] || (n[7] = (a) => u.value = !1)
          }, null, 42, R)), [
            [$, l(o)]
          ]),
          e.indeterminate ? (s(), d(
            "span",
            {
              key: 2,
              class: t(`${i}__inner`)
            },
            null,
            2
            /* CLASS */
          )) : p("v-if", !0)
        ], 10, U),
        l(v) || e.label ? (s(), d(
          "span",
          {
            key: 0,
            role: "label",
            class: t(`${i}__label`)
          },
          [
            S(e.$slots, "default"),
            e.$slots.default ? p("v-if", !0) : (s(), d(
              w,
              { key: 0 },
              [
                M(
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
        )) : p("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "aria-controls"]));
  }
});
export {
  J as default
};
