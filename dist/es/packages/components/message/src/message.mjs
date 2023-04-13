import { definePropType } from "../../../utils/definePropType.mjs";
const messageTypes = ["success", "info", "warning", "error"];
const messageProps = {
  duration: {
    type: Number,
    default: 3e3
  },
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  center: {
    type: Boolean,
    default: true
  },
  closeable: {
    type: Boolean,
    default: false
  },
  grouping: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: definePropType(Function),
    require: false
  }
};
const messageEmits = {
  close: () => true,
  destroy: () => true
};
export {
  messageEmits,
  messageProps,
  messageTypes
};
