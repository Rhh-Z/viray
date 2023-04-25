import { UPDATE_MODEL_EVENT as r } from "../../../../constants/events.mjs";
import { ref as a, getCurrentInstance as u, inject as v, computed as o } from "vue";
import { checkboxGroupContextKey as E } from "../constant.mjs";
import g from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.mjs";
import C from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.mjs";
const T = (d) => {
  const s = a(!1), { emit: f } = u(), e = v(E, void 0), m = o(() => C(e) === !1), l = a(!1);
  return {
    model: o({
      get() {
        var t;
        return m.value ? (t = e == null ? void 0 : e.modelValue) == null ? void 0 : t.value : d.modelValue ?? s.value;
      },
      set(t) {
        var n, i;
        m.value && g(t) ? (l.value = ((n = e == null ? void 0 : e.max) == null ? void 0 : n.value) !== void 0 && t.length > (e == null ? void 0 : e.max.value), l.value === !1 && ((i = e == null ? void 0 : e.changeEvent) == null || i.call(e, t))) : (f(r, t), s.value = t);
      }
    }),
    isLimitExceeded: l
  };
};
export {
  T as useCheckboxModel
};
