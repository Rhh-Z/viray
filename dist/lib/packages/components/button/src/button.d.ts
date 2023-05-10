import { ExtractPropTypes } from "vue";
import { ButtonNativeType, ButtonSizeType, ButtonType } from "./interface";
import Button from './button.vue';
export declare const buttonProps: {
    type: {
        type: import("vue").PropType<ButtonType>;
        default: string;
        validator(value: ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<ButtonSizeType>;
        default: string;
        validator(value: ButtonSizeType): boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    /**
     * button类型为text时，是否一直需要背景
     */
    bg: {
        type: BooleanConstructor;
        default: boolean;
    };
    nativeType: {
        type: import("vue").PropType<ButtonNativeType>;
        default: () => ButtonNativeType;
        validator(value: 'button' | 'submit' | 'reset'): boolean;
    };
};
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type ButtonEmits = ExtractPropTypes<typeof buttonEmits>;
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonInstance = InstanceType<typeof Button>;
