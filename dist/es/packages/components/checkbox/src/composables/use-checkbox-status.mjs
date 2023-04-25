import { inject as m, ref as f, computed as r, toRaw as l } from "vue";
import { checkboxGroupContextKey as b } from "../constant.mjs";
import d from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.mjs";
import h from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.mjs";
import v from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.mjs";
import x from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.mjs";
const y = (t, i, { model: s }) => {
  const o = m(b, void 0), a = f(!1), n = r(() => {
    const e = s.value;
    return v(e) ? e : x(e) ? d(t.label) ? e.map(l).some((c) => h(c, t.label)) : e.map(l).includes(t.label) : e != null ? e === t.trueLabel : !!e;
  }), u = r(() => (o == null ? void 0 : o.size.value) || t.size);
  return {
    hasOwnLabel: r(() => !!(i.default || t.label)),
    isFocused: a,
    checkboxSize: u,
    isChecked: n
  };
};
export {
  y as useCheckboxStatus
};
