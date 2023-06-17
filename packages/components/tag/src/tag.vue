<template>
  <span 
    v-if="!disableTransitions && visible" 
    :class="tagCls"
    :style="{ backgroundColor: color }"
  >
    <span class="vi-tag__content">
      <slot />
    </span>
    <vi-icon 
      v-if="closable" 
      name="close" 
      class="vi-tag--close"
      @click.stop="handleClose"
    />
  </span>
  <transition 
    v-else-if="disableTransitions && visible" 
    name="tag-fade" 
    appear
  >
    <span
      :class="tagCls"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span class="vi-tag__content">
        <slot />
      </span>
      <vi-icon 
        v-if="closable" 
        name="close" 
        class="vi-tag--close" 
        @click.stop="handleClose" 
      />
    </span>
  </transition>
</template>

<script setup lang='ts' name="ViTag">
import { computed } from 'vue';
import {tagProps,tagEmits} from './tag';
import '../style/index';

const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const tagCls = computed(()=>{
  const {size, type, hit, effect, closable, round } = props
  return {
    'vi-tag':true,
    "is-round":round,
    "is-closable":closable,
    // hit描边
    "is-hit":hit,
    [`vi-tag--${size}`]:size,
    [`vi-tag--${type}`]:type,
    [`vi-tag--${effect}`]:effect,
  }
})

const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}

</script>