import { defineComponent as T, useSlots as ee, ref as m, computed as a, shallowRef as S, onMounted as oe, resolveComponent as se, openBlock as t, createElementBlock as l, normalizeClass as w, unref as i, Fragment as ne, createCommentVNode as s, renderSlot as b, createElementVNode as V, createVNode as x, mergeProps as F, createBlock as ae, toDisplayString as z, nextTick as te } from "vue";
import { inputProps as le, inputEmits as ie } from "./input.mjs";
import "../../../theme-chalk/src/input.css";
import { UPDATE_MODEL_EVENT as D } from "../../../constants/events.mjs";
import { isKorean as re } from "../../../utils/i18n.mjs";
import ue from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.mjs";
const pe = {
  key: 0,
  class: "vi-input__prepend"
}, de = {
  key: 0,
  class: "vi-input__prefix"
}, ce = {
  key: 1,
  class: "vi-input__prefix"
}, fe = ["autofocus", "type", "value", "autocomplete", "aria-label", "tabindex", "maxlength", "minlength", "placeholder", "disabled"], ve = {
  key: 2,
  class: "vi-int__count"
}, he = { class: "vi-input__count-inner" }, me = { key: 3 }, be = {
  key: 1,
  class: "vi-input__append"
}, ge = ["readonly", "placeholder", "disabled", "aria-label", "tabindex", "autofocus", "autocomplete", "minlength", "maxlength"], ye = T({
  name: "ViInput"
}), Ee = /* @__PURE__ */ T({
  ...ye,
  props: le,
  emits: ie,
  setup(U, { expose: W, emit: n }) {
    const o = U, g = ee(), p = m(!1), d = m(!1), c = m(!1), f = m(!1), A = a(() => _.value.length), v = S(), y = S(), h = a(() => v.value || y.value), C = async (e) => {
      let { value: r } = e.target;
      n(D, r), n("input", r), await te();
    }, I = () => {
      n(D, ""), n("change", ""), n("clear"), n("input", "");
    }, $ = (e) => {
      p.value = !0, n("focus", e);
    }, E = (e) => {
      p.value = !1, n("blur", e);
    }, P = (e) => {
      n("change", e.target.value);
    }, K = (e) => {
      d.value = !0, n("mouseenter", e);
    }, O = (e) => {
      d.value = !1, n("mouseenter", e);
    }, R = (e) => {
      f.value = !0, n("compositionstart", e);
    }, j = (e) => {
      var N;
      n("compositionupdate", e);
      const r = (N = e.target) == null ? void 0 : N.value, u = r[r.length - 1] || "";
      f.value = !re(u);
    }, q = (e) => {
      n("compositionend", e), f.value && (f.value = !1, C(e));
    }, _ = a(
      () => ue(o.modelValue) ? "" : String(o.modelValue)
    ), k = a(
      () => o.clearable && !o.disabled && !o.readonly && !!_.value && (p.value || d.value)
    ), G = a(
      () => !!g.suffix || !!o.clearable || k.value || o.showPassword || M.value
      // (!!validateState.value && needStatusIcon.value)
    ), B = a(
      () => o.showPassword && !o.disabled && !o.readonly && !!_.value && (p.value || d.value)
    ), M = a(
      () => o.showWordLimit && (o.type === "text" || o.type === "textarea") && !o.disabled && !o.readonly && !o.showPassword
    ), H = () => {
      c.value = !c.value, L();
    }, L = async () => {
      var e;
      (e = h.value) == null || e.focus();
    }, J = a(
      () => o.type !== "textarea" ? ["vi-input", { [`vi-input--${o.size}`]: o.size }] : "vi-textarea"
    ), Q = a(() => ({
      "vi-input__wrapper": !0,
      ["is-prepend"]: g.prepend,
      ["is-append"]: g.append
    })), X = a(() => ({
      "is-disabled": o.disabled
    })), Y = a(
      () => k.value || B.value ? "vi-input__suffix" : ""
    ), Z = a(() => ({
      ["is-disabled"]: o.disabled
    }));
    return oe(() => {
      var e;
      console.log((e = v.value) == null ? void 0 : e.blur());
    }), W({
      /** @description HTML input element native method */
      blur: () => {
        var e;
        return (e = h.value) == null ? void 0 : e.blur();
      },
      /** @description HTML input element native method */
      focus: L,
      /** @description clear input value */
      clear: I,
      /** @description HTML element, input or textarea */
      ref: h,
      /** @description HTML input element native method */
      select: () => {
        var e;
        (e = h.value) == null || e.select();
      },
      /** @description HTML input element */
      input: v,
      /** @description HTML textarea element */
      textarea: y
    }), (e, r) => {
      const u = se("vi-icon");
      return t(), l(
        "div",
        {
          class: w(i(J)),
          onMouseenter: K,
          onMouseleave: O
        },
        [
          e.type !== "textarea" ? (t(), l(
            ne,
            { key: 0 },
            [
              s(" prepend slot "),
              e.$slots.prepend ? (t(), l("div", pe, [
                b(e.$slots, "prepend")
              ])) : s("v-if", !0),
              V(
                "div",
                {
                  class: w(i(Q))
                },
                [
                  s(" prefix slot "),
                  e.$slots.prefix ? (t(), l("span", de, [
                    b(e.$slots, "prefix")
                  ])) : s("v-if", !0),
                  s(" prefixIcon "),
                  e.prefixIcon ? (t(), l("span", ce, [
                    x(u, { name: e.prefixIcon }, null, 8, ["name"])
                  ])) : s("v-if", !0),
                  V("input", F({
                    class: "vi-input__inner",
                    ref_key: "input",
                    ref: v
                  }, e.$attrs, {
                    autofocus: e.autofocus,
                    type: e.showPassword ? c.value ? "text" : "password" : e.type,
                    class: i(X),
                    value: e.modelValue,
                    autocomplete: e.autocomplete,
                    "aria-label": e.label,
                    tabindex: e.tabindex,
                    maxlength: e.maxlength,
                    minlength: e.minlength,
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                    onInput: C,
                    onFocus: $,
                    onBlur: E,
                    onChange: P
                  }), null, 16, fe),
                  s(" suffix slot "),
                  i(G) ? (t(), l(
                    "span",
                    {
                      key: 2,
                      class: w(i(Y))
                    },
                    [
                      b(e.$slots, "suffix"),
                      i(k) ? (t(), ae(u, {
                        key: 0,
                        name: "close-circle",
                        onClick: I
                      })) : s("v-if", !0),
                      i(B) ? (t(), l("div", {
                        key: 1,
                        onClick: H
                      }, [
                        x(u, {
                          name: c.value ? "eye" : "eye-close"
                        }, null, 8, ["name"])
                      ])) : s("v-if", !0),
                      i(M) ? (t(), l("span", ve, [
                        V(
                          "span",
                          he,
                          z(i(A)) + "/" + z(o.maxlength),
                          1
                          /* TEXT */
                        )
                      ])) : s("v-if", !0)
                    ],
                    2
                    /* CLASS */
                  )) : s("v-if", !0),
                  s(" suffixIcon "),
                  e.suffixIcon ? (t(), l("span", me, [
                    x(u, { name: e.suffixIcon }, null, 8, ["name"])
                  ])) : s("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              s(" append slot "),
              e.$slots.append ? (t(), l("div", be, [
                b(e.$slots, "append")
              ])) : s("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (t(), l("textarea", F({
            key: 1,
            class: ["vi-textarea__inner", i(Z)],
            ref_key: "textarea",
            ref: y
          }, e.$attrs, {
            readonly: e.readonly,
            placeholder: e.placeholder,
            disabled: e.disabled,
            "aria-label": e.label,
            tabindex: e.tabindex,
            autofocus: e.autofocus,
            autocomplete: e.autocomplete,
            minlength: e.minlength,
            maxlength: e.maxlength,
            onInput: C,
            onFocus: $,
            onBlur: E,
            onChange: P,
            onCompositionstart: R,
            onCompositionupdate: j,
            onCompositionend: q
          }), null, 16, ge))
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      );
    };
  }
});
export {
  Ee as default
};
