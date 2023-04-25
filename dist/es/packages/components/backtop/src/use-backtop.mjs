import { shallowRef as a, ref as m, onMounted as d } from "vue";
import { throwError as f } from "../../../utils/error.mjs";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { exports as h } from "../../../../_virtual/lodash.mjs";
const b = (e, n, i) => {
  const t = a(), o = a(), l = m(!1), c = () => {
    t.value && (l.value = t.value.scrollTop >= e.visibilityHeight);
  }, s = h.throttle(c, 250, { trailing: !1 });
  addEventListener("scroll", () => {
    s();
  });
  const u = (v) => {
    var r;
    (r = t.value) == null || r.scrollTo({ top: 0, behavior: "smooth" }), n("click", v);
  };
  return d(() => {
    o.value = document, t.value = document.documentElement, e.target && (t.value = document.querySelector(e.target) ?? void 0, t.value || f(i, `target does not exist: ${e.target}`), o.value = t.value);
  }), {
    visible: l,
    handleClick: u
  };
};
export {
  b as useBacktop
};
