import { ExtractPropTypes } from "vue";
import { ButtonNativeType, ButtonSizeType, ButtonType } from "./interface";
import Button from './button.vue';
import { definePropType } from "@viray/utils";

export const buttonProps = {
  type: {
    type: definePropType<ButtonType>([String]),
    default: "default",
    validator(value: ButtonType) {
      return (['', 'default', 'primary', 'success', 'info', 'danger', 'warning', 'error'] as const).includes(
        value
      );
    }
  },
  size: {
    type: String,
    default: "default",
    validator(value: ButtonSizeType) {
      return (['', 'large', 'default', 'small'] as const).includes(value)
    }
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  /**
   * button类型为text时，是否一直需要背景
   */
  bg: {
    type: Boolean,
    default: false
  },
  nativeType: {
    type: definePropType<ButtonNativeType>([String]),
    default: (): ButtonNativeType => 'button',
    validator(value: 'button' | 'submit' | 'reset') {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonEmits = ExtractPropTypes<typeof buttonEmits>
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonInstance = InstanceType<typeof Button>