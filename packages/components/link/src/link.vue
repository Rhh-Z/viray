<template>
  <a 
    :class="linkStyle"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <vi-icon v-if="icon" :name="icon"/>
    <span class="vi-link__inner">
      <slot v-if="$slots.default"/>
    </span>
    <slot v-if="$slots.icon" name="icon"/>
  </a>
</template>

<script setup lang='ts' name="ViLink">
import { computed } from 'vue';
import { linkEmits, linkProps } from './link';
import '../style/index';

const props = defineProps(linkProps)

const emit = defineEmits(linkEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}

const linkStyle = computed(()=>{
  return {
    "vi-link":true,
    [`vi-link--${props.type}`]: props.type,
    "is-underline":props.underline,
    'is-disabled':props.disabled
  }
})
</script>