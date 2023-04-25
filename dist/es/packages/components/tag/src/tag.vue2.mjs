import { defineComponent as _, computed as $, openBlock as o, createElementBlock as z, normalizeClass as d, unref as s, normalizeStyle as m, createElementVNode as l, renderSlot as u, createBlock as a, withModifiers as f, createCommentVNode as n, Transition as B, withCtx as E } from "vue";
import { tagProps as T, tagEmits as V } from "./tag.mjs";
import { ViIcon as k } from "../../icon/index.mjs";
import "../../../theme-chalk/src/tag.css";
const w = { class: "vi-tag__content" }, N = { class: "vi-tag__content" }, j = /* @__PURE__ */ _({
  __name: "tag",
  props: T,
  emits: V,
  setup(g, { emit: i }) {
    const C = g, r = $(() => {
      const { size: e, type: t, hit: b, effect: p, closable: h, round: y } = C;
      return {
        "vi-tag": !0,
        "is-round": y,
        "is-closable": h,
        // hit描边
        "is-hit": b,
        [`vi-tag--${e}`]: e,
        [`vi-tag--${t}`]: t,
        [`vi-tag--${p}`]: p
      };
    }), c = (e) => {
      i("close", e);
    }, v = (e) => {
      i("click", e);
    };
    return (e, t) => !e.disableTransitions && e.visible ? (o(), z(
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
    )) : e.disableTransitions && e.visible ? (o(), a(B, {
      key: 1,
      name: "tag-fade",
      appear: ""
    }, {
      default: E(() => [
        l(
          "span",
          {
            class: d(s(r)),
            style: m({ backgroundColor: e.color }),
            onClick: v
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
  j as default
};
