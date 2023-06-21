import { buttonProps as t } from "../../button/src/button.mjs";
const o = {
  /**
   * @description control the size of buttons in this button-group
   */
  size: {
    type: String,
    value: t.size,
    validator(e) {
      return ["", "large", "default", "small"].includes(e);
    }
  },
  /**
   * @description control the type of buttons in this button-group
   */
  type: t.type,
  disabled: t.disabled
};
export {
  o as buttonGroupProps
};
