<template>
  <transition name="vi-alert-fade">
    <div class="vi-alert" :class="alertCls" v-show="visible">
      <vi-icon :name="iconName" class="vi-alert__icon" v-if="showIcon" />
      <div class="vi-alert__content">
        <span v-if="title || $slots.title" class="vi-alert__title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="vi-alert__description" v-if="description || $slots.default">
          <slot>{{ description }}</slot>
        </p>
        <vi-icon v-if="closable" name="close" class="vi-alert__close" @click="handleClose" />
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts' name="ViAlert">
import { ref, computed } from 'vue';
import { alertEmits, alertProps, iconMaps } from './alert';
import { ViIcon } from '../../icon';
import '../style/index';

const visible = ref(true)
const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const alertCls = computed(() => {
  return {
    [`vi-alert--${props.type}`]: props.type,
    "is-center": props.center,
  }
})

const iconName = computed(() => {
  if (iconMaps[props.type] === 'success') return `check-circle-fill`;
  if (iconMaps[props.type] === 'error') return `close-circle-fill`;
  return `${iconMaps[props.type]}-circle-fill`;
})

const handleClose = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}

</script>
