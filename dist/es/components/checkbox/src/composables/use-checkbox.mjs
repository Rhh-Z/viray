import { useCheckboxModel as c } from "./use-checkbox-model.mjs";
import { useCheckboxStatus as n } from "./use-checkbox-status.mjs";
import { useCheckboxEvent as r } from "./use-checkbox-event.mjs";
const k = (e, h) => {
  const o = c(e), t = n(e, o), s = r();
  return {
    model: o,
    isChecked: t,
    handleChange: s
  };
};
export {
  k as useCheckbox
};
