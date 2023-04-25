import { isUndefined } from "lodash-unified";
import { computed, inject } from "vue";
import { CheckboxProps } from "../checkbox";
import { checkboxGroupContextKey } from "../constant";
import { CheckboxModel } from "./use-checkbox-model";
import { CheckboxStatus } from "./use-checkbox-status";


export const useCheckboxDisabled = (props: CheckboxProps, {
  model,
  isChecked,
}: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value
    const min = checkboxGroup?.min?.value
    return (
      (!isUndefined(max) && model.value.length >= max && !isChecked.value) ||
      (!isUndefined(min) && model.value.length <= min && isChecked.value)
    )
  })

  const isDisabled = computed(() => {
    return checkboxGroup?.disabled.value || isLimitDisabled.value || props.disabled
  })

  return {
    isDisabled,
    isLimitDisabled
  }
}

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>