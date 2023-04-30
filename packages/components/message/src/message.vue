<template>
  <Transition 
    name="message-fade"
    @before-leave="beforeLeave"
    @after-leave="$emit('destroy')"
  >
    <div 
      v-show="visible"
      :class="messageCls"
      :style="styles"
      @mouseenter="resetTime"
    >
      <vi-icon v-if="icon"  :name="icon"  class="vi-message__icon"/>
      <vi-icon v-else :name="iconName" class="vi-message__icon"/>
      <slot>
        <span v-if="!dangerouslyUseHTMLString" class="vi-message__content">{{ message }}</span>
        <span v-else class="vi-message__content" v-html="message"></span>
      </slot>
      <vi-icon v-if="closeable" name="close" @click="close" class="vi-message__close"/>
    </div>
  </Transition>
</template>

<script setup lang='ts'>
import {messageProps,messageEmits} from './message';
import '../style/index';
import { ViIcon } from '../../icon';
import { computed, onMounted, onUnmounted, ref } from 'vue';

defineOptions({name:"ViMessage"})

const visible = ref(false)

const props = defineProps(messageProps)
const emit = defineEmits(messageEmits)

const beforeLeave = () => {
  emit('close');
}

const close = ()=>{
  visible.value = false
}

onMounted(()=>{
  visible.value = true
  startTimerFn()
})

// eslint-disable-next-line no-undef
let timer: null | NodeJS.Timeout = null;

const startTimerFn = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
};

const resetTime = ()=>{
  clearTimeout(Number(timer));
  startTimerFn()
}

onUnmounted(() => {
  clearTimeout(Number(timer));
});

const iconMap:any  = {
  info:'info-circle-fill',
  success:'check-circle-fill',
  error:'close-circle-fill',
  warning:'warning-circle-fill'
}

const iconName = computed(()=>{
  return iconMap[props.type]
})

const messageCls = computed(()=>{
  return {
    'vi-message':true,
    [`vi-message--${props.type}`]:props.type,
    [props.customClass]:props.customClass,
    'is-center':props.center
  }
})

const styles = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex
}));

</script>