import { defineComponent as v, useCssVars as $, ref as E, computed as l, watch as k, openBlock as a, createElementBlock as m, normalizeClass as y, unref as n, normalizeStyle as S, createBlock as z, renderSlot as C } from "vue";
import { avatarProps as g, avatarEmits as N } from "./avatar.mjs";
import "../../../theme-chalk/src/avatar.css";
import { ViIcon as w } from "../../icon/index.mjs";
import B from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
import O from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.mjs";
const V = ["src", "alt", "srcset"], T = /* @__PURE__ */ v({
  __name: "avatar",
  props: g,
  emits: N,
  setup(p, { emit: f }) {
    const t = p;
    $((r) => ({
      "5e9f4473-fit": r.fit
    })), defineOptions({ name: "ViAvatar" });
    const e = "vi-avatar", o = E(!1), u = l(() => {
      const { size: r, icon: i, shape: c } = t, s = [e];
      return B(r) && s.push(`${e}--${r}`), i && s.push(`${e}--icon`), c && s.push(`${e}--${c}`), s;
    }), h = l(() => {
      const { size: r } = t;
      return O(r) ? {
        width: `${r}px`,
        height: `${r}px`
      } : {
        width: r,
        height: r
      };
    });
    k(
      () => t.src,
      () => o.value = !1
    );
    const d = (r) => {
      o.value = !0, f("error", r);
    };
    return (r, i) => (a(), m(
      "span",
      {
        class: y(n(u)),
        style: S(n(h))
      },
      [
        (r.src || r.srcSet) && !o.value ? (a(), m("img", {
          key: 0,
          src: r.src,
          alt: r.alt,
          srcset: r.srcSet,
          onError: d
        }, null, 40, V)) : r.icon ? (a(), z(n(w), {
          key: 1,
          name: r.icon
        }, null, 8, ["name"])) : C(r.$slots, "default", { key: 2 })
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  T as default
};
