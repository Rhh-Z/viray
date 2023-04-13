const iconMaps = {
  info: "info",
  success: "success",
  error: "error",
  warning: "warning"
};
const alertProps = {
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "info",
    validator: (val) => ["info", "success", "error", "warning"].includes(val)
  },
  showIcon: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    default: ""
  }
};
const alertEmits = {
  close: (evt) => evt instanceof MouseEvent
};
export {
  alertEmits,
  alertProps,
  iconMaps
};
