import { ExtractPropTypes } from "vue";
import Backtop from './backtop.vue';
export declare const backtopProps: {
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "caret-up";
    };
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 200;
    };
    readonly right: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: NumberConstructor;
        readonly default: 40;
    };
    /**
    * @description the target to trigger scroll.
    */
    readonly target: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type BacktopProps = ExtractPropTypes<typeof backtopProps>;
export declare const backtopEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type BacktopEmits = typeof backtopEmits;
export declare type BacktopInstance = InstanceType<typeof Backtop>;
