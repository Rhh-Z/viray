import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "./use-checkbox-model";
export declare const useCheckboxEvent: (props: CheckboxProps, { isLimitExceeded, }: Pick<CheckboxModel, 'isLimitExceeded'>) => {
    handleChange: (e: Event) => void;
};
