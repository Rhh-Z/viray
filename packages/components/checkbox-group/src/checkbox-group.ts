import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from "@viray/constants";
import { ExtractPropTypes } from "vue";
import { CheckboxValueType } from "packages/components/checkbox/src/checkbox";
import { definePropType, isArray } from '@viray/utils';
import checkboxGroup from './checkbox-group.vue';

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
  size: {
    type: String,
    values: ['small', '', 'default', 'large'],
    default: ''
  },
  modelValue: {
    type: definePropType<CheckboxGroupValueType>(Array),
    default: () => []
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
}


export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  [CHANGE_EVENT]: (val: CheckboxValueType[]) => isArray(val)
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = ExtractPropTypes<typeof checkboxGroupEmits>
export type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>