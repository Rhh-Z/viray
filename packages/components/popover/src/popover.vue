<template>
  <span class="vi-popover__container">
    <template v-if="$slots.reference">
      <slot name="reference"/>
    </template>
    <transition name="popover-fade">
      <div 
        v-show="visible"
        :class="popoverCls"
        ref="popoverRef"
        :style="popoverSty"
        @update:visible="onUpdateVisible"
        @before-show="beforeEnter"
        @before-hide="beforeLeave"
        @show="afterEnter"
        @hide="afterLeave"
      >
        <div v-if="title" class="vi-popover__title" role="title">
          {{ title }}
        </div>
         <template v-else-if="$slots.title">
          <slot name="title"/>
        </template>
        <div v-if="content" class="vi-popover__content" role="content">
          {{ content }}
        </div>
        <template v-else-if="$slots.content">
          <slot name="content"/>
        </template>
      </div>
    </transition>
  </span>
  
</template>


<script setup lang='ts' name="ViPopover">
import { isString } from 'lodash-unified';
import { computed,CSSProperties,ref } from 'vue';
import '../style/index';
import {popoverProps,popoverEmits} from './popover';

const popoverRef = ref()

const props = defineProps(popoverProps)
const emit = defineEmits(popoverEmits)

const updateEventKeyRaw = `onUpdate:visible` as const

const onUpdateVisible = computed(() => {
  return props[updateEventKeyRaw]
})

const beforeEnter = () => {
  emit('before-enter')
}
const beforeLeave = () => {
  emit('before-leave')
}

const afterEnter = () => {
  emit('after-enter')
}

const afterLeave = () => {
  emit('update:visible', false)
  emit('after-leave')
}

const popoverCls = computed(()=>{
  return {
    'vi-popover':true,
    [`is-${props.placement.split('-')[0]}`]:props.placement
  }
})

const popoverSty = computed<CSSProperties>(()=>{
  return {
    width:isString(props.width) ? props.width : `${props.width}px`
  }
})
</script>
