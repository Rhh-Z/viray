import { defineComponent as g, computed as $, openBlock as o, createElementBlock as T, normalizeClass as d, unref as s, normalizeStyle as m, createElementVNode as l, renderSlot as u, createBlock as a, withModifiers as f, createCommentVNode as n, Transition as V, withCtx as z } from "vue";
import { tagProps as B, tagEmits as E } from "./tag.mjs";
import { ViIcon as k } from "../../icon/index.mjs";
import "../../../theme-chalk/src/tag.css";
const w = { class: "vi-tag__content" }, N = { class: "vi-tag__content" }, S = g({ name: "ViTag" }), q = /* @__PURE__ */ g({
  ...S,
  props: B,
  emits: E,
  setup(C, { emit: i }) {
    const v = C, r = $(() => {
      const { size: e, type: t, hit: h, effect: p, closable: y, round: _ } = v;
      return {
        "vi-tag": !0,
        "is-round": _,
        "is-closable": y,
        // hit描边
        "is-hit": h,
        [`vi-tag--${e}`]: e,
        [`vi-tag--${t}`]: t,
        [`vi-tag--${p}`]: p
      };
    }), c = (e) => {
      i("close", e);
    }, b = (e) => {
      i("click", e);
    };
    return (e, t) => !e.disableTransitions && e.visible ? (o(), T(
      "span",
      {
        key: 0,
        class: d(s(r)),
        style: m({ backgroundColor: e.color })
      },
      [
        l("span", w, [
          u(e.$slots, "default")
        ]),
        e.closable ? (o(), a(s(k), {
          key: 0,
          name: "close",
          class: "vi-tag--close",
          onClick: f(c, ["stop"])
        }, null, 8, ["onClick"])) : n("v-if", !0)
      ],
      6
      /* CLASS, STYLE */
    )) : e.disableTransitions && e.visible ? (o(), a(V, {
      key: 1,
      name: "tag-fade",
      appear: ""
    }, {
      default: z(() => [
        l(
          "span",
          {
            class: d(s(r)),
            style: m({ backgroundColor: e.color }),
            onClick: b
          },
          [
            l("span", N, [
              u(e.$slots, "default")
            ]),
            e.closable ? (o(), a(s(k), {
              key: 0,
              name: "close",
              class: "vi-tag--close",
              onClick: f(c, ["stop"])
            }, null, 8, ["onClick"])) : n("v-if", !0)
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    })) : n("v-if", !0);
  }
});
export {
  q as default
};
