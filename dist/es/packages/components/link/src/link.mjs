import { definePropType as t } from "../../../utils/definePropType.mjs";
const r = {
  type: {
    type: t([String]),
    default: "default",
    validator(e) {
      return ["default", "primary", "success", "info", "danger", "warning", "error"].includes(
        e
      );
    }
  },
  /**
   * 是否有下划线
   */
  underline: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String,
    default: ""
  },
  href: { type: String, default: "" }
}, i = {
  click: (e) => e instanceof MouseEvent
};
export {
  i as linkEmits,
  r as linkProps
};
