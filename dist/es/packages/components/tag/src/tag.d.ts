import { ExtractPropTypes } from "vue";
import Tag from './tag.vue';
declare type tagType = "primray" | "success" | "info" | "warning" | "danger" | "error";
declare type effectType = "dark" | "light" | "plain";
export declare const tagProps: {
    type: {
        type: import("vue").PropType<tagType>;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hit: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<readonly ["", "default", "small", "large"]>;
        values: readonly ["", "default", "small", "large"];
        default: string;
    };
    effect: {
        type: import("vue").PropType<effectType>;
        values: string[];
        default: string;
    };
    disableTransitions: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type TagProps = ExtractPropTypes<typeof tagProps>;
export declare const tagEmits: {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
};
export declare type TagEmits = ExtractPropTypes<typeof tagEmits>;
export declare type TagInstance = InstanceType<typeof Tag>;
export {};
