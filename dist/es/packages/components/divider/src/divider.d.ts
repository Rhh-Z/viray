import type { ExtractPropTypes } from 'vue';
import type Divider from './divider.vue';
export declare type BorderStyle = CSSStyleDeclaration['borderStyle'];
export declare const dividerProps: {
    direction: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    borderStyle: {
        type: import("vue").PropType<string>;
        default: string;
    };
    contentPosition: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type DividerProps = ExtractPropTypes<typeof dividerProps>;
export declare type DividerInstance = InstanceType<typeof Divider>;
