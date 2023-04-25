import { ExtractPropTypes } from "vue";
import type { RouteLocationRaw } from 'vue-router';
export declare const breadcrumbItemProps: {
    readonly to: {
        readonly type: import("vue").PropType<RouteLocationRaw>;
        readonly default: "";
    };
    readonly replace: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
