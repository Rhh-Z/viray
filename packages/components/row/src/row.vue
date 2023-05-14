<template>
  <component class="vi-row" :is="tag" :class="rowKls" :style="rowStyle">
    <slot />
  </component>
</template>

<script setup lang='ts' name="ViRow">
import { computed, CSSProperties, provide } from 'vue';
import { rowContextKey } from './constants';
import { rowProps } from './row';
import '../style/index';

const props = defineProps(rowProps);
const gutter = computed(() => props.gutter)

provide(rowContextKey, { gutter });

const rowStyle = computed(() => {
  const styles: CSSProperties = {}
  if (!gutter.value) {
    return styles
  }
  styles.marginLeft = styles.marginRight = `-${props.gutter / 2}px`
  return styles
})

const rowKls = computed(() => [
  props.justify !== 'start' ? `is-justify-${props.justify}` : '',
  props.align !== 'top' ? `is-align-${props.align}` : '',
])

</script>
