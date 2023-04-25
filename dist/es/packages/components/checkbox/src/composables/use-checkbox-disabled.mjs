import { inject as v, computed as d } from "vue";
import { checkboxGroupContextKey as o } from "../constant.mjs";
import r from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.mjs";
const j = (u, {
  model: t,
  isChecked: i
}) => {
  const e = v(o, void 0), n = d(() => {
    var l, m;
    const a = (l = e == null ? void 0 : e.max) == null ? void 0 : l.value, s = (m = e == null ? void 0 : e.min) == null ? void 0 : m.value;
    return !r(a) && t.value.length >= a && !i.value || !r(s) && t.value.length <= s && i.value;
  });
  return {
    isDisabled: d(() => (e == null ? void 0 : e.disabled.value) || n.value || u.disabled),
    isLimitDisabled: n
  };
};
export {
  j as useCheckboxDisabled
};
