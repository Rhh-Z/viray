<template>
  <component class="vi-col" :is="tag" :class="colClK" :style="style">
    <slot />
  </component>
</template>


<script setup lang='ts' name="ViCol">
import { computed, CSSProperties, inject, h } from 'vue';
import { colProps } from './col';
import { rowContextKey } from '@viray/components/row/src/constants';

import { isNumber } from '@viray/utils/common';
import '../style/index';

const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

const props = defineProps(colProps);

const colClK = computed(() => {
  const classes: string[] = []
  const pos = ['span', 'offset', 'pull', 'push'] as const

  pos.forEach((prop) => {
    const size = props[prop]
    if (isNumber(size)) {
      if (prop === 'span') classes.push(`vi-col-${props[prop]}`)
      else if (size > 0) classes.push(`vi-col-${prop}-${props[prop]}`)
    }
  })
  return classes
})

const style = computed(() => {
  const styles: CSSProperties = {}
  if (gutter.value) {
    styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
  }
  return styles
})

</script>