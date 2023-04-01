import { ExtractPropTypes, PropType } from "vue";
import { TextType, TextSizeType } from "./interface";
export declare const textProps: {
    tag: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<TextType>;
        default: string;
        validator(value: TextType): boolean;
    };
    size: {
        type: PropType<TextSizeType>;
        default: string;
        validator(value: TextSizeType): boolean;
    };
    kbd: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TextProps = ExtractPropTypes<typeof textProps>;
