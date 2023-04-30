import { defineComponent as p, useCssVars as $, ref as E, computed as l, watch as k, openBlock as a, createElementBlock as m, normalizeClass as y, unref as n, normalizeStyle as S, createBlock as z, renderSlot as C } from "vue";
import { avatarProps as g, avatarEmits as N } from "./avatar.mjs";
import "../../../theme-chalk/src/avatar.css";
import { ViIcon as w } from "../../icon/index.mjs";
import B from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
import V from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.mjs";
const _ = ["src", "alt", "srcset"], A = p({ name: "ViAvatar" }), T = /* @__PURE__ */ p({
  ...A,
  props: g,
  emits: N,
  setup(u, { emit: f }) {
    const t = u;
    $((r) => ({
      "5e9f4473-fit": r.fit
    }));
    const s = "vi-avatar", o = E(!1), h = l(() => {
      const { size: r, icon: i, shape: c } = t, e = [s];
      return B(r) && e.push(`${s}--${r}`), i && e.push(`${s}--icon`), c && e.push(`${s}--${c}`), e;
    }), d = l(() => {
      const { size: r } = t;
      return V(r) ? {
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
    const v = (r) => {
      o.value = !0, f("error", r);
    };
    return (r, i) => (a(), m(
      "span",
      {
        class: y(n(h)),
        style: S(n(d))
      },
      [
        (r.src || r.srcSet) && !o.value ? (a(), m("img", {
          key: 0,
          src: r.src,
          alt: r.alt,
          srcset: r.srcSet,
          onError: v
        }, null, 40, _)) : r.icon ? (a(), z(n(w), {
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
