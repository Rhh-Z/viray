import { ComponentInternalInstance } from "vue";
import { CheckboxProps } from "../checkbox";
import { useCheckboxDisabled } from "./use-checkbox-disabled";
import { useCheckboxEvent } from "./use-checkbox-event";
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from "./use-checkbox-status";

export const useCheckbox = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots']
) => {
  const { model, isLimitExceeded } = useCheckboxModel(props)

  const { hasOwnLabel, isChecked, isFocused, checkboxSize } = useCheckboxStatus(props, slots, { model })

  const { isDisabled } = useCheckboxDisabled(props, { model, isChecked })

  const { handleChange } = useCheckboxEvent(props, { isLimitExceeded })

  return {
    model,
    hasOwnLabel,
    isChecked,
    isFocused,
    isDisabled,
    checkboxSize,
    handleChange
  }
}