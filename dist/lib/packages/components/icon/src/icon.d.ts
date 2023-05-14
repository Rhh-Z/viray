import type { ExtractPropTypes } from "vue";
import type Icon from './icon.vue';
export declare const iconProps: {
    name: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: {
        type: StringConstructor;
    };
};
export declare type IconProps = ExtractPropTypes<typeof iconProps>;
export declare type IconInstance = ExtractPropTypes<typeof Icon>;
