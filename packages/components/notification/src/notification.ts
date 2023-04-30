import { definePropType } from "@viray/utils";
import { ExtractPropTypes, VNode } from "vue";
import Notification from './notification.vue';

export const notificationTypes = [
  'success',
  'error',
  'info',
  'warning'
] as const

export const notificationProps = {
  customClass: {
    type: String,
    default: ''
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 4500,
  },
  icon: {
    type: String,
    default: 'close'
  },
  id: {
    type: String,
    default: '',
  },
  message: {
    type: definePropType<string | VNode>([String, Object]),
    default: '',
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  closeable: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  offset: {
    type: Number,
    default: 0,
  },
  onClick: {
    type: definePropType<() => void>(Function),
    default: () => undefined,
  },
  onClose: {
    type: definePropType<() => void>(Function),
    required: true,
  },
  type: {
    type: String,
    values: [...notificationTypes, ''],
    default: '',
  },
  position: {
    type: String,
    values: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    default: 'top-right',
  },
}

export type NotificationProps = ExtractPropTypes<typeof notificationProps>

export const notificationEmits = {
  destroy: () => true
}

export type NotificationEmits = typeof notificationEmits

export type NotificationInstance = InstanceType<typeof Notification>

export type NotificationOptions = Omit<NotificationProps, 'id'> & {
  appendTo: HTMLElement
}

export type NotificationOptionsTyped = Omit<NotificationOptions, 'type'>

export interface NotificationHandle {
  close: () => void
}

export type NotificationParams = Partial<NotificationOptions> | string | VNode
export type NotificationParamsTyped = | Partial<NotificationOptionsTyped>
  | string
  | VNode

export type NotifyFn = ((
  options: NotificationParams
) => NotificationHandle) & { closeAll: () => void }

export type NotifyTypedFn = (
  options: NotificationParamsTyped
) => NotificationHandle

export interface Notify extends NotifyFn {
  success: NotifyTypedFn
  warning: NotifyTypedFn
  error: NotifyTypedFn
  info: NotifyTypedFn
}

export interface NotificationQueueItem {
  vm: VNode
}

export type NotificationQueue = NotificationQueueItem[]