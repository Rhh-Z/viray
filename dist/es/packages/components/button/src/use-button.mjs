import { inject as f, computed as d } from "vue";
import { buttonGroupContextKey as l } from "../../button-group/src/constant.mjs";
function m(i) {
  const e = f(l, void 0), s = d(() => (e == null ? void 0 : e.size) || i.size), r = d(() => i.type !== "default" ? i.type : e != null && e.type ? e == null ? void 0 : e.type : "default"), c = d(() => (e == null ? void 0 : e.disabled) || i.disabled);
  return {
    _size: s,
    _type: r,
    _disabled: c
  };
}
export {
  m as useButton
};
