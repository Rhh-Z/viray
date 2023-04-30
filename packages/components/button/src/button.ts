import { ExtractPropTypes, PropType } from "vue";
import { ButtonNativeType, ButtonSizeType, ButtonType } from "./interface";
import Button from './button.vue';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: (): string => "default",
    validator(value: ButtonType) {
      return (['default', 'primary', 'success', 'info', 'danger', 'warning', 'error'] as const).includes(
        value
      );
    }
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: (): string => "default",
    validator(value: ButtonSizeType) {
      return (['large', 'default', 'small'] as const).includes(value)
    }
  },
  plain: {
    type: Boolean,
    default: (): boolean => false
  },
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  circle: {
    type: Boolean,
    default: (): boolean => false
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  active: {
    type: Boolean,
    default: (): boolean => false
  },
  text: {
    type: Boolean,
    default: (): boolean => false
  },
  autoFocus: {
    type: Boolean,
    default: (): boolean => false
  },
  icon: {
    type: String,
    default: () => ''
  },
  bg: {
    type: Boolean,
    default: (): boolean => false
  },
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: (): ButtonNativeType => 'button',
    validator(value: 'button' | 'submit' | 'reset') {
      return (['button', 'submit', 'reset'] as const).includes(value);
    }
  }
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonEmits = typeof buttonEmits
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonInstance = InstanceType<typeof Button>