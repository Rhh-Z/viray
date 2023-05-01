import { isBoolean } from "lodash-unified"
import { ExtractPropTypes, PropType } from "vue"

export const popoverProps = {
  trigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover'
  },
  content: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  placement: {
    type: String,
    values: [
      'top',
      'bottom',
      'left',
      'right',
    ],
    default: 'bottom'
  },
  width: {
    type: [Number, String],
    default: '150px'
  },
  disabled: Boolean,
  offset: {
    type: Number,
    default: 0
  },
  'visible': Boolean,
  'onUpdate:visible': {
    type: Function as PropType<(visible: boolean) => void>,
  },
}

export type PopoverProps = ExtractPropTypes<typeof popoverProps>

export const popoverEmits = {
  'update:visible': (value: boolean) => isBoolean(value),
  'before-enter': () => true,
  'before-leave': () => true,
  'after-enter': () => true,
  'after-leave': () => true,
  'click': () => true
}

export type PoopoverEmits = ExtractPropTypes<typeof popoverEmits>