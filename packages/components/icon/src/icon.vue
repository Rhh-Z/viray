<template>
  <i :class="iconCls"></i>
</template>

<script setup lang='ts' name="ViIcon">
import {computed} from 'vue';
import '../style/index';
import { iconProps } from './icon';

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