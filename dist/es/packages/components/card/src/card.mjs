import { definePropType as e } from "../../../utils/definePropType.mjs";
const t = {
  header: {
    type: String,
    default: ""
  },
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: "always"
  },
  bodyStyle: {
    type: e([String, Object, Array]),
    default: ""
  }
};
export {
  t as cardProps
};
