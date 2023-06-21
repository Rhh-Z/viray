import { definePropType as t } from "../../../utils/definePropType.mjs";
const l = {
  type: {
    type: t([String]),
    default: "default",
    validator(e) {
      return ["", "default", "primary", "success", "info", "danger", "warning", "error"].includes(
        e
      );
    }
  },
  size: {
    type: String,
    default: "default",
    validator(e) {
      return ["", "large", "default", "small"].includes(e);
    }
  },
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  circle: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  active: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  autoFocus: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  },
  /**
   * button类型为text时，是否一直需要背景
   */
  bg: {
    type: Boolean,
    default: !1
  },
  nativeType: {
    type: t([String]),
    default: () => "button",
    validator(e) {
      return ["button", "submit", "reset"].includes(e);
    }
  }
}, o = {
  click: (e) => e instanceof MouseEvent
};
export {
  o as buttonEmits,
  l as buttonProps
};
