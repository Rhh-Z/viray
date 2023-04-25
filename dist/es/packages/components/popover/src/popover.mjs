import t from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBoolean.mjs";
const r = {
  trigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  content: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  placement: {
    type: String,
    values: [
      "top",
      "bottom",
      "left",
      "right"
    ],
    default: "bottom"
  },
  width: {
    type: [Number, String],
    default: "150px"
  },
  disabled: Boolean,
  offset: {
    type: Number,
    default: 0
  },
  visible: Boolean,
  "onUpdate:visible": {
    type: Function
  }
}, i = {
  "update:visible": (e) => t(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0,
  click: () => !0
};
export {
  i as popoverEmits,
  r as popoverProps
};
