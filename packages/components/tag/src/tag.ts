import { definePropType } from "@viray/utils"
import { componentSizes } from "@viray/constants"
import { ExtractPropTypes } from "vue"
import Tag from './tag.vue';

type tagType = "primray" | "success" | "info" | "warning" | "danger" | "error"
type effectType = "dark" | "light" | "plain"

export const tagProps = {
  type: {
    type: definePropType<tagType>(String),
    default: 'primray',
  },
  round: {
    type: Boolean,
    default: false,
  },
  closable: {
    type: Boolean,
    default: false,
  },
  hit: {
    type: Boolean,
    default: false,
  },
  size: {
    type: definePropType<typeof componentSizes>(String),
    values: componentSizes,
    default: 'default'
  },
  effect: {
    type: definePropType<effectType>(String),
    values: ['dark', 'light', 'plain'],
    default: 'light'
  },
  disableTransitions: {
    type: Boolean,
    default: true
  },
  color: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: true
  }
}

export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type TagEmits = ExtractPropTypes<typeof tagEmits>
export type TagInstance = InstanceType<typeof Tag>
