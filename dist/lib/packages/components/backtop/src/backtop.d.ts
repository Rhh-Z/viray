import { ExtractPropTypes } from "vue";
import Backtop from './backtop.vue';
export declare const backtopProps: {
    icon: {
        type: StringConstructor;
        default: string;
    };
    visibilityHeight: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    /**
    * @description the target to trigger scroll.
    */
    target: {
        type: StringConstructor;
        default: string;
    };
};
export declare type BacktopProps = ExtractPropTypes<typeof backtopProps>;
export declare const backtopEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type BacktopEmits = typeof backtopEmits;
export declare type BacktopInstance = InstanceType<typeof Backtop>;
