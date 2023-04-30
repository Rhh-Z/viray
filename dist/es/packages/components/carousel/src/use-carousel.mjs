import { getCurrentInstance as y, ref as E, computed as C, watch as H, unref as n } from "vue";
import s from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const h = 500, L = (t, u) => {
  const v = y(), a = v.slots.default && v.slots.default(), e = E(0), o = C(() => e.value - 1 < 0 ? a.length - 1 : e.value - 1), f = (l) => {
    e.value = l;
  }, i = () => {
    e.value === a.length - 1 && (e.value = -1), e.value++, u("change", n(e), n(o));
  }, d = (l) => {
    t.trigger === "hover" && l !== e.value && (e.value = l, c()), u("change", n(e), n(o));
  }, g = (l) => {
    t.trigger === "click" && l !== e.value && (e.value = l, c()), u("change", n(e), n(o));
  }, I = s(() => {
    c(), e.value <= 0 && (e.value = a == null ? void 0 : a.length), e.value--, u("change", n(e), n(o));
  }, h), w = s(() => {
    c(), e.value === (a == null ? void 0 : a.length) - 1 && (e.value = -1), e.value++, u("change", n(e), n(o));
  }, h);
  let r = 0;
  const T = () => {
    r && (window.clearInterval(r), r = 0);
  }, c = () => {
    t.autoplay && t.pauseOnHover && T();
  }, x = () => {
    r || t.autoplay && t.pauseOnHover && (r = window.setInterval(i, t.interval));
  };
  return H(
    () => t.autoplay,
    () => {
      t.autoplay && (r = window.setInterval(i, t.interval));
    },
    { immediate: !0 }
  ), {
    handleIndicatorEnter: d,
    handleIndicatorClick: g,
    setIndex: f,
    activeIndex: e,
    handleMouseLeave: x,
    throttlePrev: I,
    throttleNext: w
  };
};
export {
  L as useCarousel
};
