<template>
  <i :class="iconCls" :style="iconStyle">
    <slot/>
  </i>
</template>

<script setup lang='ts' name="ViIcon">
import {CSSProperties, computed} from 'vue';
import '../style/index';
import { iconProps } from './icon';
import { isNumber } from 'lodash-unified';

const props = defineProps(iconProps)

const iconCls = computed(()=>{
  return {
    [`vi-icon-${props.name}`]: props.name,
    [`vi-icon--${props.size}`]:props.size
  }
})

const iconStyle = computed<CSSProperties>(()=>{
  return {
    color:props.color,
    fontSize: isNumber(props.size) ? `${props.size}px` : props.size,
  }
})
</script>