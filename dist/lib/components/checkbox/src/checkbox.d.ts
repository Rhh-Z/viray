import type { ExtractPropTypes, PropType } from 'vue';
import { ComponentSize } from '@viray/constants/size';
export declare type CheckboxValueType = string | number | boolean;
export declare const checkboxProps: {
    /**
      * @description binding value
      */
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
      * @description value of the Checkbox when used inside a `checkbox-group`
      */
    label: {
        type: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    /**
     * @description if the Checkbox is checked
     */
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @description native 'name' attribute
     */
    name: {
        type: StringConstructor;
        default: undefined;
    };
    /**
      * @description value of the Checkbox if it's checked
      */
    trueLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * @description value of the Checkbox if it's not checked
     */
    falseLabel: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    /**
     * @description input id
     */
    id: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * @description whether to add a border around Checkbox
     */
    border: BooleanConstructor;
    /**
     * @description size of the Checkbox
     */
    size: {
        type: PropType<string>;
        default: () => string;
        validator(value: ComponentSize): boolean;
    };
    /**
      * @description whether to trigger form validation
      */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => boolean;
    change: (val: CheckboxValueType) => boolean;
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export declare type CheckboxEmits = ExtractPropTypes<typeof checkboxEmits>;
