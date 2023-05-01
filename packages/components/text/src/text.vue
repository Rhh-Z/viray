<template>
  <component :is="tag" class="vi-text" :class="textCls">
    <slot />
  </component>
</template>


<script setup lang='ts' name="ViText">
import { computed } from 'vue';
import '../style/index';
import { textProps } from './text';

const props = defineProps(textProps)

const textCls = computed(() => {
  return {
    [`vi-text--${props.type}`]: props.type,
    [`vi-text--${props.size}`]: props.size,
    "is-kbd": props.kbd,
    "is-truncated": props.truncated,
  }
})

</script>
