import { definePropType } from "../../../utils/definePropType.mjs";
const progressProps = {
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  duration: {
    type: Number,
    default: 3
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  showText: {
    type: Boolean,
    default: true
  },
  textInside: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 126
  },
  indeterminate: {
    type: Boolean,
    default: false
  }
};
export {
  progressProps
};
