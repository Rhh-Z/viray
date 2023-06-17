<template>
  <button 
    ref="_ref" 
    class="vi-button" 
    :type="nativeType" 
    :autofocus="autoFocus" 
    :class="buttonStyle"
    :disabled="_disabled"
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
import { computed, ref } from "vue";
import { buttonProps, buttonEmits } from './button';
import { useButton } from "./use-button";

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { _disabled, _size, _type } = useButton(props)

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

const buttonStyle = computed(() => {
  return {
    [`vi-button--${_type.value}`]: _type.value,
    "is-plain": props.plain,
    "is-disabled": _disabled.value,
    "is-round": props.round,
    "is-active": props.active,
    [`vi-button--${_size.value}`]: _size.value,
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