import { definePropType } from "@viray/utils";
import { ExtractPropTypes } from "vue";
import type { RouteLocationRaw } from 'vue-router'

export const breadcrumbItemProps = {
  to: {
    type: definePropType<RouteLocationRaw>([String, Object]),
    default: ''
  },
  replace: {
    type: Boolean,
    default: false
  }
} as const

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>