<template>
  <Transition name="backtop-fade">
    <div 
      v-if="visible" 
      class="vi-backtop" 
      :style="backtopStyle"
      @click="handleClick"
    >
      <slot>
        <vi-icon :name="icon"></vi-icon>
      </slot>
    </div>
  </Transition>
</template>


<script setup lang='ts' name="ViBacktop">
import { computed, CSSProperties } from 'vue';
import '../style/index'
import { backtopProps,backtopEmits } from './backtop';
import {useBacktop} from './use-backtop';
import {ViIcon} from '../../icon';

const COMPONENT_NAME = 'ViBacktop'

const props = defineProps(backtopProps)
const emits = defineEmits(backtopEmits)

const { visible,handleClick } = useBacktop(props,emits,COMPONENT_NAME)


const backtopStyle = computed<CSSProperties>(()=>({
  right: `${props.right}px`,
  bottom:`${props.bottom}px`
}))

</script>