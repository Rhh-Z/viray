import { defineComponent as u, ref as E, computed as n, watch as S, openBlock as i, createElementBlock as m, normalizeClass as k, unref as o, normalizeStyle as p, createBlock as g, renderSlot as z } from "vue";
import { avatarProps as C, avatarEmits as N } from "./avatar.mjs";
import "../../../theme-chalk/src/avatar.css";
import { ViIcon as w } from "../../icon/index.mjs";
import B from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
import _ from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.mjs";
const b = ["src", "alt", "srcset"], A = u({
  name: "ViAvatar"
}), I = /* @__PURE__ */ u({
  ...A,
  props: C,
  emits: N,
  setup(f, { emit: h }) {
    const e = f, t = "vi-avatar", a = E(!1), d = n(() => {
      const { size: r, icon: c, shape: l } = e, s = [t];
      return B(r) && s.push(`${t}--${r}`), c && s.push(`${t}--icon`), l && s.push(`${t}--${l}`), s;
    }), v = n(() => {
      const { size: r } = e;
      return _(r) ? {
        width: `${r}px`,
        height: `${r}px`
      } : {
        width: r,
        height: r
      };
    });
    S(
      () => e.src,
      () => a.value = !1
    );
    const y = (r) => {
      a.value = !0, h("error", r);
    }, $ = n(() => ({
      "object-fit": e.fit
    }));
    return (r, c) => (i(), m(
      "span",
      {
        class: k(o(d)),
        style: p(o(v))
      },
      [
        (r.src || r.srcSet) && !a.value ? (i(), m("img", {
          key: 0,
          src: r.src,
          alt: r.alt,
          srcset: r.srcSet,
          style: p(o($)),
          onError: y
        }, null, 44, b)) : r.icon ? (i(), g(o(w), {
          key: 1,
          name: r.icon
        }, null, 8, ["name"])) : z(r.$slots, "default", { key: 2 })
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  I as default
};
