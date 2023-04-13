import { definePropType } from "@viray/utils/definePropType"
import { componentSizes } from "@viray/constants"


export const formMetaProps = {
  /**
 * @description Control the size of components in this form.
 */
  size: {
    type: String,
    values: componentSizes,
  },
  /**
   * @description Whether to disable all components in this form. If set to `true`, it will override the `disabled` prop of the inner component.
   */
  disabled: Boolean,
}

export const formProps = {
  model: Object,
  rules: {
    type: definePropType
  }
}