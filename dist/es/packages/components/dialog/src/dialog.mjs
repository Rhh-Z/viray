import { UPDATE_MODEL_EVENT as o } from "../../../constants/events.mjs";
import t from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.mjs";
const u = {
  appendToBody: {
    type: Boolean,
    default: !1
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
    default: !1
  },
  destroyOnClose: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !1
  },
  showClose: {
    type: Boolean,
    default: !0
  }
}, r = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [o]: (e) => t(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
};
export {
  r as dialogEmits,
  u as dialogProps
};
