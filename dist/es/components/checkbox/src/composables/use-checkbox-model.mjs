import { ref as n, getCurrentInstance as l, inject as c, computed as u } from "vue";
import { checkboxContextKey as a } from "../constant.mjs";
import { UPDATE_MODEL_EVENT as d } from "../../../../constants/events.mjs";
const V = (r) => {
  n(!1);
  const { emit: m } = l(), e = c(a, {});
  return u({
    get() {
      return e.modelValue ? e.modelValue.value : r.modelValue;
    },
    set(o) {
      var t;
      if (e.modelValue)
        return (t = e.handlerChange) == null ? void 0 : t.call(e, o);
      m(d, o);
    }
  });
};
export {
  V as useCheckboxModel
};
