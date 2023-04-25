import { isArray, isBoolean, isEqual, isObject } from "lodash-unified";
import { ComponentInternalInstance, computed, ref, toRaw, inject } from "vue";
import { CheckboxProps } from "../checkbox";
import { checkboxGroupContextKey } from "../constant";
import { CheckboxModel } from './use-checkbox-model'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isFocused = ref(false)
  const isChecked = computed(() => {
    const value = model.value
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      if (isObject(props.label)) {
        return value.map(toRaw).some((o) => isEqual(o, props.label))
      } else {
        return value.map(toRaw).includes(props.label)
      }
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  const checkboxSize = computed(() => checkboxGroup?.size.value || props.size)

  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label)
  })

  return {
    hasOwnLabel,
    isFocused,
    checkboxSize,
    isChecked
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>