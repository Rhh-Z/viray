<template>
  <component 
  :is="!hasOwnLabel ? 'span' : 'label'"
    :class="compCls"
    :aria-controls="indeterminate ? controls : null"
  >
    <span
      :class="spanCls"
      :tabindex="indeterminate ? 0 : undefined"
      :role="indeterminate ? 'checkbox' : undefined"
      :aria-checked="indeterminate ? 'mixed' : undefined"
    >
      <input 
        v-if="trueLabel || falseLabel"
        id="inputId"
        v-model="model"
        type="checkbox"
        :name="name"
        :class="`${COMPONENT_NAME}__original`"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :checked="isChecked"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      >
      <input
        v-else
        id="inputId"
        v-model="model"
        :class="`${COMPONENT_NAME}__original`"
        :value="label"
        :disabled="isDisabled"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :name="name"
        :checked="isChecked"
        @change="handleChange"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <span v-if="indeterminate" :class="`${COMPONENT_NAME}__inner`" />
    </span>
    <span 
      v-if="hasOwnLabel || label" 
      role="label" 
      :class="`${COMPONENT_NAME}__label`"
    >
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </component>
</template>

<script setup lang='ts' name="ViCheckbox">
import { computed,useSlots } from 'vue';
import '../style/index';
import { checkboxEmits, checkboxProps } from './checkbox';
import { useCheckbox } from './composables/use-checkbox'

const COMPONENT_NAME = 'vi-checkbox'
const slots = useSlots()

const props = defineProps(checkboxProps)
defineEmits(checkboxEmits)

const {
  model,
  hasOwnLabel,
  isChecked,
  isFocused,
  isDisabled,
  checkboxSize,
  handleChange
} = useCheckbox(props,slots)

const compCls = computed(()=>{
  return {
    [COMPONENT_NAME]:true,
    [`${COMPONENT_NAME}--${checkboxSize.value}`]:checkboxSize.value,
    'is-disabled':isDisabled.value,
    'is-border':props.border,
    // 'is-focus':isFocused.value,
  }
})

const spanCls = computed(()=>{
  return {
    [`${COMPONENT_NAME}__input`]:true,
    'is-indeterminate':props.indeterminate,
    'is-checked':isChecked.value,
    'is-focus':isFocused.value,
  }
})

</script>
