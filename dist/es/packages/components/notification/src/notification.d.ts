import { ExtractPropTypes, VNode } from "vue";
import Notification from './notification.vue';
export declare const notificationTypes: readonly ["success", "error", "info", "warning"];
export declare const notificationProps: {
    readonly customClass: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly dangerouslyUseHTMLString: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 4500;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "close";
    };
    readonly id: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly message: {
        readonly type: import("vue").PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: "";
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly closeable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly onClick: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: () => undefined;
    };
    readonly onClose: {
        readonly type: import("vue").PropType<() => void>;
        readonly required: true;
    };
    readonly type: {
        readonly type: StringConstructor;
        readonly values: readonly ["success", "error", "info", "warning", ""];
        readonly default: "";
    };
    readonly position: {
        readonly type: StringConstructor;
        readonly values: readonly ["top-right", "top-left", "bottom-right", "bottom-left"];
        readonly default: "top-right";
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
