<template>
  <div 
    :class="dividerCls"
    :style="dividerStyle"
    role="separator"
  >
  <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="textCls"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts' name="ViDivider">
import { CSSProperties, computed } from 'vue'
import { dividerProps } from './divider'
import '../style/index'
const props = defineProps(dividerProps)

const COMPONENT_NAME = 'vi-divider'

const dividerCls = computed(()=>{
  return {
    [COMPONENT_NAME]:true,
    [`${COMPONENT_NAME}--${props.direction}`]:props.direction
  }
})

const textCls = computed(()=>{
  return {
    [`${COMPONENT_NAME}__text`]:true,
    [`is-${props.contentPosition}`]:props.contentPosition
  }
})

const dividerStyle = computed<CSSProperties>(()=>{
  return {
    'border-top': `2px #dcdfe6 ${props.borderStyle}`
  }
})
</script>
