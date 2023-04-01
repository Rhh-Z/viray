import { ExtractPropTypes } from "vue"
import type Row from './row.vue';


export const RowAlign = ['top', 'middle', 'bottom'] as const;
export const RowJustify = [
  'start',
  'center',
  'end',
  'space-around',
  'space-between',
  'space-evenly',
] as const

export const rowProps = {
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: Number,
    default: 0,
  },
  align: {
    type: String,
    values: RowAlign,
    default: 'top',
  },
  justify: {
    type: String,
    values: RowJustify,
    default: 'start',
  }
}

export type RowProps = ExtractPropTypes<typeof rowProps>
export type RowInstance = InstanceType<typeof Row>