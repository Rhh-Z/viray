import type { ExtractPropTypes } from "vue";
import type Col from './col.vue';
export declare type ColSizeObject = {
    span?: number;
    offest?: number;
    pull?: number;
    push?: number;
};
export declare type ColSize = number | ColSizeObject;
export declare const colProps: {
    tag: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @description number of column the grid spans
     */
    span: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description number of columns that grid moves to the left
     */
    pull: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @description number of columns that grid moves to the right
     */
    push: {
        type: NumberConstructor;
        default: number;
    };
};
export declare type ColProps = ExtractPropTypes<typeof colProps>;
export declare type ColInstance = InstanceType<typeof Col>;
