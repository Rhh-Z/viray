<template>
  <div 
    ref="breadcrumb"
    aria-label="Breadcrumb"
    class="vi-breadcrumb"
    role="navigation"
  >
    <slot/>
  </div>
</template>


<script setup lang='ts'>
import { onMounted,provide,ref } from 'vue';
import { breadcrumbProps } from './breadcrumb';
import { breadcrumbKey } from './constants';
import '../style/index'

defineOptions({name:"ViBreadcrumb"})

const props = defineProps(breadcrumbProps)

const breadcrumb = ref<HTMLDivElement>()

provide(breadcrumbKey,props)

onMounted(()=>{
  const items = breadcrumb.value?.querySelectorAll(`vi-breadcrumb--item`)
  if (items?.length) {
    items[items.length - 1].setAttribute('aria-current', 'page')
  }
})

</script>
