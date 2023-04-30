import { isNumber as a } from "../../../utils/common.mjs";
import { definePropType as e } from "../../../utils/definePropType.mjs";
const i = {
  height: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: ""
  },
  animated: {
    type: e([String]),
    default: "default"
  },
  trigger: {
    type: e([String]),
    values: ["hover", "click"],
    default: "hover"
  },
  autoplay: {
    type: Boolean,
    default: !0
  },
  interval: {
    type: Number,
    default: 3e3
  },
  arrow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "hover"
  },
  type: {
    type: String,
    values: ["", "card"],
    default: ""
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  pauseOnHover: {
    type: Boolean,
    default: !0
  }
}, u = {
  change: (t, r) => [t, r].every(a)
};
export {
  u as carouselEmits,
  i as carouselProps
};
