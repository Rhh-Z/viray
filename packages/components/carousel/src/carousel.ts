import { isNumber } from "@viray/utils"
import { definePropType } from "@viray/utils"
import { ExtractPropTypes } from "vue"
import Carousel from './carousel.vue';

type Trigger = 'hover' | 'click'

export const carouselProps = {
  height: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  animated: {
    type: definePropType<'default' | 'updown' | 'fade'>([String]),
    default: 'default'
  },
  trigger: {
    type: definePropType<Trigger>([String]),
    values: ['hover', 'click'],
    default: 'hover'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  arrow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'hover'
  },
  type: {
    type: String,
    values: ['', 'card'],
    default: '',
  },
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal'
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
}

export type CarouselProps = ExtractPropTypes<typeof carouselProps>

export const carouselEmits = {
  change: (current: number, prev: number) => [current, prev].every(isNumber),
}
export type CarouselEmits = typeof carouselEmits
export type CarouselInstance = InstanceType<typeof Carousel>