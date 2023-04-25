import { getCurrentInstance } from "vue";
import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "./use-checkbox-model";

export const useCheckboxEvent = (
  props: CheckboxProps,
  {
    isLimitExceeded,
  }: Pick<CheckboxModel, | 'isLimitExceeded'>
) => {

  const { emit } = getCurrentInstance()!

  function getLabeledValue(value: string | number | boolean) {
    return value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false
  }

  function handleChange(e: Event) {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit('change', getLabeledValue(target.checked), e)
  }

  return {
    handleChange
  }
}