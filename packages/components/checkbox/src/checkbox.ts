import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from "@viray/constants"
import { isBoolean, isNumber, isString } from "lodash-unified"
import { ExtractPropTypes } from "vue"
import Checkbox from './checkbox.vue';

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined,
  },
  indeterminate: Boolean,
  checked: {
    type: Boolean,
    default: false,
  },
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
  [CHANGE_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxInstance = InstanceType<typeof Checkbox>