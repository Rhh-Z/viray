
import { componentSizes } from "@viray/constants"
import type { ExtractPropTypes } from "vue"

export const avatarProps = {
  size: {
    type: [Number, String],
    values: componentSizes,
    default: '',
  },
  src: {
    type: String,
    default: ''
  },
  // 原生srcSet
  srcSet: String,
  alt: String,
  fit: {
    type: String,
    default: 'cover',
  },
  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle',
  },
  icon: {
    type: String,
    default: ''
  },
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event,
}
export type AvatarEmits = typeof avatarEmits