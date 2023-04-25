import { ExtractPropTypes } from "vue";
import type Progress from './progress.vue';
export declare type ProgressColor = {
    color: string;
    percentage: number;
};
export declare type ProgressFn = (percentage: number) => string;
export declare const progressProps: {
    type: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    status: {
        type: StringConstructor;
        default: string;
        values: string[];
    };
    percentage: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    strokeLinecap: {
        type: import("vue").PropType<"square" | "inherit" | "round" | "butt">;
        default: string;
    };
    format: {
        type: import("vue").PropType<ProgressFn>;
        default: (percentage: number) => string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: import("vue").PropType<string | ProgressFn | ProgressColor[]>;
        default: string;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;
export declare type ProgressInstance = InstanceType<typeof Progress>;
