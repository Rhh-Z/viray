<template>
  <div 
    :class="rootCls"
    ref="root"
    :style="{width:width}"
  >
  <div ref="container" :class="`${NAME}__container`" :style="{height:height}">
    <!-- arrow left -->
    <button 
      type="button"
      :class="`${NAME}__arrow ${NAME}__arrow--left`"
      @click="throttlePrev"
      @mouseleave="handleMouseLeave"
    >
      <vi-icon name="arrowleft" />
    </button>
    <!-- arrow right -->
    <button
      type="button"
      :class="`${NAME}__arrow ${NAME}__arrow--right`"
      @click="throttleNext"
      @mouseleave="handleMouseLeave"
    >
      <vi-icon name="arrowright" />
    </button>
    <slot />
  </div>
  <ul :class="indicatorsCls">
    <li 
      v-for="(item,index) in items"
      :key="index"
      :class="[indicatorCls,activeIndex === index ? 'is-active':'']"
      ref="indicator"
      @mouseenter="handleIndicatorEnter(index)"
      @click="handleIndicatorClick(index)"
      @mouseleave="handleMouseLeave"
    >
      <button :class="`${NAME}__button`"/>
    </li>
  </ul>
  </div>
</template>

<script setup lang='ts' name="ViCarousel">
import { carouselEmits, carouselProps } from './carousel';
import '../style/index'
import { computed,provide,useSlots } from 'vue';
import {ViIcon} from '../../icon';
import { useCarousel } from './use-carousel';
import {carouselContextKey} from './constants'

const NAME = 'vi-carousel'

const props = defineProps(carouselProps)
const emit = defineEmits(carouselEmits)

const slot = useSlots();
const items = slot.default && slot.default()

const {
  handleIndicatorEnter,
  handleIndicatorClick,
  throttleNext,
  throttlePrev,
  activeIndex,
  handleMouseLeave
} = useCarousel(props,emit)


const indicatorsCls = computed(()=>{
  return {
    [`${NAME}__indicators`]:true,
    [`${NAME}__indicators--${props.direction}`]:props.direction,
  }
})

const rootCls = computed(()=>{
  return {
    'vi-carousel':true,
    [`vi-carousel--${props.direction}`]:props.direction,
    [`is-${props.arrow}`]:props.arrow
  }
})

const indicatorCls = computed(()=>{
  return {
    [`${NAME}__indicator`]:true,
    [`${NAME}__indicator--${props.direction}`]:props.direction,
  }
})

provide(carouselContextKey,{
  items,
  activeIndex
})
provide('activeIndex',activeIndex)
</script>