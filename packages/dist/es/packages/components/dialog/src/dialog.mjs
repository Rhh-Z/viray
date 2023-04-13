import { UPDATE_MODEL_EVENT } from "../../../constants/events.mjs";
import isBoolean from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.mjs";
const dialogProps = {
  appendToBody: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number]
  },
  title: {
    type: String,
    default: ""
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  lockScroll: {
    type: Boolean,
    default: false
  }
};
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
export {
  dialogEmits,
  dialogProps
};
