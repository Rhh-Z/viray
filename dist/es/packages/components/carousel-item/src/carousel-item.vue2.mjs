import { defineComponent as n, ref as a, inject as s, computed as i, openBlock as m, createElementBlock as c, normalizeStyle as f, unref as u, renderSlot as p } from "vue";
import "../../../theme-chalk/src/carousel-item.css";
import { carouselContextKey as _ } from "../../carousel/src/constants.mjs";
const k = /* @__PURE__ */ n({
  __name: "carousel-item",
  setup(d) {
    defineOptions({ name: "ViCarouselItem" });
    const r = a(), { activeIndex: o } = s(_), l = i(() => {
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
        style: f(u(l)),
        ref_key: "item",
        ref: r
      },
      [
        p(t.$slots, "default")
      ],
      4
      /* STYLE */
    ));
  }
});
export {
  k as default
};
