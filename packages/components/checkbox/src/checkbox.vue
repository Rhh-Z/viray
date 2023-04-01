<template>
  <component :is="!hsaOwnLabel && isLabledByFromItem ? 'span' : 'label'" class="vi-checkbox" :class="checkboxCls">
    <span class="vi-checkbox__input">
      <input id="inputId" type="checkbox" :name="name" v-model="model" :checked="isChecked" :disabled="disabled"
        :value="label" @change="handleChange">
    </span>

    <span class="vi-checkbox__label">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script setup lang='ts' name="ViCheckbox">
import { ref, computed, useSlots } from 'vue';
import { checkboxProps, checkboxEmits } from './checkbox';
import { useCheckbox } from './composables/use-checkbox';
import '../style/index';

const slots = useSlots()
const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)

const hsaOwnLabel = ref(false)
const isLabledByFromItem = ref(false)

const { model, isChecked, handleChange } = useCheckbox(props, slots)

const checkboxCls = computed(() => {

  return {
    'is-checked': isChecked,
    "is-disabled": props.disabled,
    [`vi-checkbox--${props.size}`]: props.size
  }
})


</script>

