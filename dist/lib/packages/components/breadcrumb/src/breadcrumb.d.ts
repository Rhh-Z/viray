import { ExtractPropTypes } from "vue";
import Breadcrumb from './breadcrumb.vue';
export declare const breadcrumbProps: {
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: "/";
    };
    readonly separatorIcon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
export declare type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
export declare type BreadcrumbInstance = InstanceType<typeof Breadcrumb>;
