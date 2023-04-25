import { ExtractPropTypes } from "vue";
import { CheckboxValueType } from "packages/components/checkbox/src/checkbox";
import checkboxGroup from './checkbox-group.vue';
export declare type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[];
export declare type CheckboxGroupModelValue = Array<string> | Array<number>;
export declare const checkboxGroupProps: {
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    min: NumberConstructor;
    max: NumberConstructor;
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<CheckboxGroupValueType>;
        default: () => never[];
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxGroupEmits: {
    "update:modelValue": (val: CheckboxGroupValueType) => boolean;
    change: (val: CheckboxValueType[]) => boolean;
};
export declare type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;
export declare type CheckboxGroupEmits = ExtractPropTypes<typeof checkboxGroupEmits>;
export declare type CheckboxGroupInstance = InstanceType<typeof checkboxGroup>;
