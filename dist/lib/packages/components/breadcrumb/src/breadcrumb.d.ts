import { ExtractPropTypes } from "vue";
import Breadcrumb from './breadcrumb.vue';
export declare const breadcrumbProps: {
    separator: {
        type: StringConstructor;
        default: string;
    };
    separatorIcon: {
        type: StringConstructor;
        default: string;
    };
};
export declare type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>;
export declare type BreadcrumbInstance = InstanceType<typeof Breadcrumb>;
