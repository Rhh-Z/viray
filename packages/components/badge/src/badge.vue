<template>
  <div class="vi-badge">
    <slot />
    <transition name="vi-badge-zoom-in-center">
      <sup v-text="content" :class="contentCls"></sup>
    </transition>
  </div>
</template>

<script setup lang='ts' name="ViBadge">
import { computed, useSlots } from 'vue';
import { badgeProps } from './badge';
import '../style/index';
import { isNumber } from 'lodash-unified';

const props = defineProps(badgeProps)
const slots = useSlots()

const contentCls = computed(() => {
  return {
    'vi-badge__content': true,
    [`vi-badge__content--${props.type}`]: props.type,
    'is-fixed': !!slots.default,
    'is-dot': props.isDot
  }
})

const content = computed<string>(() => {
  if (props.isDot) return ''

  if (isNumber(props.value) && isNumber(props.max)) {
    return props.max < props.value ? `${props.max}+` : `${props.value}`
  }

  return `${props.value}`
})

defineExpose({
  content,
})
</script>
