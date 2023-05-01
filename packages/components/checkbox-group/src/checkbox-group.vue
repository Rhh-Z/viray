<template>
  <component :is="tag" class="vi-checkbox-group">
    <slot />
  </component>
</template>

<script setup lang='ts' name="ViCheckboxGroup">
import { computed, nextTick, provide, toRefs } from 'vue'
import { checkboxGroupProps, checkboxGroupEmits, CheckboxGroupValueType } from './checkbox-group';
import { checkboxGroupContextKey } from '@viray/components/checkbox/src/constant';
import { pick } from 'lodash-unified';
import { UPDATE_MODEL_EVENT } from '@viray/constants/events';
import '../style/index';

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit('change', value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  },
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

</script>