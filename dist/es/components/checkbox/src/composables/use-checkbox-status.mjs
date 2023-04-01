import { computed as u } from "vue";
import { isBoolean as l, isArray as o } from "../../../../utils/common.mjs";
const c = (r, t) => u(() => {
  const e = t.value;
  return l(e) ? e : o(e) ? e.includes(r.label) : e != null ? e === r.trueLabel : !!e;
});
export {
  c as useCheckboxStatus
};
