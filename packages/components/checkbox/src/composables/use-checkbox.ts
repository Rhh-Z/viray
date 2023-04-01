import type { ComponentInternalInstance } from "vue";
import { CheckboxProps } from "../checkbox";
import { useCheckboxModel } from "./use-checkbox-model";
import { useCheckboxStatus } from "./use-checkbox-status";
import { useCheckboxEvent } from './use-checkbox-event';

export const useCheckbox = (props: CheckboxProps, slots: ComponentInternalInstance['slots']) => {
  const model = useCheckboxModel(props)
  const isChecked = useCheckboxStatus(props, model)
  const handleChange = useCheckboxEvent();
  return {
    model,
    isChecked,
    handleChange
  }
}