<template>
  <form :class="formClasses">
    <slot/>
  </form>
</template>


<script setup lang='ts'>
import {computed} from 'vue'

defineOptions({name:"ViForm"})

const formClasses = computed(()=>{
  return {
    
  }
})
</script>


<style lang='scss' scoped>
</style>
