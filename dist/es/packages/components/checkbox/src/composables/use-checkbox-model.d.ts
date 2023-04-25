import { CheckboxProps } from '../checkbox';
export declare const useCheckboxModel: (props: CheckboxProps) => {
    model: import("vue").WritableComputedRef<any>;
    isLimitExceeded: import("vue").Ref<boolean>;
};
export declare type CheckboxModel = ReturnType<typeof useCheckboxModel>;
