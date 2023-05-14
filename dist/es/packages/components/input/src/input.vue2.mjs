import { defineComponent as T, useSlots as ee, ref as h, computed as a, shallowRef as S, resolveComponent as se, openBlock as t, createElementBlock as l, normalizeClass as w, unref as i, Fragment as oe, createCommentVNode as o, renderSlot as m, createElementVNode as V, createVNode as x, mergeProps as F, createBlock as ne, toDisplayString as z, nextTick as ae } from "vue";
import { inputProps as te, inputEmits as le } from "./input.mjs";
import "../../../theme-chalk/src/input.css";
import { UPDATE_MODEL_EVENT as D } from "../../../constants/events.mjs";
import { isKorean as ie } from "../../../utils/i18n.mjs";
import re from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.mjs";
const ue = {
  key: 0,
  class: "vi-input__prepend"
}, pe = {
  key: 0,
  class: "vi-input__prefix"
}, de = {
  key: 1,
  class: "vi-input__prefix"
}, ce = ["autofocus", "type", "value", "autocomplete", "aria-label", "tabindex", "maxlength", "minlength", "placeholder", "disabled"], fe = {
  key: 2,
  class: "vi-int__count"
}, ve = { class: "vi-input__count-inner" }, he = { key: 3 }, me = {
  key: 1,
  class: "vi-input__append"
}, be = ["readonly", "placeholder", "disabled", "aria-label", "tabindex", "autofocus", "autocomplete", "minlength", "maxlength"], ye = T({
  name: "ViInput"
}), $e = /* @__PURE__ */ T({
  ...ye,
  props: te,
  emits: le,
  setup(U, { expose: W, emit: n }) {
    const s = U, b = ee(), p = h(!1), d = h(!1), c = h(!1), f = h(!1), A = a(() => _.value.length), y = S(), g = S(), v = a(() => y.value || g.value), C = async (e) => {
      let { value: r } = e.target;
      n(D, r), n("input", r), await ae();
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
      f.value = !ie(u);
    }, q = (e) => {
      n("compositionend", e), f.value && (f.value = !1, C(e));
    }, _ = a(
      () => re(s.modelValue) ? "" : String(s.modelValue)
    ), k = a(
      () => s.clearable && !s.disabled && !s.readonly && !!_.value && (p.value || d.value)
    ), G = a(
      () => !!b.suffix || !!s.clearable || k.value || s.showPassword || L.value
      // (!!validateState.value && needStatusIcon.value)
    ), B = a(
      () => s.showPassword && !s.disabled && !s.readonly && !!_.value && (p.value || d.value)
    ), L = a(
      () => s.showWordLimit && (s.type === "text" || s.type === "textarea") && !s.disabled && !s.readonly && !s.showPassword
    ), H = () => {
      c.value = !c.value, M();
    }, M = async () => {
      var e;
      (e = v.value) == null || e.focus();
    }, J = a(
      () => s.type !== "textarea" ? ["vi-input", { [`vi-input--${s.size}`]: s.size }] : "vi-textarea"
    ), Q = a(() => ({
      "vi-input__wrapper": !0,
      ["is-prepend"]: b.prepend,
      ["is-append"]: b.append
    })), X = a(() => ({
      "is-disabled": s.disabled
    })), Y = a(
      () => k.value || B.value ? "vi-input__suffix" : ""
    ), Z = a(() => ({
      ["is-disabled"]: s.disabled
    }));
    return W({
      /** @description HTML input element native method */
      blur: () => {
        var e;
        return (e = v.value) == null ? void 0 : e.blur();
      },
      /** @description HTML input element native method */
      focus: M,
      /** @description clear input value */
      clear: I,
      /** @description HTML element, input or textarea */
      ref: v,
      /** @description HTML input element native method */
      select: () => {
        var e;
        (e = v.value) == null || e.select();
      },
      /** @description HTML input element */
      input: y,
      /** @description HTML textarea element */
      textarea: g
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
            oe,
            { key: 0 },
            [
              o(" prepend slot "),
              e.$slots.prepend ? (t(), l("div", ue, [
                m(e.$slots, "prepend")
              ])) : o("v-if", !0),
              V(
                "div",
                {
                  class: w(i(Q))
                },
                [
                  o(" prefix slot "),
                  e.$slots.prefix ? (t(), l("span", pe, [
                    m(e.$slots, "prefix")
                  ])) : o("v-if", !0),
                  o(" prefixIcon "),
                  e.prefixIcon ? (t(), l("span", de, [
                    x(u, { name: e.prefixIcon }, null, 8, ["name"])
                  ])) : o("v-if", !0),
                  V("input", F({
                    class: "vi-input__inner",
                    ref_key: "input",
                    ref: y
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
                  }), null, 16, ce),
                  o(" suffix slot "),
                  i(G) ? (t(), l(
                    "span",
                    {
                      key: 2,
                      class: w(i(Y))
                    },
                    [
                      m(e.$slots, "suffix"),
                      i(k) ? (t(), ne(u, {
                        key: 0,
                        name: "close-circle",
                        onClick: I
                      })) : o("v-if", !0),
                      i(B) ? (t(), l("div", {
                        key: 1,
                        onClick: H
                      }, [
                        x(u, {
                          name: c.value ? "eye" : "eye-close"
                        }, null, 8, ["name"])
                      ])) : o("v-if", !0),
                      i(L) ? (t(), l("span", fe, [
                        V(
                          "span",
                          ve,
                          z(i(A)) + "/" + z(s.maxlength),
                          1
                          /* TEXT */
                        )
                      ])) : o("v-if", !0)
                    ],
                    2
                    /* CLASS */
                  )) : o("v-if", !0),
                  o(" suffixIcon "),
                  e.suffixIcon ? (t(), l("span", he, [
                    x(u, { name: e.suffixIcon }, null, 8, ["name"])
                  ])) : o("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              o(" append slot "),
              e.$slots.append ? (t(), l("div", me, [
                m(e.$slots, "append")
              ])) : o("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (t(), l("textarea", F({
            key: 1,
            class: ["vi-textarea__inner", i(Z)],
            ref_key: "textarea",
            ref: g
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
          }), null, 16, be))
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      );
    };
  }
});
export {
  $e as default
};
