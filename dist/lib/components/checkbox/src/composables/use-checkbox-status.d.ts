import { CheckboxProps } from "../checkbox";
import { CheckboxModel } from "./use-checkbox-model";
export declare const useCheckboxStatus: (props: CheckboxProps, model: Pick<CheckboxModel, 'value'>) => import("vue").ComputedRef<any>;
export declare type CheckboxStatus = ReturnType<typeof useCheckboxStatus>;
