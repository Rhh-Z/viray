import { ComponentInternalInstance, computed, getCurrentInstance, inject } from "vue";
import { checkboxContextKey } from "../constant";
import type { CheckboxProps } from "../checkbox";
import { ModelType } from "../interface";
import { UPDATE_MODEL_EVENT } from "@viray/constants";

export const useCheckboxModel = (props: CheckboxProps) => {
  // const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance() as ComponentInternalInstance;
  // const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  // const isLimitExceeded = ref(false)
  const useModel = inject<ModelType>(checkboxContextKey, {})

  const model = computed({
    get() {
      return useModel.modelValue ? useModel.modelValue.value : props.modelValue;
    },
    set(val: unknown) {
      if (useModel.modelValue) {
        return useModel.handlerChange?.(val);
      }
      emit(UPDATE_MODEL_EVENT, val);
    }
  })

  return model
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>