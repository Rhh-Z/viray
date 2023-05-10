<template>
  <div :class="cardCls">
    <div v-if="$slots.header || header" class="vi-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="vi-card__body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts' name="ViCard">
import { computed } from 'vue';
import { cardProps } from './card';
import '../style/index';

const props = defineProps(cardProps)

const cardCls = computed(()=>{
  return {
    'vi-card':true,
    [`is-${props.shadow}-shadow`]:props.shadow,
  }
})

</script>