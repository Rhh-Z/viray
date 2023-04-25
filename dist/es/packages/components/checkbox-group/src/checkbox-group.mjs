import { UPDATE_MODEL_EVENT as r, CHANGE_EVENT as o } from "../../../constants/events.mjs";
import { isArray as t } from "../../../utils/common.mjs";
import { definePropType as a } from "../../../utils/definePropType.mjs";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
const u = {
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
}, d = {
  [r]: (e) => t(e),
  [o]: (e) => t(e)
};
export {
  d as checkboxGroupEmits,
  u as checkboxGroupProps
};
