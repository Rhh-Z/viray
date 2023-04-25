import { ComponentInternalInstance } from "vue";
import { CheckboxProps } from "../checkbox";
export declare const useCheckbox: (props: CheckboxProps, slots: ComponentInternalInstance['slots']) => {
    model: import("vue").WritableComputedRef<any>;
    hasOwnLabel: import("vue").ComputedRef<boolean>;
    isChecked: import("vue").ComputedRef<boolean>;
    isFocused: import("vue").Ref<boolean>;
    isDisabled: import("vue").ComputedRef<boolean>;
    checkboxSize: import("vue").ComputedRef<string>;
    handleChange: (e: Event) => void;
};
