<template>
  <button class="vi-button"
   :autofocus="autoFocus" 
   :class="buttonStyle" 
   :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon">
      <i v-if="iconName && !loading" :class="iconName" />
    </span>
    <slot />
  </button>
</template>

<script lang="ts" setup>
import "../style/index";
import { computed } from "vue";
import { buttonProps, buttonEmits } from './button'

defineOptions({ name: "ViButton" });

const props = defineProps(buttonProps)

const buttonStyle = computed(() => {
  return {
    [`vi-button--${props.type}`]: props.type,
    "is-plain": props.plain,
    "is-disabled": props.disabled,
    "is-round": props.round,
    "is-active": props.active,
    [`vi-button--${props.size}`]: props.size,
    "is-circle": props.circle,
    "is-text": props.text,
    "is-bg": props.bg,
  };
});


const emit = defineEmits(buttonEmits)

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

const iconName = computed(() => {
  return `vi-icon-${props.icon}`
})

</script>