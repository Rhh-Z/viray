import { defineComponent as v, computed as y, resolveComponent as $, openBlock as s, createElementBlock as T, normalizeClass as d, unref as m, normalizeStyle as u, createElementVNode as l, renderSlot as f, createBlock as n, withModifiers as k, createCommentVNode as a, Transition as z, withCtx as B } from "vue";
import { tagProps as E, tagEmits as V } from "./tag.mjs";
import "../../../theme-chalk/src/tag.css";
const w = { class: "vi-tag__content" }, N = { class: "vi-tag__content" }, S = v({
  name: "ViTag"
}), q = /* @__PURE__ */ v({
  ...S,
  props: E,
  emits: V,
  setup(g, { emit: i }) {
    const C = g, c = y(() => {
      const { size: e, type: t, hit: o, effect: p, closable: _, round: h } = C;
      return {
        "vi-tag": !0,
        "is-round": h,
        "is-closable": _,
        // hit描边
        "is-hit": o,
        [`vi-tag--${e}`]: e,
        [`vi-tag--${t}`]: t,
        [`vi-tag--${p}`]: p
      };
    }), r = (e) => {
      i("close", e);
    }, b = (e) => {
      i("click", e);
    };
    return (e, t) => {
      const o = $("vi-icon");
      return !e.disableTransitions && e.visible ? (s(), T(
        "span",
        {
          key: 0,
          class: d(m(c)),
          style: u({ backgroundColor: e.color })
        },
        [
          l("span", w, [
            f(e.$slots, "default")
          ]),
          e.closable ? (s(), n(o, {
            key: 0,
            name: "close",
            class: "vi-tag--close",
            onClick: k(r, ["stop"])
          }, null, 8, ["onClick"])) : a("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : e.disableTransitions && e.visible ? (s(), n(z, {
        key: 1,
        name: "tag-fade",
        appear: ""
      }, {
        default: B(() => [
          l(
            "span",
            {
              class: d(m(c)),
              style: u({ backgroundColor: e.color }),
              onClick: b
            },
            [
              l("span", N, [
                f(e.$slots, "default")
              ]),
              e.closable ? (s(), n(o, {
                key: 0,
                name: "close",
                class: "vi-tag--close",
                onClick: k(r, ["stop"])
              }, null, 8, ["onClick"])) : a("v-if", !0)
            ],
            6
            /* CLASS, STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      })) : a("v-if", !0);
    };
  }
});
export {
  q as default
};
