import { ExtractPropTypes } from "vue";
import type { StyleValue } from "vue";
import Card from './card.vue';
import { definePropType } from "@viray/utils";

export const cardProps = {
  header: {
    type: String,
    default: ''
  },
  shadow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'always'
  },
  bodyStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
    default: '',
  },
}

export type CardProps = ExtractPropTypes<typeof cardProps>
export type CardInstance = InstanceType<typeof Card>