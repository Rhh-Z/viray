import { UPDATE_MODEL_EVENT as i } from "../../../constants/events.mjs";
import o from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
import t from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNumber.mjs";
import r from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.mjs";
const m = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  indeterminate: Boolean,
  checked: Boolean,
  name: String,
  disabled: Boolean,
  /**
   * @description value of the Checkbox when used inside a `checkbox-group`
   */
  label: [String, Boolean, Number, Object],
  /**
   * @description value of the Checkbox if it's checked
   */
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  /**
   * @description value of the Checkbox if it's not checked
   */
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  isFocused: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    values: ["", "small", "default", "large"],
    default: ""
  },
  border: Boolean
}, u = {
  [i]: (e) => o(e) || t(e) || r(e),
  change: (e) => o(e) || t(e) || r(e)
};
export {
  u as checkboxEmits,
  m as checkboxProps
};
