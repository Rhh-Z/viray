import { ExtractPropTypes, PropType } from "vue";
import { ButtonNativeType, ButtonSizeType, ButtonType } from "./interface";
export declare const buttonProps: {
    type: {
        type: PropType<ButtonType>;
        default: () => String;
        validator(value: ButtonType): boolean;
    };
    size: {
        type: PropType<ButtonSizeType>;
        default: () => String;
        validator(value: ButtonSizeType): boolean;
    };
    plain: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    round: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    circle: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    active: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    text: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    icon: {
        type: StringConstructor;
        default: () => string;
    };
    bg: {
        type: BooleanConstructor;
        default: () => Boolean;
    };
    nativeType: {
        type: PropType<ButtonNativeType>;
        default: () => ButtonNativeType;
        validator(value: 'button' | 'submit' | 'reset'): boolean;
    };
};
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type ButtonEmits = typeof buttonEmits;
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
