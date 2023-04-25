import { defineComponent as E, useCssVars as $, ref as k, computed as c, watch as y, openBlock as a, createElementBlock as p, normalizeClass as S, unref as n, normalizeStyle as z, createBlock as C, renderSlot as g } from "vue";
import { avatarProps as N, avatarEmits as w } from "./avatar.mjs";
import "../../../theme-chalk/src/avatar.css";
import { ViIcon as B } from "../../icon/index.mjs";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { exports as m } from "../../../../_virtual/lodash.mjs";
const L = ["src", "alt", "srcset"], I = /* @__PURE__ */ E({
  __name: "avatar",
  props: N,
  emits: w,
  setup(u, { emit: f }) {
    const t = u;
    $((s) => ({
      "5e9f4473-fit": s.fit
    }));
    const r = "vi-avatar", o = k(!1), h = c(() => {
      const { size: s, icon: i, shape: l } = t, e = [r];
      return m.isString(s) && e.push(`${r}--${s}`), i && e.push(`${r}--icon`), l && e.push(`${r}--${l}`), e;
    }), d = c(() => {
      const { size: s } = t;
      return m.isNumber(s) ? {
        width: `${s}px`,
        height: `${s}px`
      } : {
        width: s,
        height: s
      };
    });
    y(
      () => t.src,
      () => o.value = !1
    );
    const v = (s) => {
      o.value = !0, f("error", s);
    };
    return (s, i) => (a(), p(
      "span",
      {
        class: S(n(h)),
        style: z(n(d))
      },
      [
        (s.src || s.srcSet) && !o.value ? (a(), p("img", {
          key: 0,
          src: s.src,
          alt: s.alt,
          srcset: s.srcSet,
          onError: v
        }, null, 40, L)) : s.icon ? (a(), C(n(B), {
          key: 1,
          name: s.icon
        }, null, 8, ["name"])) : g(s.$slots, "default", { key: 2 })
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  I as default
};
