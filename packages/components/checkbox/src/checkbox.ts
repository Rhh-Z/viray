import type { ExtractPropTypes, PropType } from 'vue'
import { isBoolean, isNumber, isString } from '@viray/utils/common';
import { ComponentSize, componentSizes } from '@viray/constants/size';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@viray/constants';

export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  /**
    * @description binding value
    */
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined
  },
  /**
    * @description value of the Checkbox when used inside a `checkbox-group`
    */
  label: {
    type: [String, Boolean, Number, Object],
    default: undefined
  },
  indeterminate: Boolean,
  disabled: Boolean,
  /**
   * @description if the Checkbox is checked
   */
  checked: {
    type: Boolean,
    default: false,
  },
  /**
   * @description native 'name' attribute
   */
  name: {
    type: String,
    default: undefined,
  },
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
  /**
   * @description input id
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description whether to add a border around Checkbox
   */
  border: Boolean,
  /**
   * @description size of the Checkbox
   */
  size: {
    type: String as PropType<ComponentSize>,
    default: (): string => "default",
    validator(value: ComponentSize) {
      return componentSizes.includes(value)
    }
  },
  /**
    * @description whether to trigger form validation
    */
  validateEvent: {
    type: Boolean,
    default: true,
  },
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = ExtractPropTypes<typeof checkboxEmits>
