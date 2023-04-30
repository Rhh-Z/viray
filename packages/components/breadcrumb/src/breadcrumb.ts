import { ExtractPropTypes } from "vue"
import Breadcrumb from './breadcrumb.vue';

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/'
  },
  separatorIcon: {
    type: String,
    default: ''
  }
}
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>