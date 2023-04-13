"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const events = require("../../../constants/events.js");
const isBoolean = require("../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.js");
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
  [events.UPDATE_MODEL_EVENT]: (value) => isBoolean.default(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
exports.dialogEmits = dialogEmits;
exports.dialogProps = dialogProps;
