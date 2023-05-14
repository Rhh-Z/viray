import { definePropType } from "@viray/utils";
import type Link from './link.vue'

type LinkType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning' | 'error';

export const linkProps = {
  type: {
    type: definePropType<LinkType>([String]),
    default: "default",
    validator(value: LinkType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'] as const).includes(
        value
      );
    }
  },
  /**
   * 是否有下划线
   */
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  href: { type: String, default: '' },
}

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type LinkEmits = typeof linkEmits

export type LinkInstance = InstanceType<typeof Link>