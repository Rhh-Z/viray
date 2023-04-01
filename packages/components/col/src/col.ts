import type { ExtractPropTypes } from "vue";
import type Col from './col.vue';

export type ColSizeObject = {
  span?: number
  offest?: number
  pull?: number
  push?: number
}

export type ColSize = number | ColSizeObject

export const colProps = {
  tag: {
    type: String,
    default: 'div',
  },
  /**
   * @description number of column the grid spans
   */
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description number of columns that grid moves to the left
   */
  pull: {
    type: Number,
    default: 0,
  },
  /**
   * @description number of columns that grid moves to the right
   */
  push: {
    type: Number,
    default: 0,
  }
}
export type ColProps = ExtractPropTypes<typeof colProps>
export type ColInstance = InstanceType<typeof Col>
