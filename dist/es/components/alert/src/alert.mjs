const t = {
  info: "info",
  success: "success",
  error: "error",
  warning: "warning"
}, n = {
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "info",
    validator: (e) => ["info", "success", "error", "warning"].includes(e)
  },
  showIcon: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !0
  },
  description: {
    type: String,
    default: ""
  }
}, o = {
  close: (e) => e instanceof MouseEvent
};
export {
  o as alertEmits,
  n as alertProps,
  t as iconMaps
};
