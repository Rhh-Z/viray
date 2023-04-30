import { definePropType } from "@viray/utils";
import { ExtractPropTypes } from "vue";
import type { RouteLocationRaw } from 'vue-router'
import BreadcrumbItem from './breadcrumb-item.vue';

export const breadcrumbItemProps = {
  to: {
    type: definePropType<RouteLocationRaw>([String, Object]),
    default: ''
  },
  replace: {
    type: Boolean,
    default: false
  }
}

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>