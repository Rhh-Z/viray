import { componentSizes as e } from "../../../constants/size.mjs";
const a = {
  size: {
    type: [Number, String],
    values: e,
    default: ""
  },
  src: {
    type: String,
    default: ""
  },
  // 原生srcSet
  srcSet: String,
  alt: String,
  fit: {
    type: String,
    default: "cover"
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: String,
    default: ""
  }
}, i = {
  error: (t) => t instanceof Event
};
export {
  i as avatarEmits,
  a as avatarProps
};
