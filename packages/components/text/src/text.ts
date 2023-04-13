import { ExtractPropTypes, PropType } from "vue";
import { TextType, TextSizeType } from "./interface";

export const textProps = {
  tag: {
    type: String,
    default: 'span',
  },
  type: {
    type: String as PropType<TextType>,
    default: 'default',
    validator(value: TextType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'] as const).includes(
        value
      );
    },
  },
  size: {
    type: String as PropType<TextSizeType>,
    default: 'default',
    validator(value: TextSizeType) {
      return (['large', 'default', 'small']).includes(value);
    },
  },
  kbd: {
    type: Boolean,
    default: false,
  },
  truncated: {
    type: Boolean,
    default: false,
  }
}

export type TextProps = ExtractPropTypes<typeof textProps>