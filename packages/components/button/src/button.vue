<template>
  <button class="vi-button" :class="buttonStyle" :disabled="disabled" @click="handleClick">
    <span v-if="icon">
      <i v-if="iconName && !loading" :class="iconName" />
    </span>
    <slot />
  </button>
</template>

<script lang="ts" setup name="ViButton">
import "../style/index";
import { computed,toRefs } from "vue";
import { buttonProps, buttonEmits } from './button'


const props = defineProps(buttonProps)

const { type, plain, disabled, round,
  active, size, circle, icon, text, bg, loading } = toRefs(props)


const buttonStyle = computed(() => {
  return {
    [`vi-button--${type.value}`]: type,
    "is-plain": plain,
    "is-disabled": disabled,
    "is-round": round,
    "is-active": active,
    [`vi-button--${size.value}`]: size,
    "is-circle": circle,
    "is-text": text,
    "is-bg": bg,
  };
});


const emit = defineEmits(buttonEmits)

const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}

const iconName = computed(() => {
  return `vi-icon-${icon.value}`
})

</script>
