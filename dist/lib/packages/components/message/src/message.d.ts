import { VNode, ExtractPropTypes, AppContext } from "vue";
import type MessageConstrouctor from './message.vue';
export declare const messageTypes: readonly ["success", "info", "warning", "error"];
export declare type MessageType = typeof messageTypes[number];
export declare const messageProps: {
    duration: {
        type: NumberConstructor;
        default: number;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    message: {
        type: import("vue").PropType<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | (() => VNode)>;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        values: readonly ["success", "info", "warning", "error"];
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    grouping: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClose: {
        type: import("vue").PropType<() => void>;
        require: boolean;
    };
};
export declare const messageEmits: {
    close: () => boolean;
    destroy: () => boolean;
};
export declare type MessageProps = ExtractPropTypes<typeof messageProps>;
export declare type MessageEmits = ExtractPropTypes<typeof messageEmits>;
export declare type MessageParams = Partial<MessageProps> | string | VNode | any;
export declare type MessageOptions = Omit<MessageProps, 'type'>;
export declare type MessageInstance = InstanceType<typeof MessageConstrouctor>;
export interface MessageHandler {
    close: () => void;
}
export declare type MessageOptionsWithType = Omit<MessageOptions, 'type'>;
export declare type MessageParamsWithType = MessageOptionsWithType | MessageOptions['message'];
export interface MessageHandler {
    close: () => void;
}
export declare type MessageFn = {
    (options?: MessageParams, appContext?: null | AppContext): MessageHandler;
    closeAll(type?: MessageType): void;
};
export declare type MessageTypedFn = (options?: MessageParamsWithType, appContext?: null | AppContext) => MessageHandler;
export interface Message extends MessageFn {
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
}
