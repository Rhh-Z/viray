import { UPDATE_MODEL_EVENT as n } from "../../../constants/events.mjs";
import { definePropType as o } from "../../../utils/definePropType.mjs";
import t from "../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isString.mjs";
const s = {
  /**
  * @description binding value
  */
  modelValue: {
    type: o([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  /**
    * @description native input id
    */
  id: {
    type: String,
    default: void 0
  },
  size: String,
  type: {
    type: String,
    default: "text"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  placeholder: String,
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  /**
    * @description word count
    */
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  /**
    * @description prefix icon
    */
  prefixIcon: String,
  /**
    * @description suffix icon
    */
  suffixIcon: String,
  maxlength: {
    type: Number
  },
  autoSize: {
    type: o([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}, f = {
  [n]: (e) => t(e),
  input: (e) => t(e),
  change: (e) => t(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
};
export {
  f as inputEmits,
  s as inputProps
};
