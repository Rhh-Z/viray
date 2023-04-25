import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { definePropType as e } from "../../../utils/definePropType.mjs";
import { exports as a } from "../../../../_virtual/lodash.mjs";
const u = {
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
}, p = {
  change: (t, r) => [t, r].every(a.isNumber)
};
export {
  p as carouselEmits,
  u as carouselProps
};
