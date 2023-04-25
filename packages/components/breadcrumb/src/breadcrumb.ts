import { ExtractPropTypes } from "vue"

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  },
  separatorIcon: {
    type: String,
    default: ''
  }
} as const

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
