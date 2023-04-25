import { defineComponent as F, useSlots as L, computed as v, openBlock as i, createBlock as V, resolveDynamicComponent as D, normalizeClass as t, unref as o, withCtx as S, createElementVNode as k, withDirectives as f, createElementBlock as m, isRef as h, vModelCheckbox as C, renderSlot as w, Fragment as M, createTextVNode as O, toDisplayString as z, createCommentVNode as $ } from "vue";
import "../../../theme-chalk/src/checkbox.css";
import { checkboxProps as I, checkboxEmits as P } from "./checkbox.mjs";
import { useCheckbox as T } from "./composables/use-checkbox.mjs";
const U = ["aria-checked"], A = ["name", "checked", "disabled", "true-value", "false-value"], R = ["value", "disabled", "aria-hidden", "name", "checked"], J = /* @__PURE__ */ F({
  __name: "checkbox",
  props: I,
  emits: P,
  setup(g) {
    const r = g, a = "vi-checkbox", y = L(), {
      model: n,
      hasOwnLabel: N,
      isChecked: c,
      isFocused: u,
      isDisabled: p,
      checkboxSize: b,
      handleChange: d
    } = T(r, y), B = v(() => ({
      [a]: !0,
      [`${a}--${b.value}`]: b.value,
      "is-disabled": p.value,
      "is-border": r.border
    }));
    console.log(b.value);
    const E = v(() => ({
      [`${a}__input`]: !0,
      "is-checked": r.checked,
      "is-focus": r.isFocused
    }));
    return (l, e) => (i(), V(D("label"), {
      class: t(o(B)),
      "aria-controls": l.indeterminate ? l.controls : null
    }, {
      default: S(() => [
        k("span", {
          class: t(o(E)),
          "aria-checked": l.indeterminate ? "mixed" : void 0
        }, [
          l.trueLabel || l.falseLabel ? f((i(), m("input", {
            key: 0,
            id: "inputId",
            "onUpdate:modelValue": e[0] || (e[0] = (s) => h(n) ? n.value = s : null),
            type: "checkbox",
            name: l.name,
            class: t(`${a}__original`),
            checked: o(c),
            disabled: o(p),
            "true-value": l.trueLabel,
            "false-value": l.falseLabel,
            onChange: e[1] || (e[1] = //@ts-ignore
            (...s) => o(d) && o(d)(...s)),
            onFocus: e[2] || (e[2] = (s) => u.value = !0),
            onBlur: e[3] || (e[3] = (s) => u.value = !1)
          }, null, 42, A)), [
            [C, o(n)]
          ]) : f((i(), m("input", {
            key: 1,
            id: "inputId",
            "onUpdate:modelValue": e[4] || (e[4] = (s) => h(n) ? n.value = s : null),
            class: t(`${a}__original`),
            value: l.label,
            disabled: o(p),
            type: "checkbox",
            "aria-hidden": l.indeterminate ? "true" : "false",
            name: l.name,
            checked: o(c),
            onChange: e[5] || (e[5] = //@ts-ignore
            (...s) => o(d) && o(d)(...s)),
            onFocus: e[6] || (e[6] = (s) => u.value = !0),
            onBlur: e[7] || (e[7] = (s) => u.value = !1)
          }, null, 42, R)), [
            [C, o(n)]
          ]),
          k(
            "span",
            {
              class: t(`${a}__inner`)
            },
            null,
            2
            /* CLASS */
          )
        ], 10, U),
        o(N) || l.label ? (i(), m(
          "span",
          {
            key: 0,
            role: "label",
            class: t(`${a}__label`)
          },
          [
            w(l.$slots, "default"),
            l.$slots.default ? $("v-if", !0) : (i(), m(
              M,
              { key: 0 },
              [
                O(
                  z(l.label),
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
        )) : $("v-if", !0)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class", "aria-controls"]));
  }
});
export {
  J as default
};
