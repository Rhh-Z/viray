import { ExtractPropTypes } from "vue";
import { ComponentSize } from "@viray/constants";
export declare const buttonGroupProps: {
    /**
     * @description control the size of buttons in this button-group
     */
    size: {
        type: StringConstructor;
        value: {
            type: StringConstructor;
            default: string;
            validator(value: import("../../button/src/interface").ButtonSizeType): boolean;
        };
        validator(value: ComponentSize): boolean;
    };
    /**
     * @description control the type of buttons in this button-group
     */
    type: {
        type: import("vue").PropType<import("../../button/src/interface").ButtonType>;
        default: string;
        validator(value: import("../../button/src/interface").ButtonType): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
