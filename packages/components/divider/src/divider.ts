import { definePropType } from "@viray/utils"
import type { ExtractPropTypes } from 'vue'
import type Divider from './divider.vue'

export type BorderStyle = CSSStyleDeclaration['borderStyle']

export const dividerProps = {
  direction: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical']
  },
  borderStyle: {
    type: definePropType<BorderStyle>(String),
    default: 'solid'
  },
  contentPosition: {
    type: String,
    values: ['left', 'center', 'right'],
    default: 'center',
  },
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
export type DividerInstance = InstanceType<typeof Divider>
