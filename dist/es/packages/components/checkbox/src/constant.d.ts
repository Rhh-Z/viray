import type { InjectionKey, ToRefs, WritableComputedRef } from 'vue';
import { CheckboxGroupProps } from '@viray/components/checkbox-group/src/checkbox-group';
declare type CheckboxGroupContext = {
    modelValue?: WritableComputedRef<any>;
    changeEvent?: (...args: any) => any;
} & ToRefs<Pick<CheckboxGroupProps, 'size' | 'min' | 'max' | 'disabled'>>;
export declare const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext>;
export {};
