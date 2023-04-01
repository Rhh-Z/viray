import type { ExtractPropTypes } from "vue";
import type Icon from './icon.vue';

export const iconProps = {
  name: {
    type: String,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  }
}

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = ExtractPropTypes<typeof Icon>