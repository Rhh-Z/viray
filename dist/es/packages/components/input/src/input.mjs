import { UPDATE_MODEL_EVENT } from "../../../constants/events.mjs";
import "../../../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.mjs";
import { definePropType } from "../../../utils/definePropType.mjs";
import { exports as lodashExports } from "../../../../_virtual/lodash.mjs";
const inputProps = {
  /**
  * @description binding value
  */
  modelValue: {
    type: definePropType([
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
    default: false
  },
  placeholder: String,
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
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
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  /**
    * @description word count
    */
  showWordLimit: {
    type: Boolean,
    default: false
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
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  autofocus: {
    type: Boolean,
    default: false
  }
};
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (val) => lodashExports.isString(val),
  input: (val) => lodashExports.isString(val),
  change: (val) => lodashExports.isString(val),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
export {
  inputEmits,
  inputProps
};
