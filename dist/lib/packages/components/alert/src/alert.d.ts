import { ExtractPropTypes, PropType } from "vue";
import Alert from './alert.vue';
declare type AlertType = 'info' | 'success' | 'error' | 'warning';
interface IiconMaps {
    [key: string]: string;
}
export declare const iconMaps: IiconMaps;
export declare const alertProps: {
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<AlertType>;
        default: string;
        validator: (val: AlertType) => boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
};
export declare const alertEmits: {
    close: (evt: MouseEvent) => boolean;
};
export declare type AlertProps = ExtractPropTypes<typeof alertProps>;
export declare type AlertEmits = ExtractPropTypes<typeof alertEmits>;
export declare type AlertInstance = InstanceType<typeof Alert>;
export {};
