import { defineComponent as y, useSlots as E, computed as f, openBlock as i, createBlock as F, resolveDynamicComponent as L, unref as n, normalizeClass as t, withCtx as D, createElementVNode as S, withDirectives as h, createElementBlock as d, isRef as C, vModelCheckbox as $, createCommentVNode as p, renderSlot as w, Fragment as M, createTextVNode as O, toDisplayString as z } from "vue";
import "../../../theme-chalk/src/checkbox.css";
import { checkboxProps as I, checkboxEmits as P } from "./checkbox.mjs";
import { useCheckbox as T } from "./composables/use-checkbox.mjs";
const U = ["tabindex", "role", "aria-checked"], A = ["name", "aria-hidden", "checked", "disabled", "true-value", "false-value"], R = ["value", "disabled", "aria-hidden", "name", "checked"], j = y({ name: "ViCheckbox" }), K = /* @__PURE__ */ y({
  ...j,
  props: I,
  emits: P,
  setup(g) {
    const r = g, o = "vi-checkbox", N = E(), {
      model: s,
      hasOwnLabel: v,
      isChecked: k,
      isFocused: u,
      isDisabled: b,
      checkboxSize: c,
      handleChange: m
    } = T(r, N), V = f(() => ({
      [o]: !0,
      [`${o}--${c.value}`]: c.value,
      "is-disabled": b.value,
      "is-border": r.border
    })), B = f(() => ({
      [`${o}__input`]: !0,
      "is-checked": r.checked,
      "is-indeterminate": r.indeterminate,
      "is-focus": r.isFocused
    }));
    return (e, l) => (i(), F(L(n(v) ? "label" : "span"), {
      class: t(n(V)),
      "aria-controls": e.indeterminate ? e.controls : null
    }, {
      default: D(() => [
        S("span", {
          class: t(n(B)),
          tabindex: e.indeterminate ? 0 : void 0,
          role: e.indeterminate ? "checkbox" : void 0,
          "aria-checked": e.indeterminate ? "mixed" : void 0
        }, [
          e.trueLabel || e.falseLabel ? h((i(), d("input", {
            key: 0,
            id: "inputId",
            "onUpdate:modelValue": l[0] || (l[0] = (a) => C(s) ? s.value = a : null),
            type: "checkbox",
            name: e.name,
            class: t(`${o}__original`),
            "aria-hidden": e.indeterminate ? "true" : "false",
            checked: n(k),
            disabled: n(b),
            "true-value": e.trueLabel,
            "false-value": e.falseLabel,
            onChange: l[1] || (l[1] = //@ts-ignore
            (...a) => n(m) && n(m)(...a)),
            onFocus: l[2] || (l[2] = (a) => u.value = !0),
            onBlur: l[3] || (l[3] = (a) => u.value = !1)
          }, null, 42, A)), [
            [$, n(s)]
          ]) : h((i(), d("input", {
            key: 1,
            id: "inputId",
            "onUpdate:modelValue": l[4] || (l[4] = (a) => C(s) ? s.value = a : null),
            class: t(`${o}__original`),
            value: e.label,
            disabled: n(b),
            type: "checkbox",
            "aria-hidden": e.indeterminate ? "true" : "false",
            name: e.name,
            checked: n(k),
            onChange: l[5] || (l[5] = //@ts-ignore
            (...a) => n(m) && n(m)(...a)),
            onFocus: l[6] || (l[6] = (a) => u.value = !0),
            onBlur: l[7] || (l[7] = (a) => u.value = !1)
          }, null, 42, R)), [
            [$, n(s)]
          ]),
          e.indeterminate ? (i(), d(
            "span",
            {
              key: 2,
              class: t(`${o}__inner`)
            },
            null,
            2
            /* CLASS */
          )) : p("v-if", !0)
        ], 10, U),
        n(v) || e.label ? (i(), d(
          "span",
          {
            key: 0,
            role: "label",
            class: t(`${o}__label`)
          },
          [
            w(e.$slots, "default"),
            e.$slots.default ? p("v-if", !0) : (i(), d(
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
        )) : p("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "aria-controls"]));
  }
});
export {
  K as default
};
