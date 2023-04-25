import { ComponentInternalInstance } from "vue";
import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from './use-checkbox-model';
export declare const useCheckboxStatus: (props: CheckboxProps, slots: ComponentInternalInstance['slots'], { model }: Pick<CheckboxModel, 'model'>) => {
    hasOwnLabel: import("vue").ComputedRef<boolean>;
    isFocused: import("vue").Ref<boolean>;
    checkboxSize: import("vue").ComputedRef<string>;
    isChecked: import("vue").ComputedRef<boolean>;
};
export declare type CheckboxStatus = ReturnType<typeof useCheckboxStatus>;
