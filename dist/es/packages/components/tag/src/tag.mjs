import { definePropType as t } from "../../../utils/definePropType.mjs";
import { componentSizes as o } from "../../../constants/size.mjs";
const n = {
  type: {
    type: t(String),
    default: "primray"
  },
  round: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  hit: {
    type: Boolean,
    default: !1
  },
  size: {
    type: t(String),
    values: o,
    default: "default"
  },
  effect: {
    type: t(String),
    values: ["dark", "light", "plain"],
    default: "light"
  },
  disableTransitions: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    default: !0
  }
}, i = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
};
export {
  i as tagEmits,
  n as tagProps
};
