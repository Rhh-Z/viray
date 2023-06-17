import { InjectionKey } from "vue";

import type { ButtonProps } from '../../button/src/button'

export interface ButtonGroupContext {
  size?: ButtonProps['size']
  type?: ButtonProps['type']
  disabled?: ButtonProps['disabled']
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  'buttonGroupContextKey'
)