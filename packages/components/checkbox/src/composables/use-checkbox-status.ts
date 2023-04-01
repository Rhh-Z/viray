import { computed } from "vue";
import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "./use-checkbox-model";
import { isArray, isBoolean } from '@viray/utils';

export const useCheckboxStatus = (
  props: CheckboxProps,
  model: Pick<CheckboxModel, 'value'>
) => {
  // const checkboxGroup = inject()
  // const isFocused = ref(false)

  const isChecked = computed(() => {
    const value = model.value
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      return value.includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  return isChecked
}


export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>