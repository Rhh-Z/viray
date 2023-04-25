import { ExtractPropTypes } from "vue";
export declare type CheckboxValueType = string | number | boolean;
export declare const checkboxProps: {
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    indeterminate: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    disabled: BooleanConstructor;
    /**
     * @description value of the Checkbox when used inside a `checkbox-group`
     */
    label: (ObjectConstructor | StringConstructor | BooleanConstructor | NumberConstructor)[];
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
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    isFocused: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    border: BooleanConstructor;
};
export declare const checkboxEmits: {
    "update:modelValue": (val: CheckboxValueType) => boolean;
    change: (val: CheckboxValueType) => boolean;
};
export declare type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
