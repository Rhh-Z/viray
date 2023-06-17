import { ExtractPropTypes } from "vue";
import { buttonProps } from "../../button/src/button";
import { ComponentSize } from "@viray/constants";

export const buttonGroupProps = {
  /**
   * @description control the size of buttons in this button-group
   */
  size: {
    type: String,
    value: buttonProps.size,
    validator(value: ComponentSize) {
      return (['', 'large', 'default', 'small'] as const).includes(value)
    }
  },
  /**
   * @description control the type of buttons in this button-group
   */
  type: buttonProps.type,
  disabled: buttonProps.disabled
}
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;