import { ExtractPropTypes } from "vue"
import Backtop from './backtop.vue';

export const backtopProps = {
  icon: {
    type: String,
    default: 'caret-up'
  },
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  },
  /**
  * @description the target to trigger scroll.
  */
  target: {
    type: String,
    default: '',
  },
} as const

export type BacktopProps = ExtractPropTypes<typeof backtopProps>

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type BacktopEmits = typeof backtopEmits
export type BacktopInstance = InstanceType<typeof Backtop>