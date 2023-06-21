import { UPDATE_MODEL_EVENT } from '@viray/constants'
import { isBoolean } from 'lodash-unified'
import { ExtractPropTypes } from 'vue'
import Dialog from './dialog.vue';

export const dialogProps = {
  appendToBody: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number]
  },
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: false
  },
  showClose: {
    type: Boolean,
    default: true
  }
}

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogEmits = ExtractPropTypes<typeof dialogEmits>
export type DialogInstance = InstanceType<typeof Dialog>