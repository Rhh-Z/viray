import { definePropType as e } from "../../../utils/definePropType.mjs";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
const r = {
  to: {
    type: e([String, Object]),
    default: ""
  },
  replace: {
    type: Boolean,
    default: !1
  }
};
export {
  r as breadcrumbItemProps
};
