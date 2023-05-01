import { ExtractPropTypes } from "vue";
import { buttonProps } from "../../button/src/button";
export const buttonGroupProps = {
  /**
   * @description control the size of buttons in this button-group
   */
  size: buttonProps.size,
  /**
   * @description control the type of buttons in this button-group
   */
  type: buttonProps.type,
}
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;