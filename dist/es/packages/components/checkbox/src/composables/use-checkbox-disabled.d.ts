import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "./use-checkbox-model";
import { CheckboxStatus } from "./use-checkbox-status";
export declare const useCheckboxDisabled: (props: CheckboxProps, { model, isChecked, }: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
    isDisabled: import("vue").ComputedRef<boolean>;
    isLimitDisabled: import("vue").ComputedRef<boolean>;
};
export declare type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>;
