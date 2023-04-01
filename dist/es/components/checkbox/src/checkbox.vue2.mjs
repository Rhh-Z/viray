import { defineComponent as m, useSlots as k, ref as d, computed as f, openBlock as r, createBlock as v, resolveDynamicComponent as C, normalizeClass as x, unref as o, withCtx as _, createElementVNode as n, withDirectives as y, isRef as V, vModelCheckbox as g, renderSlot as B, createElementBlock as w, Fragment as z, createTextVNode as D, toDisplayString as E, createCommentVNode as N } from "vue";
import { checkboxProps as S, checkboxEmits as $ } from "./checkbox.mjs";
import { useCheckbox as F } from "./composables/use-checkbox.mjs";
import "../../../theme-chalk/src/checkbox.css";
const I = { class: "vi-checkbox__input" }, L = ["name", "checked", "disabled", "value"], M = { class: "vi-checkbox__label" }, O = m({
  name: "ViCheckbox"
}), j = /* @__PURE__ */ m({
  ...O,
  props: S,
  emits: $,
  setup(u) {
    const s = u;
    k();
    const p = d(!1), b = d(!1), { model: t, isChecked: c, handleChange: i } = F(s), h = f(() => ({
      "is-checked": c,
      "is-disabled": s.disabled,
      [`vi-checkbox--${s.size}`]: s.size
    }));
    return (e, l) => (r(), v(C(!p.value && b.value ? "span" : "label"), {
      class: x(["vi-checkbox", o(h)])
    }, {
      default: _(() => [
        n("span", I, [
          y(n("input", {
            id: "inputId",
            type: "checkbox",
            name: e.name,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => V(t) ? t.value = a : null),
            checked: o(c),
            disabled: e.disabled,
            value: e.label,
            onChange: l[1] || (l[1] = //@ts-ignore
            (...a) => o(i) && o(i)(...a))
          }, null, 40, L), [
            [g, o(t)]
          ])
        ]),
        n("span", M, [
          B(e.$slots, "default"),
          e.$slots.default ? N("v-if", !0) : (r(), w(
            z,
            { key: 0 },
            [
              D(
                E(e.label),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["class"]));
  }
});
export {
  j as default
};
