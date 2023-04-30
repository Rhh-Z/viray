import { defineComponent as z, useSlots as B, computed as m, provide as w, openBlock as f, createElementBlock as p, normalizeClass as i, unref as e, normalizeStyle as k, createElementVNode as l, createCommentVNode as y, createVNode as M, renderSlot as L, Fragment as P, renderList as A } from "vue";
import { carouselProps as F, carouselEmits as K } from "./carousel.mjs";
import "../../../theme-chalk/src/carousel.css";
import { ViIcon as b } from "../../icon/index.mjs";
import { useCarousel as O } from "./use-carousel.mjs";
import { carouselContextKey as j } from "./constants.mjs";
const q = ["onMouseenter", "onClick"], R = /* @__PURE__ */ z({
  __name: "carousel",
  props: F,
  emits: K,
  setup(g, { emit: h }) {
    const r = g;
    defineOptions({ name: "ViCarousel" });
    const t = "vi-carousel", $ = B(), v = $.default && $.default(), {
      handleIndicatorEnter: E,
      handleIndicatorClick: I,
      throttleNext: _,
      throttlePrev: C,
      activeIndex: u,
      handleMouseLeave: s
    } = O(r, h), N = m(() => ({
      [`${t}__indicators`]: !0,
      [`${t}__indicators--${r.direction}`]: r.direction
    })), V = m(() => ({
      "vi-carousel": !0,
      [`vi-carousel--${r.direction}`]: r.direction,
      [`is-${r.arrow}`]: r.arrow
    })), S = m(() => ({
      [`${t}__indicator`]: !0,
      [`${t}__indicator--${r.direction}`]: r.direction
    }));
    return w(j, {
      items: v,
      activeIndex: u
    }), w("activeIndex", u), (c, o) => (f(), p(
      "div",
      {
        class: i(e(V)),
        ref: "root",
        style: k({ width: c.width })
      },
      [
        l(
          "div",
          {
            ref: "container",
            class: i(`${t}__container`),
            style: k({ height: c.height })
          },
          [
            y(" arrow left "),
            l(
              "button",
              {
                type: "button",
                class: i(`${t}__arrow ${t}__arrow--left`),
                onClick: o[0] || (o[0] = //@ts-ignore
                (...n) => e(C) && e(C)(...n)),
                onMouseleave: o[1] || (o[1] = //@ts-ignore
                (...n) => e(s) && e(s)(...n))
              },
              [
                M(e(b), { name: "arrowleft" })
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ),
            y(" arrow right "),
            l(
              "button",
              {
                type: "button",
                class: i(`${t}__arrow ${t}__arrow--right`),
                onClick: o[2] || (o[2] = //@ts-ignore
                (...n) => e(_) && e(_)(...n)),
                onMouseleave: o[3] || (o[3] = //@ts-ignore
                (...n) => e(s) && e(s)(...n))
              },
              [
                M(e(b), { name: "arrowright" })
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
            class: i(e(N))
          },
          [
            (f(!0), p(
              P,
              null,
              A(e(v), (n, a) => (f(), p("li", {
                key: a,
                class: i([e(S), e(u) === a ? "is-active" : ""]),
                ref_for: !0,
                ref: "indicator",
                onMouseenter: (d) => e(E)(a),
                onClick: (d) => e(I)(a),
                onMouseleave: o[4] || (o[4] = //@ts-ignore
                (...d) => e(s) && e(s)(...d))
              }, [
                l(
                  "button",
                  {
                    class: i(`${t}__button`)
                  },
                  null,
                  2
                  /* CLASS */
                )
              ], 42, q))),
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
  R as default
};
