import { defineComponent as a, ref as n, inject as s, computed as i, openBlock as m, createElementBlock as c, normalizeStyle as f, unref as u, renderSlot as _ } from "vue";
import "../../../theme-chalk/src/carousel-item.css";
import { carouselContextKey as p } from "../../carousel/src/constants.mjs";
const k = /* @__PURE__ */ a({
  __name: "carousel-item",
  setup(d) {
    const r = n(), { activeIndex: l } = s(p), o = i(() => {
      if (r.value) {
        let t = Array.from(r.value.parentNode.children);
        t = t.filter((e) => e.className === "vi-carousel__item");
        for (let e = 0; e < t.length; e++)
          l.value === e ? t[e].style.transform = "translateX(0%)" : t[e].style.transform = `translateX(${e + 1}00%)`;
      }
      return {};
    });
    return (t, e) => (m(), c(
      "div",
      {
        class: "vi-carousel__item",
        style: f(u(o)),
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
  k as default
};
