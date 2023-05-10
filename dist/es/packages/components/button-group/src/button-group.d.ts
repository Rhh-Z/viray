import { ExtractPropTypes } from "vue";
export declare const buttonGroupProps: {
    /**
     * @description control the size of buttons in this button-group
     */
    size: {
        type: import("vue").PropType<import("../../button/src/interface").ButtonSizeType>;
        default: string;
        validator(value: import("../../button/src/interface").ButtonSizeType): boolean;
    };
    /**
     * @description control the type of buttons in this button-group
     */
    type: {
        type: import("vue").PropType<import("../../button/src/interface").ButtonType>;
        default: string;
        validator(value: import("../../button/src/interface").ButtonType): boolean;
    };
};
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
