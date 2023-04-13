<template>
  <component :is="tag" :class="checkboxGroupCls">

    <solt />
  </component>
</template>

<script setup lang='ts'>
import { computed, provide, toRefs, watch } from 'vue'
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group';
import { checkboxGroupContextKey } from '@viray/components/checkbox/src/constant';
import { pick } from 'lodash-unified';

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const checkboxGroupCls = computed(() => {
  return {

  }
})

provide(checkboxGroupContextKey,{
  ...pick(toRefs(props),[
    'size',
    'min',
    'max',
    'disabled'
  ]),
  modelValue,
  changeEvent,
})

watch(
  ()=> props
)

</script>