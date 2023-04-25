import type { ExtractPropTypes } from "vue";
export declare const avatarProps: {
    size: {
        type: (StringConstructor | NumberConstructor)[];
        values: readonly ["", "default", "small", "large"];
        default: string;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
    srcSet: StringConstructor;
    alt: StringConstructor;
    fit: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
};
export declare type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export declare const avatarEmits: {
    error: (evt: Event) => boolean;
};
export declare type AvatarEmits = typeof avatarEmits;
