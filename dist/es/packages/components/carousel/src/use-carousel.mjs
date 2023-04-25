import { getCurrentInstance as m, ref as C, computed as H, watch as M, unref as a } from "vue";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { exports as i } from "../../../../_virtual/lodash.mjs";
const h = 500, N = (t, r) => {
  const v = m(), n = v.slots.default && v.slots.default(), e = C(0), u = H(() => e.value - 1 < 0 ? n.length - 1 : e.value - 1), f = (l) => {
    e.value = l;
  }, s = () => {
    e.value === n.length - 1 && (e.value = -1), e.value++, r("change", a(e), a(u));
  }, d = (l) => {
    t.trigger === "hover" && l !== e.value && (e.value = l, c()), r("change", a(e), a(u));
  }, g = (l) => {
    t.trigger === "click" && l !== e.value && (e.value = l, c()), r("change", a(e), a(u));
  }, I = () => {
    c(), e.value <= 0 && (e.value = n == null ? void 0 : n.length), e.value--, r("change", a(e), a(u));
  }, w = i.throttle(I, h), x = () => {
    c(), e.value === (n == null ? void 0 : n.length) - 1 && (e.value = -1), e.value++, r("change", a(e), a(u));
  }, T = i.throttle(x, h);
  let o = 0;
  const y = () => {
    o && (window.clearInterval(o), o = 0);
  }, c = () => {
    t.autoplay && t.pauseOnHover && y();
  }, E = () => {
    o || t.autoplay && t.pauseOnHover && (o = window.setInterval(s, t.interval));
  };
  return M(
    () => t.autoplay,
    () => {
      t.autoplay && (o = window.setInterval(s, t.interval));
    },
    { immediate: !0 }
  ), {
    handleIndicatorEnter: d,
    handleIndicatorClick: g,
    setIndex: f,
    activeIndex: e,
    handleMouseLeave: E,
    throttlePrev: w,
    throttleNext: T
  };
};
export {
  N as useCarousel
};
