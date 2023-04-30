import { defineComponent as g, useSlots as B, computed as m, provide as w, openBlock as f, createElementBlock as p, normalizeClass as i, unref as t, normalizeStyle as k, createElementVNode as l, createCommentVNode as y, createVNode as M, renderSlot as L, Fragment as P, renderList as A } from "vue";
import { carouselProps as F, carouselEmits as K } from "./carousel.mjs";
import "../../../theme-chalk/src/carousel.css";
import { ViIcon as b } from "../../icon/index.mjs";
import { useCarousel as j } from "./use-carousel.mjs";
import { carouselContextKey as q } from "./constants.mjs";
const x = ["onMouseenter", "onClick"], D = g({ name: "ViCarousel" }), T = /* @__PURE__ */ g({
  ...D,
  props: F,
  emits: K,
  setup(h, { emit: E }) {
    const r = h, e = "vi-carousel", _ = B(), $ = _.default && _.default(), {
      handleIndicatorEnter: I,
      handleIndicatorClick: N,
      throttleNext: v,
      throttlePrev: C,
      activeIndex: u,
      handleMouseLeave: s
    } = j(r, E), V = m(() => ({
      [`${e}__indicators`]: !0,
      [`${e}__indicators--${r.direction}`]: r.direction
    })), S = m(() => ({
      "vi-carousel": !0,
      [`vi-carousel--${r.direction}`]: r.direction,
      [`is-${r.arrow}`]: r.arrow
    })), z = m(() => ({
      [`${e}__indicator`]: !0,
      [`${e}__indicator--${r.direction}`]: r.direction
    }));
    return w(q, {
      items: $,
      activeIndex: u
    }), w("activeIndex", u), (c, o) => (f(), p(
      "div",
      {
        class: i(t(S)),
        ref: "root",
        style: k({ width: c.width })
      },
      [
        l(
          "div",
          {
            ref: "container",
            class: i(`${e}__container`),
            style: k({ height: c.height })
          },
          [
            y(" arrow left "),
            l(
              "button",
              {
                type: "button",
                class: i(`${e}__arrow ${e}__arrow--left`),
                onClick: o[0] || (o[0] = //@ts-ignore
                (...n) => t(C) && t(C)(...n)),
                onMouseleave: o[1] || (o[1] = //@ts-ignore
                (...n) => t(s) && t(s)(...n))
              },
              [
                M(t(b), { name: "arrowleft" })
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            y(" arrow right "),
            l(
              "button",
              {
                type: "button",
                class: i(`${e}__arrow ${e}__arrow--right`),
                onClick: o[2] || (o[2] = //@ts-ignore
                (...n) => t(v) && t(v)(...n)),
                onMouseleave: o[3] || (o[3] = //@ts-ignore
                (...n) => t(s) && t(s)(...n))
              },
              [
                M(t(b), { name: "arrowright" })
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            L(c.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        ),
        l(
          "ul",
          {
            class: i(t(V))
          },
          [
            (f(!0), p(
              P,
              null,
              A(t($), (n, a) => (f(), p("li", {
                key: a,
                class: i([t(z), t(u) === a ? "is-active" : ""]),
                ref_for: !0,
                ref: "indicator",
                onMouseenter: (d) => t(I)(a),
                onClick: (d) => t(N)(a),
                onMouseleave: o[4] || (o[4] = //@ts-ignore
                (...d) => t(s) && t(s)(...d))
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
              ], 42, x))),
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
  T as default
};
