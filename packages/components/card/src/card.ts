import { ExtractPropTypes } from "vue"


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