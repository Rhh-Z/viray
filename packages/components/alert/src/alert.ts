import { AlertType } from "./interface";
import { ExtractPropTypes, PropType } from "vue";


interface IiconMaps {
  [key: string]: string
}

export const iconMaps: IiconMaps = {
  info: 'info',
  success: 'success',
  error: 'error',
  warning: 'warning'
};


export const alertProps = {
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<AlertType>,
    default: 'info',
    validator: (val: AlertType) => ['info', 'success', 'error', 'warning'].includes(val)
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    default: "",
  }
}


export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type AlertProps = ExtractPropTypes<typeof alertProps>

