import { useCheckboxDisabled as d } from "./use-checkbox-disabled.mjs";
import { useCheckboxEvent as r } from "./use-checkbox-event.mjs";
import { useCheckboxModel as u } from "./use-checkbox-model.mjs";
import { useCheckboxStatus as x } from "./use-checkbox-status.mjs";
const f = (e, c) => {
  const { model: o, isLimitExceeded: t } = u(e), { hasOwnLabel: i, isChecked: s, isFocused: h, checkboxSize: m } = x(e, c, { model: o }), { isDisabled: n } = d(e, { model: o, isChecked: s }), { handleChange: b } = r(e, { isLimitExceeded: t });
  return {
    model: o,
    hasOwnLabel: i,
    isChecked: s,
    isFocused: h,
    isDisabled: n,
    checkboxSize: m,
    handleChange: b
  };
};
export {
  f as useCheckbox
};
