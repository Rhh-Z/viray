import { defineComponent as y, useSlots as L, computed as f, provide as w, openBlock as p, createElementBlock as _, normalizeClass as i, unref as t, normalizeStyle as b, createElementVNode as l, createCommentVNode as g, createVNode as h, renderSlot as P, Fragment as A, renderList as F } from "vue";
import { carouselProps as K, carouselEmits as j } from "./carousel.mjs";
import "../../../theme-chalk/src/carousel.css";
import { ViIcon as k } from "../../icon/index.mjs";
import { useCarousel as q } from "./use-carousel.mjs";
import { carouselContextKey as x } from "./constants.mjs";
const D = ["onMouseenter", "onClick"], G = y({
  name: "ViCarousel"
}), U = /* @__PURE__ */ y({
  ...G,
  props: K,
  emits: j,
  setup(M, { emit: N }) {
    const o = M, e = "vi-carousel", u = L();
    function I() {
      return u.default().length === 1 ? u.default()[0].children : u.default();
    }
    const $ = I(), {
      handleIndicatorEnter: E,
      handleIndicatorClick: V,
      throttleNext: v,
      throttlePrev: C,
      activeIndex: c,
      handleMouseLeave: s
    } = q(o, N), S = f(() => ({
      [`${e}__indicators`]: !0,
      [`${e}__indicators--${o.direction}`]: o.direction
    })), z = f(() => ({
      "vi-carousel": !0,
      [`vi-carousel--${o.direction}`]: o.direction,
      [`is-${o.arrow}`]: o.arrow
    })), B = f(() => ({
      [`${e}__indicator`]: !0,
      [`${e}__indicator--${o.direction}`]: o.direction
    }));
    return w(x, {
      items: $,
      activeIndex: c
    }), w("activeIndex", c), (d, r) => (p(), _(
      "div",
      {
        class: i(t(z)),
        ref: "root",
        style: b({ width: d.width })
      },
      [
        l(
          "div",
          {
            ref: "container",
            class: i(`${e}__container`),
            style: b({ height: d.height })
          },
          [
            g(" arrow left "),
            l(
              "button",
              {
                type: "button",
                class: i(`${e}__arrow ${e}__arrow--left`),
                onClick: r[0] || (r[0] = //@ts-ignore
                (...n) => t(C) && t(C)(...n)),
                onMouseleave: r[1] || (r[1] = //@ts-ignore
                (...n) => t(s) && t(s)(...n))
              },
              [
                h(t(k), { name: "arrowleft" })
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            g(" arrow right "),
            l(
              "button",
              {
                type: "button",
                class: i(`${e}__arrow ${e}__arrow--right`),
                onClick: r[2] || (r[2] = //@ts-ignore
                (...n) => t(v) && t(v)(...n)),
                onMouseleave: r[3] || (r[3] = //@ts-ignore
                (...n) => t(s) && t(s)(...n))
              },
              [
                h(t(k), { name: "arrowright" })
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            P(d.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        ),
        l(
          "ul",
          {
            class: i(t(S))
          },
          [
            (p(!0), _(
              A,
              null,
              F(t($), (n, a) => (p(), _("li", {
                key: a,
                class: i([t(B), t(c) === a ? "is-active" : ""]),
                ref_for: !0,
                ref: "indicator",
                onMouseenter: (m) => t(E)(Number(a)),
                onClick: (m) => t(V)(Number(a)),
                onMouseleave: r[4] || (r[4] = //@ts-ignore
                (...m) => t(s) && t(s)(...m))
              }, [
                l(
                  "button",
                  {
                    class: i(`${e}__button`)
                  },
                  null,
                  2
                  /* CLASS */
                )
              ], 42, D))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  U as default
};
