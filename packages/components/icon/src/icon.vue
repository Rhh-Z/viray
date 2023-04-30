<template>
  <i :class="iconCls">
    <slot/>
  </i>
</template>

<script setup lang='ts'>
import {computed} from 'vue';
import '../style/index';
import { iconProps } from './icon';

defineOptions({name:"ViIcon"})

const props = defineProps(iconProps)

const iconCls = computed(()=>{
  return {
    [`vi-icon-${props.name}`]: props.name,
    [`vi-icon--${props.size}`]:props.size
  }
})
</script>


<style lang="scss" scoped>
[class^='vi-icon-'] {
  color: v-bind(color);
  font-size: v-bind(size);
}
</style>