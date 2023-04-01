import type { ComponentInternalInstance } from "vue";
import { CheckboxProps } from "../checkbox";
export declare const useCheckbox: (props: CheckboxProps, slots: ComponentInternalInstance['slots']) => {
    model: import("vue").WritableComputedRef<any>;
    isChecked: import("vue").ComputedRef<any>;
    handleChange: (e: any) => void;
};
