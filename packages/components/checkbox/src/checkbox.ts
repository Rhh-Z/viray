import { UPDATE_MODEL_EVENT } from "@viray/constants"
import { isBoolean, isNumber, isString } from "lodash-unified"
import { ExtractPropTypes } from "vue"

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
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
    default: undefined,
  },
  /**
   * @description value of the Checkbox if it's not checked
   */
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  id: {
    type: String,
    default: undefined,
  },
  controls: {
    type: String,
    default: undefined,
  },
  isFocused: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    values: ['', 'small', 'default', 'large'],
    default: ''
  },
  border: Boolean
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>