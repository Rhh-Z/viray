import { ComponentSize, UPDATE_MODEL_EVENT } from "@viray/constants";
import { isString } from "lodash-unified";
import type Input from './input.vue';
import { definePropType } from "@viray/utils/definePropType";

export type InputAutoSize = { minRows?: number; maxRows?: number } | boolean

export const inputProps = {
  /**
 * @description binding value
 */
  modelValue: {
    type: definePropType<string | number | null | undefined>([
      String,
      Number,
      Object,
    ]),
    default: '',
  },
  /**
    * @description native input id
    */
  id: {
    type: String,
    default: undefined,
  },
  size: {
    type: definePropType<ComponentSize>([String]),
    default: ''
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  form: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: undefined,
  },
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  /**
    * @description word count
    */
  showWordLimit: {
    type: Boolean,
    default: false,
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
    type: [Number, String],
  },
  minlength: {
    type: [Number, String],
  },
  autosize: {
    type: definePropType<InputAutoSize>([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  autofocus: {
    type: Boolean,
    default: false
  }
}

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (val: string) => isString(val),
  input: (val: string) => isString(val),
  change: (val: string) => isString(val),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}

export type InputEmits = typeof inputEmits
export type InputInstance = InstanceType<typeof Input>