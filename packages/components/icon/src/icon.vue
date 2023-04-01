<template>
  <i :class="`vi-icon-${name}`" :size="size" :color="color"></i>
</template>

<script setup lang='ts' name="ViIcon">
import '../style/index';
import { iconProps } from './icon';

defineProps(iconProps)
</script>