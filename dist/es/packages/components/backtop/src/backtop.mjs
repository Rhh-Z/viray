const e = {
  icon: {
    type: String,
    default: "caret-up"
  },
  visibilityHeight: {
    type: Number,
    default: 200
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  },
  /**
  * @description the target to trigger scroll.
  */
  target: {
    type: String,
    default: ""
  }
}, i = {
  click: (t) => t instanceof MouseEvent
};
export {
  i as backtopEmits,
  e as backtopProps
};
