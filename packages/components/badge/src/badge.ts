import { definePropType } from "@viray/utils";
import type Badge from './badge.vue'

type BadgeType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export const badgeProps = {
  value: {
    type: [String, Number],
    default: ''
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: {
    type: Boolean,
    default: false
  },
  hidden: {
    type: Boolean,
    default: false
  },
  type: {
    type: definePropType<BadgeType>([String]),
    default: 'danger'
  }
}


export type BadgeInstance = InstanceType<typeof Badge>