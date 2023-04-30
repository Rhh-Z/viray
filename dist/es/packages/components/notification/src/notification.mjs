import { definePropType as t } from "../../../utils/definePropType.mjs";
const e = [
  "success",
  "error",
  "info",
  "warning"
], i = {
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: !1
  },
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: String,
    default: "close"
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: t([String, Object]),
    default: ""
  },
  zIndex: {
    type: Number,
    default: 0
  },
  closeable: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: t(Function),
    default: () => {
    }
  },
  onClose: {
    type: t(Function),
    required: !0
  },
  type: {
    type: String,
    values: [...e, ""],
    default: ""
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  }
}, n = {
  destroy: () => !0
};
export {
  n as notificationEmits,
  i as notificationProps,
  e as notificationTypes
};
