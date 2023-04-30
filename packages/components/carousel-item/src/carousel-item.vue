<template >
    <div
    class="vi-carousel__item"
    :style="carouselItemStyle"
    ref="item"
  >
    <slot/>
  </div>
</template>

<script setup lang='ts'>
import {
  computed,
  CSSProperties,
  inject,
  ref
} from 'vue';
import '../style/index';
import { CarouselContext, carouselContextKey } from '@viray/components/carousel/src/constants';

defineOptions({name:"ViCarouselItem"})

const item = ref()

const { activeIndex } = inject(carouselContextKey) as CarouselContext

const carouselItemStyle = computed<CSSProperties>(()=>{
  if(item.value) {
    let items = Array.from(item.value.parentNode.children) as Array<HTMLElement>;
      items = items.filter((item:HTMLElement)=>{
      return item.className === 'vi-carousel__item'
    })

    for(let i =0;i<items.length;i++) {
      if(activeIndex.value === i) {
       items[i].style.transform = 'translateX(0%)'
      }else {
        items[i].style.transform = `translateX(${i+1}00%)`
      }
    } 
  }
  return {
  }
})

</script>
