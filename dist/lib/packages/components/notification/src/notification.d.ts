import { ExtractPropTypes, VNode } from "vue";
import Notification from './notification.vue';
export declare const notificationTypes: readonly ["success", "error", "info", "warning"];
export declare const notificationProps: {
    customClass: {
        type: StringConstructor;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: import("vue").PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    onClick: {
        type: import("vue").PropType<() => void>;
        default: () => undefined;
    };
    onClose: {
        type: import("vue").PropType<() => void>;
        required: boolean;
    };
    type: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
    position: {
        type: StringConstructor;
        values: string[];
        default: string;
    };
};
export declare type NotificationProps = ExtractPropTypes<typeof notificationProps>;
export declare const notificationEmits: {
    destroy: () => boolean;
};
export declare type NotificationEmits = typeof notificationEmits;
export declare type NotificationInstance = InstanceType<typeof Notification>;
export declare type NotificationOptions = Omit<NotificationProps, 'id'> & {
    appendTo: HTMLElement;
};
export declare type NotificationOptionsTyped = Omit<NotificationOptions, 'type'>;
export interface NotificationHandle {
    close: () => void;
}
export declare type NotificationParams = Partial<NotificationOptions> | string | VNode;
export declare type NotificationParamsTyped = Partial<NotificationOptionsTyped> | string | VNode;
export declare type NotifyFn = ((options: NotificationParams) => NotificationHandle) & {
    closeAll: () => void;
};
export declare type NotifyTypedFn = (options: NotificationParamsTyped) => NotificationHandle;
export interface Notify extends NotifyFn {
    success: NotifyTypedFn;
    warning: NotifyTypedFn;
    error: NotifyTypedFn;
    info: NotifyTypedFn;
}
export interface NotificationQueueItem {
    vm: VNode;
}
export declare type NotificationQueue = NotificationQueueItem[];
