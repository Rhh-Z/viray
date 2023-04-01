import { isString as t, isNumber as o, isBoolean as i } from "../../../utils/common.mjs";
import { componentSizes as r } from "../../../constants/size.mjs";
import { UPDATE_MODEL_EVENT as a, CHANGE_EVENT as d } from "../../../constants/events.mjs";
const m = {
  /**
    * @description binding value
    */
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  /**
    * @description value of the Checkbox when used inside a `checkbox-group`
    */
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  /**
   * @description if the Checkbox is checked
   */
  checked: {
    type: Boolean,
    default: !1
  },
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: void 0
  },
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
  /**
   * @description input id
   */
  id: {
    type: String,
    default: void 0
  },
  /**
   * @description whether to add a border around Checkbox
   */
  border: Boolean,
  /**
   * @description size of the Checkbox
   */
  size: {
    type: String,
    default: () => "default",
    validator(e) {
      return r.includes(e);
    }
  },
  /**
    * @description whether to trigger form validation
    */
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, f = {
  [a]: (e) => t(e) || o(e) || i(e),
  [d]: (e) => t(e) || o(e) || i(e)
};
export {
  f as checkboxEmits,
  m as checkboxProps
};
