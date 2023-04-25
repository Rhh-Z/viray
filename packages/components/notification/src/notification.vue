<template>
  <transition 
    name="notification-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div 
      v-show="visible"
      :class="notificationCls"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      @click="onClick"
    >
      <vi-icon v-if="props.type" :name="iconType" :class="iconCls" style="font-size: 24px;"/>
      <div class="vi-notification__group">
        <h2 class="vi-notification__title" v-text="title"/>
        <div 
          v-show="message"
          class="vi-notification__content"
          :style="!!title ? undefined : { margin: 0 }"
        >
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <p v-else v-html="message" />
          </slot>
      </div>
      <vi-icon v-if="closeable" :name="icon" class="vi-notification__close" @click="close"/>
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts' name="ViNotification">
import { notificationEmits, notificationProps } from './notification';
import { ViIcon } from '../../icon'
import '../style/index';
import { computed, CSSProperties, onMounted,onUnmounted,ref } from 'vue';

const visible = ref(false)

let timer: null| NodeJS.Timeout = null;

const props = defineProps(notificationProps)
defineEmits(notificationEmits)

type StringKey = Record<string,string>

const iconMap:StringKey = {
  'success':'check-circle-fill',
  'info':'info-circle-fill',
  'warning':'warning-circle-fill',
  'error':'close-circle-fill'
}

const iconType = computed(()=>{
  return iconMap[props.type]
})

const verticalProperty = computed(()=>
  props.position.startsWith('top') ? 'top' : 'bottom'
)

const positionStyle = computed<CSSProperties>(()=>{
  return {
    [verticalProperty.value]: `${props.offset}px`,
    'zIndex':props.zIndex,
  }
})

const notificationCls = computed(()=>{
  return {
    'vi-notification':true,
    'customClass':props.customClass,
    'right':props.position.endsWith('right'),
    'left':props.position.endsWith('left')
  }
})

const iconCls = computed(()=>{
  return {
    'vi-notification__icon':true,
    [`is-${props.type}`]:props.type
  }
})

onMounted(() => {
  visible.value = true
  startTimer()
})

function startTimer() {
  if (props.duration > 0) {
    timer = setTimeout(()=>{
      visible.value = false
    },props.duration)
  }  
}

function close () {
  visible.value = false
}

const clearTimer = ()=>{
  clearTimeout(Number(timer));
}

onUnmounted(() => {
  clearTimeout(Number(timer));
});

defineExpose({
  visible,
  close,
})
</script>

