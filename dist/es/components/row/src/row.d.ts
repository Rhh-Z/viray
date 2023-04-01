import { ExtractPropTypes } from "vue";
import type Row from './row.vue';
export declare const RowAlign: readonly ["top", "middle", "bottom"];
export declare const RowJustify: readonly ["start", "center", "end", "space-around", "space-between", "space-evenly"];
export declare const rowProps: {
    tag: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    align: {
        type: StringConstructor;
        values: readonly ["top", "middle", "bottom"];
        default: string;
    };
    justify: {
        type: StringConstructor;
        values: readonly ["start", "center", "end", "space-around", "space-between", "space-evenly"];
        default: string;
    };
};
export declare type RowProps = ExtractPropTypes<typeof rowProps>;
export declare type RowInstance = InstanceType<typeof Row>;
