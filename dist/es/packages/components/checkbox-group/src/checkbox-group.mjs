import { UPDATE_MODEL_EVENT as r, CHANGE_EVENT as o } from "../../../constants/events.mjs";
import { isArray as t } from "../../../utils/common.mjs";
import { definePropType as a } from "../../../utils/definePropType.mjs";
const p = {
  disabled: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  min: Number,
  max: Number,
  size: {
    type: String,
    values: ["small", "", "default", "large"],
    default: ""
  },
  modelValue: {
    type: a(Array),
    default: () => []
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, u = {
  [r]: (e) => t(e),
  [o]: (e) => t(e)
};
export {
  u as checkboxGroupEmits,
  p as checkboxGroupProps
};
