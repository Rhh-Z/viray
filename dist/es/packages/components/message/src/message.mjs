import { definePropType as e } from "../../../utils/definePropType.mjs";
const t = ["success", "info", "warning", "error"], s = {
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
    default: !1
  },
  message: {
    type: e([
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
    values: t,
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
    default: !0
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  grouping: {
    type: Boolean,
    default: !1
  },
  onClose: {
    type: e(Function),
    require: !1
  }
}, a = {
  close: () => !0,
  destroy: () => !0
};
export {
  a as messageEmits,
  s as messageProps,
  t as messageTypes
};
