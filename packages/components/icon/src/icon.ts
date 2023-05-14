import type { ExtractPropTypes } from "vue";
import type Icon from './icon.vue';

export const iconProps = {
  name: {
    type: String,
    default: '',
  },
  size: {
    type: [String, Number],
    default: '16px',
  },
  color: {
    type: String,
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = ExtractPropTypes<typeof Icon>