import { defineComponent as l, ref as n, inject as s, computed as i, openBlock as m, createElementBlock as c, normalizeStyle as f, unref as u, renderSlot as _ } from "vue";
import "../../../theme-chalk/src/carousel-item.css";
import { carouselContextKey as p } from "../../carousel/src/constants.mjs";
const d = l({ name: "ViCarouselItem" }), x = /* @__PURE__ */ l({
  ...d,
  setup(y) {
    const r = n(), { activeIndex: o } = s(p), a = i(() => {
      if (r.value) {
        let t = Array.from(r.value.parentNode.children);
        t = t.filter((e) => e.className === "vi-carousel__item");
        for (let e = 0; e < t.length; e++)
          o.value === e ? t[e].style.transform = "translateX(0%)" : t[e].style.transform = `translateX(${e + 1}00%)`;
      }
      return {};
    });
    return (t, e) => (m(), c(
      "div",
      {
        class: "vi-carousel__item",
        style: f(u(a)),
        ref_key: "item",
        ref: r
      },
      [
        _(t.$slots, "default")
      ],
      4
      /* STYLE */
    ));
  }
});
export {
  x as default
};
