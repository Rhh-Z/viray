export declare const ViButton: import("@viray/utils").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./src/interface").ButtonType>;
        default: () => String;
        validator(value: import("./src/interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./src/interface").ButtonSizeType>;
        default: () => String;
        validator(value: import("./src/interface").ButtonSizeType): boolean;
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
        type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
        default: () => import("./src/interface").ButtonNativeType;
        validator(value: "submit" | "reset" | "button"): boolean;
    };
}, {
    buttonStyle: import("vue").ComputedRef<{
        [x: string]: boolean | "info" | "success" | "error" | "warning" | "small" | "default" | "primary" | "danger" | "large";
        "is-plain": boolean;
        "is-disabled": boolean;
        "is-round": boolean;
        "is-active": boolean;
        "is-circle": boolean;
        "is-text": boolean;
        "is-bg": boolean;
    }>;
    emit: (event: "click", evt: MouseEvent) => void;
    handleClick: (evt: MouseEvent) => void;
    iconName: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./src/interface").ButtonType>;
        default: () => String;
        validator(value: import("./src/interface").ButtonType): boolean;
    };
    size: {
        type: import("vue").PropType<import("./src/interface").ButtonSizeType>;
        default: () => String;
        validator(value: import("./src/interface").ButtonSizeType): boolean;
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
        type: import("vue").PropType<import("./src/interface").ButtonNativeType>;
        default: () => import("./src/interface").ButtonNativeType;
        validator(value: "submit" | "reset" | "button"): boolean;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("./src/interface").ButtonType;
    size: import("./src/interface").ButtonSizeType;
    plain: boolean;
    round: boolean;
    circle: boolean;
    loading: boolean;
    disabled: boolean;
    active: boolean;
    text: boolean;
    autoFocus: boolean;
    icon: string;
    bg: boolean;
    nativeType: import("./src/interface").ButtonNativeType;
}>> & Record<string, any>;
export default ViButton;
