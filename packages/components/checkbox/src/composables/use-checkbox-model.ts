import { UPDATE_MODEL_EVENT } from '@viray/constants';
import { isArray, isUndefined } from 'lodash-unified';
import { computed, getCurrentInstance, ref, inject } from 'vue';
import { CheckboxProps } from '../checkbox'
import { checkboxGroupContextKey } from '../constant';

export const useCheckboxModel = (
  props: CheckboxProps
) => {

  const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance()!
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  const isLimitExceeded = ref(false)

  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },
    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val
      }
    }
  })

  return {
    model,
    isLimitExceeded
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>