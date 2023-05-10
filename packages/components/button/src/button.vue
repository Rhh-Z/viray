<template>
  <button 
    ref="_ref"
    class="vi-button"
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

<script lang="ts" setup name="ViButton">
import "../style/index";
import { computed,ref } from "vue";
import { buttonProps, buttonEmits } from './button';

const props = defineProps(buttonProps)

const emit = defineEmits(buttonEmits)

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

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

const iconName = computed(() => {
  return `vi-icon-${props.icon}`
})

const _ref = ref<HTMLButtonElement>()
defineExpose({
  /** @description button html element */
  ref: _ref,
})

</script>