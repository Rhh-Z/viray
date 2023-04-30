import { ExtractPropTypes } from "vue";
import type { RouteLocationRaw } from 'vue-router';
import BreadcrumbItem from './breadcrumb-item.vue';
export declare const breadcrumbItemProps: {
    to: {
        type: import("vue").PropType<RouteLocationRaw>;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export declare type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>;
export declare type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>;
