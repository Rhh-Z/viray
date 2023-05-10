<template>
  <div :class='continerCls'
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <template v-if="type !== 'textarea'">
      <!-- prepend slot -->
      <div v-if="$slots.prepend" class="vi-input__prepend">
        <slot name="prepend" />
      </div>
      <div :class="wrapperCls">
        <!-- prefix slot -->
        <span v-if="$slots.prefix" class="vi-input__prefix">
            <slot name="prefix" />
        </span>
        <!-- prefixIcon -->
        <span v-if="prefixIcon" class="vi-input__prefix">
          <vi-icon :name="prefixIcon"/>
        </span>
        <input
          class="vi-input__inner"
          ref="input"
          v-bind="$attrs"
          :autofocus="autofocus"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :class="inputInnerCls"
          :value="modelValue"
          :autocomplete="autocomplete"
          :aria-label="label"
          :tabindex="tabindex"
          :maxlength="maxlength"
          :minlength="minlength"
          :placeholder="placeholder"
          :disabled="disabled"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        />
      
        <!-- suffix slot -->
        <span
          v-if="suffixvisible"
          :class="suffixCls"
        >
          <slot name="suffix"/>
          <vi-icon 
            v-if="showClear"
            name="close-circle"
            @click="clear"
          />
          <div
            v-if="showPwdVisible"
            @click="handlePasswordVisible"
          >
          <vi-icon :name="passwordVisible ? 'eye': 'eye-close'" />
          </div>
          <span v-if="isWordLimitVisible" class="vi-int__count">
              <span class="vi-input__count-inner">
                {{ textLength }}/{{ props.maxlength }}
              </span>
          </span>
        </span>
        <!-- suffixIcon -->
        <span v-if="suffixIcon">
          <vi-icon :name="suffixIcon"/>
        </span>
      </div>
      <!-- append slot -->
      <div v-if="$slots.append" class="vi-input__append">
        <slot name="append" />
      </div>
    </template>
    <template v-else>
      <textarea
        class="vi-textarea__inner"
        :class="textareaCls"
        ref="textarea"
        v-bind="$attrs"
        :readonly="readonly"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-label="label"
        :tabindex="tabindex"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :minlength="minlength"
        :maxlength="maxlength"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @compositionstart="handleCompositionStart"
        @compositionupdate="handleCompositionUpdate"
        @compositionend="handleCompositionEnd"
      />
    </template>
  </div>
</template>

<script setup lang='ts' name="ViInput">
import { computed, nextTick, ref, shallowRef, useSlots } from 'vue';
import {inputProps,inputEmits} from './input'
import '../style/index';
import { isNil } from 'lodash-unified';
import { UPDATE_MODEL_EVENT } from '@viray/constants';
import { isKorean } from '@viray/utils';

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const slots = useSlots()
// const attrs = useAttrs()

const focused = ref(false)
const hovering = ref(false)
const passwordVisible = ref(false)
const isComposing = ref(false)
const textLength = computed(() => nativeInputValue.value.length)

const input = shallowRef<HTMLInputElement>()
const textarea = shallowRef<HTMLTextAreaElement>()

const _ref = computed(() => input.value || textarea.value)

const handleInput =async (event:Event)=>{  
  let { value } = event.target as TargetElement
  emit(UPDATE_MODEL_EVENT, value)
  emit('input', value)

  // ensure native input value is controlled
  await nextTick()
}

const clear = ()=>{
  emit(UPDATE_MODEL_EVENT, '')
  emit('change', '')
  emit('clear')
  emit('input', '')
}

const handleFocus = (event:FocusEvent)=>{
  focused.value = true
  emit('focus',event)
}

const handleBlur = (event:FocusEvent) =>{
  focused.value = false
  emit('blur',event)
}

const handleChange = (event:Event)=>{
  emit('change',(event.target as TargetElement).value)
}

const handleMouseEnter = (event:MouseEvent)=> {
  hovering.value = true
  emit('mouseenter',event)
}

const handleMouseLeave = (event:MouseEvent)=> {
  hovering.value = false
  emit('mouseenter',event)
}

const handleCompositionStart = (event:CompositionEvent) =>{
  isComposing.value =true
  emit('compositionstart',event)
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
  const text = (event.target as HTMLInputElement)?.value
  const lastCharacter = text[text.length - 1] || ''
  isComposing.value = !isKorean(lastCharacter)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing.value) {
    isComposing.value = false
    handleInput(event)
  }
}

const nativeInputValue = computed(() =>
  isNil(props.modelValue) ? '' : String(props.modelValue)
)

const showClear = computed(
  () =>
    props.clearable &&
    !props.disabled &&
    !props.readonly &&
    !!nativeInputValue.value &&
    (focused.value || hovering.value)
)


const suffixvisible = computed(
  ()=> 
    !!slots.suffix || 
    !!props.clearable ||
    showClear.value ||
    props.showPassword ||
    isWordLimitVisible.value
    // (!!validateState.value && needStatusIcon.value)
)

const showPwdVisible =computed(
  ()=>
    props.showPassword &&
    !props.disabled &&
    !props.readonly &&
    !!nativeInputValue.value &&
    (focused.value || hovering.value)
)

const isWordLimitVisible = computed(
  () =>
    props.showWordLimit &&
    (props.type === 'text' || props.type === 'textarea') &&
    !props.disabled &&
    !props.readonly &&
    !props.showPassword
)


const handlePasswordVisible = () => {  
  passwordVisible.value = !passwordVisible.value
  focus()
}

const focus = async () => {
  // // see: https://github.com/ElemeFE/element/issues/18573
  // await nextTick()
  _ref.value?.focus()
}

const continerCls = computed(
  ()=>
  props.type !== 'textarea' ? ['vi-input',{[`vi-input--${props.size}`]: props.size }] : 'vi-textarea'
)

const wrapperCls = computed(()=>{
  return {
    "vi-input__wrapper":true,
    ['is-prepend']:slots.prepend,
    ['is-append']:slots.append
  }
})

const inputInnerCls = computed(()=>{
  return {
    'is-disabled':props.disabled
  }
})

const suffixCls = computed(
  ()=>
  (showClear.value || showPwdVisible.value) ? 'vi-input__suffix' : ''
)

const textareaCls =computed(()=>{
  return {
    ['is-disabled']:props.disabled
  }
})

const blur = () => _ref.value?.blur()

const select = () => {
  _ref.value?.select()
}
// const clear = () => _ref.value.clear

defineExpose({
  /** @description HTML input element native method */
  blur,
  /** @description HTML input element native method */
  focus,
  /** @description clear input value */
  clear,
  /** @description HTML element, input or textarea */
  ref: _ref,
  /** @description HTML input element native method */
  select,
  /** @description HTML input element */
  input,
  /** @description HTML textarea element */
  textarea
})

</script>