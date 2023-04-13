"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const definePropType = require("../../../utils/definePropType.js");
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
    type: definePropType.definePropType([
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
    type: definePropType.definePropType(Function),
    require: false
  }
};
const messageEmits = {
  close: () => true,
  destroy: () => true
};
exports.messageEmits = messageEmits;
exports.messageProps = messageProps;
exports.messageTypes = messageTypes;
