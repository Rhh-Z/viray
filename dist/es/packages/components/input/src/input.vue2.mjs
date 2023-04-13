import { defineComponent as K, useSlots as oe, ref as v, computed as n, shallowRef as L, resolveComponent as se, openBlock as t, createElementBlock as l, normalizeClass as C, unref as i, Fragment as ae, createCommentVNode as a, renderSlot as h, createElementVNode as _, createVNode as g, mergeProps as M, createBlock as ne, toDisplayString as N, nextTick as S } from "vue";
import { inputProps as te, inputEmits as le } from "./input.mjs";
import "../../../theme-chalk/src/input.css";
import { UPDATE_MODEL_EVENT as F } from "../../../constants/events.mjs";
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
}, ce = ["autofocus", "type", "value", "autocomplete", "aria-label", "tabindex", "maxlength", "placeholder", "disabled"], fe = {
  key: 2,
  class: "vi-int__count"
}, ve = { class: "vi-input__count-inner" }, he = { key: 3 }, me = {
  key: 1,
  class: "vi-input__append"
}, ye = ["readonly", "placeholder", "disabled", "aria-label", "tabindex", "autofocus", "autocomplete"], be = K({
  name: "ViInput"
}), Ve = /* @__PURE__ */ K({
  ...be,
  props: te,
  emits: le,
  setup(D, { emit: s }) {
    const o = D, m = oe(), p = v(!1), d = v(!1), c = v(!1), f = v(!1), T = n(() => b.value.length), U = L(), k = L(), W = n(() => U.value || k.value), y = async (e) => {
      let { value: r } = e.target;
      s(F, r), s("input", r), await S();
    }, z = () => {
      s(F, ""), s("change", ""), s("clear"), s("input", "");
    }, I = (e) => {
      p.value = !0, s("focus", e);
    }, V = (e) => {
      p.value = !1, s("blur", e);
    }, x = (e) => {
      s("change", e.target.value);
    }, E = (e) => {
      s("keydown", e);
    }, A = (e) => {
      d.value = !0, s("mouseenter", e);
    }, O = (e) => {
      d.value = !1, s("mouseenter", e);
    }, R = (e) => {
      f.value = !0, s("compositionstart", e);
    }, j = (e) => {
      var B;
      s("compositionupdate", e);
      const r = (B = e.target) == null ? void 0 : B.value, u = r[r.length - 1] || "";
      f.value = !ie(u);
    }, q = (e) => {
      s("compositionend", e), f.value && (f.value = !1, y(e));
    }, b = n(
      () => re(o.modelValue) ? "" : String(o.modelValue)
    ), w = n(
      () => o.clearable && !o.disabled && !o.readonly && !!b.value && (p.value || d.value)
    ), G = n(
      () => !!m.suffix || !!o.clearable || w.value || o.showPassword || $.value
      // (!!validateState.value && needStatusIcon.value)
    ), P = n(
      () => o.showPassword && !o.disabled && !o.readonly && !!b.value && (p.value || d.value)
    ), $ = n(
      () => o.showWordLimit && (o.type === "text" || o.type === "textarea") && !o.disabled && !o.readonly && !o.showPassword
    ), H = () => {
      c.value = !c.value, J();
    }, J = async () => {
      var e;
      await S(), (e = W.value) == null || e.focus();
    }, Q = n(
      () => o.type !== "textarea" ? "vi-input" : "vi-textarea"
    ), X = n(() => ({
      "vi-input__wrapper": !0,
      ["is-prepend"]: m.prepend,
      ["is-append"]: m.append
    })), Y = n(() => ({
      "is-disabled": o.disabled
      // [`vi-input--${inputProps.size}`]: inputProps.size
    })), Z = n(
      () => w.value || P.value ? "vi-input__suffix" : ""
    ), ee = n(() => ({
      ["is-disabled"]: o.disabled
    }));
    return (e, r) => {
      const u = se("vi-icon");
      return t(), l(
        "div",
        {
          class: C(i(Q)),
          onMouseenter: A,
          onMouseleave: O
        },
        [
          e.type !== "textarea" ? (t(), l(
            ae,
            { key: 0 },
            [
              a(" prepend slot "),
              e.$slots.prepend ? (t(), l("div", ue, [
                h(e.$slots, "prepend")
              ])) : a("v-if", !0),
              _(
                "div",
                {
                  class: C(i(X))
                },
                [
                  a(" prefix slot "),
                  e.$slots.prefix ? (t(), l("span", pe, [
                    h(e.$slots, "prefix")
                  ])) : a("v-if", !0),
                  a(" prefixIcon "),
                  e.prefixIcon ? (t(), l("span", de, [
                    g(u, { name: e.prefixIcon }, null, 8, ["name"])
                  ])) : a("v-if", !0),
                  _("input", M({ class: "vi-input__inner" }, e.$attrs, {
                    autofocus: e.autofocus,
                    type: e.showPassword ? c.value ? "text" : "password" : e.type,
                    class: i(Y),
                    value: e.modelValue,
                    autocomplete: e.autocomplete,
                    "aria-label": e.label,
                    tabindex: e.tabindex,
                    maxlength: e.maxlength,
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                    onInput: y,
                    onFocus: I,
                    onBlur: V,
                    onChange: x,
                    onKeydown: E
                  }), null, 16, ce),
                  a(" suffix slot "),
                  i(G) ? (t(), l(
                    "span",
                    {
                      key: 2,
                      class: C(i(Z))
                    },
                    [
                      h(e.$slots, "suffix"),
                      i(w) ? (t(), ne(u, {
                        key: 0,
                        name: "close-circle",
                        onClick: z
                      })) : a("v-if", !0),
                      i(P) ? (t(), l("div", {
                        key: 1,
                        onClick: H
                      }, [
                        g(u, {
                          name: c.value ? "eye" : "eye-close"
                        }, null, 8, ["name"])
                      ])) : a("v-if", !0),
                      i($) ? (t(), l("span", fe, [
                        _(
                          "span",
                          ve,
                          N(i(T)) + "/" + N(o.maxlength),
                          1
                          /* TEXT */
                        )
                      ])) : a("v-if", !0)
                    ],
                    2
                    /* CLASS */
                  )) : a("v-if", !0),
                  a(" suffixIcon "),
                  e.suffixIcon ? (t(), l("span", he, [
                    g(u, { name: e.suffixIcon }, null, 8, ["name"])
                  ])) : a("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              a(" append slot "),
              e.$slots.append ? (t(), l("div", me, [
                h(e.$slots, "append")
              ])) : a("v-if", !0)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (t(), l("textarea", M({
            key: 1,
            class: ["vi-textarea__inner", i(ee)],
            ref_key: "textarea",
            ref: k
          }, e.$attrs, {
            readonly: e.readonly,
            placeholder: e.placeholder,
            disabled: e.disabled,
            "aria-label": e.label,
            tabindex: e.tabindex,
            autofocus: e.autofocus,
            autocomplete: e.autocomplete,
            onInput: y,
            onFocus: I,
            onBlur: V,
            onChange: x,
            onKeydown: E,
            onCompositionstart: R,
            onCompositionupdate: j,
            onCompositionend: q
          }), null, 16, ye))
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      );
    };
  }
});
export {
  Ve as default
};
