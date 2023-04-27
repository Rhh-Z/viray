import { ExtractPropTypes } from "vue"
import Card from './card.vue';

export const cardProps = {
  header: {
    type: String,
    default: ''
  },
  shadow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'always'
  }
}

export type CardProps = ExtractPropTypes<typeof cardProps>
export type CardInstance = InstanceType<typeof Card>