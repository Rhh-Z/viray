import { definePropType as t } from "../../../utils/definePropType.mjs";
const r = {
  direction: {
    type: String,
    default: "horizontal",
    values: ["horizontal", "vertical"]
  },
  borderStyle: {
    type: t(String),
    default: "solid"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  }
};
export {
  r as dividerProps
};
