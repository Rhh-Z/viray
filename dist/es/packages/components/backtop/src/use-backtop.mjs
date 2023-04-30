import { shallowRef as a, ref as v, onMounted as d } from "vue";
import { throwError as m } from "../../../utils/error.mjs";
import f from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
const E = (t, n, c) => {
  const e = a(), o = a(), l = v(!1), i = f(() => {
    e.value && (l.value = e.value.scrollTop >= t.visibilityHeight);
  }, 250, { trailing: !1 });
  addEventListener("scroll", i);
  const u = (s) => {
    var r;
    (r = e.value) == null || r.scrollTo({ top: 0, behavior: "smooth" }), n("click", s);
  };
  return d(() => {
    o.value = document, e.value = document.documentElement, t.target && (e.value = document.querySelector(t.target) ?? void 0, e.value || m(c, `target does not exist: ${t.target}`), o.value = e.value);
  }), {
    visible: l,
    handleClick: u
  };
};
export {
  E as useBacktop
};
