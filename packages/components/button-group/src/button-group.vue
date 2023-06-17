<template>
  <div class="vi-button-group">
    <slot />
  </div>
</template>


<script setup lang='ts' name="ViButtonGroup">
import { buttonGroupProps } from './button-group';
import { buttonGroupContextKey } from './constant'
import { provide, reactive,ref } from 'vue';
import '../style/';
const props = defineProps(buttonGroupProps)

provide(
  buttonGroupContextKey,
  reactive({
    size: ref(props.size),
    type: props.type,
    disabled: props.disabled
  })
)


</script>