<template>
  <div class="vi-button-group">
    <slot />
  </div>
</template>


<script setup lang='ts' name="ViButtonGroup">
import '../style/';
import { buttonGroupProps } from './button-group';
defineProps(buttonGroupProps)
</script>