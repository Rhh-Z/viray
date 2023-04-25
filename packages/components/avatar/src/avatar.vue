<template>
  <span :class="avatarClass" :style="sizeStyle">
    <img 
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      @error="handleError"
    />
    <vi-icon :name="icon" v-else-if="icon"/>
    <slot v-else />
  </span>
</template>


<script setup lang='ts' name="ViAvatar">
import {avatarEmits, avatarProps}from './avatar';
import '../style/index'
import { computed, CSSProperties, watch } from 'vue'
import { ref } from 'vue'
import { ViIcon } from '@viray/components/icon'
import { isNumber, isString } from 'lodash';

const COMPONENT_NAME = 'vi-avatar'

const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const hasLoadError = ref(false)

const avatarClass = computed(()=>{
  const {size,icon,shape} = props
  const classList = [COMPONENT_NAME]
  if(isString(size)) classList.push(`${COMPONENT_NAME}--${size}`)
  if(icon) classList.push(`${COMPONENT_NAME}--icon`)
  if(shape) classList.push(`${COMPONENT_NAME}--${shape}`)
  
  return classList
})

const sizeStyle = computed<CSSProperties>(()=>{
  const {size} = props
  return isNumber(size)
  ? {
    width:`${size}px`,
    height:`${size}px`
  } : {
    width:size,
    height:size
  }
})

// 如果scr路径改变需要将其重新设置为false
watch(
  () => props.src,
  () => (hasLoadError.value = false)
)

const handleError = (event: Event)=>{
  hasLoadError.value = true
  emit('error', event)
}

</script>

<style lang="scss">
.vi-avatar > img{
  object-fit: v-bind(fit);
}
</style>
