import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from "packages/constants";
import { ExtractPropTypes, PropType } from "vue";
import { CheckboxValueType } from "packages/components/checkbox/src/checkbox";
import { isArray } from '@viray/utils';

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export type CheckboxGroupModelValue = Array<string> | Array<number>;

export const checkboxGroupProps = {
  disabled: Boolean,
  tag: {
    type: String,
    default: 'div',
  },
  min: Number,
  max: Number,
  size: String,
  modelValue: {
    type: Array as PropType<CheckboxGroupModelValue>,
    default: () => []
  }
}


export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  [CHANGE_EVENT]: (val: CheckboxValueType[]) => isArray(val)
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = ExtractPropTypes<typeof checkboxGroupEmits>