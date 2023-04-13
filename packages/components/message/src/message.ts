import { definePropType } from "@viray/utils/definePropType"
import { VNode, ExtractPropTypes, AppContext } from "vue"
import type MessageConstrouctor from './message.vue'

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export type MessageType = typeof messageTypes[number]

export const messageProps = {
  duration: {
    type: Number,
    default: 3000
  },
  customClass: {
    type: String,
    default: ''
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function
    ]),
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    values: messageTypes,
    default: 'info'
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  center: {
    type: Boolean,
    default: true
  },
  closeable: {
    type: Boolean,
    default: false
  },
  grouping: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: definePropType<() => void>(Function),
    require: false
  }
}


export const messageEmits = {
  close: () => true,
  destroy: () => true,
}

export type MessageProps = ExtractPropTypes<typeof messageProps>;

export type MessageEmits = ExtractPropTypes<typeof messageEmits>;

export type MessageParams = Partial<MessageProps> | string | VNode | any;

export type MessageOptions = Omit<MessageProps, 'type'>;

export type MessageInstance = InstanceType<typeof MessageConstrouctor>;

export interface MessageHandler {
  close: () => void
}
export type MessageOptionsWithType = Omit<MessageOptions, 'type'>
export type MessageParamsWithType =
  | MessageOptionsWithType
  | MessageOptions['message']

export interface MessageHandler {
  close: () => void
}

export type MessageFn = {
  (options?: MessageParams, appContext?: null | AppContext): MessageHandler
  closeAll(type?: MessageType): void
}

export type MessageTypedFn = (
  options?: MessageParamsWithType,
  appContext?: null | AppContext
) => MessageHandler

export interface Message extends MessageFn {
  success: MessageTypedFn
  warning: MessageTypedFn
  info: MessageTypedFn
  error: MessageTypedFn
}