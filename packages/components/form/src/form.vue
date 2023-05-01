<template>
  <form :class="formClasses">
    <slot/>
  </form>
</template>


<script setup lang='ts' name="ViForm">
import {computed} from 'vue'

const formClasses = computed(()=>{
  return {
    
  }
})
</script>


<style lang='scss' scoped>
</style>
