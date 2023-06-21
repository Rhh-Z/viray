import { definePropType as e } from "../../../utils/definePropType.mjs";
const a = {
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: {
    type: Boolean,
    default: !1
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  type: {
    type: e([String]),
    default: "danger"
  }
};
export {
  a as badgeProps
};
