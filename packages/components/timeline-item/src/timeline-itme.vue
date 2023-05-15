<template>
  <li :class="timelineItemCls">
    <div :class="COMPONENT_NAME + '__tail'" />

    <div 
      v-if="!$slots.dot" 
      :class="nodeStyle" 
      :style="{
        backgroundColor: color,
      }"
    >
      <vi-icon v-if="icon" :class="COMPONENT_NAME + '__icon'" :name="icon" />
    </div>

    <div v-if="$slots.dot" :class="COMPONENT_NAME + '__dot'">
      <slot name="dot" />
    </div>

    <div :class="COMPONENT_NAME + '__wrapper'">
      <div 
        v-if="!hideTimestamp && placement === 'top'"
        :class="timelineCls"
      >
        {{ timestamp }}
      </div>

      <div :class="COMPONENT_NAME + '__content'">
        <slot />
      </div>

      <div 
        v-if="!hideTimestamp && placement === 'bottom'"
        :class="timelineCls"
      >
        {{ timestamp }}
      </div>
    </div>
  </li>
</template>

<script setup lang='ts' name="ViTimelineItem">
import { computed } from 'vue';
import { timelineItemProps } from './timeline-item';
import '../style/index';

const COMPONENT_NAME = 'vi-timeline-item'

const props = defineProps(timelineItemProps)

const timelineItemCls = computed(() => {
  return {
    [COMPONENT_NAME]: true,
  }
})

const nodeStyle = computed(() => {
  return {
    [`${COMPONENT_NAME}__node`]: true,
    [`${COMPONENT_NAME}__node--${props.size}`]: props.size,
    [`${COMPONENT_NAME}__node--${props.type}`]: props.type,
    "is-hollow": props.hollow,
  }
})

const timelineCls = computed(()=>{
  return {
    [`${COMPONENT_NAME}__timestamp`]:true,
    [ `is-${props.placement}`]:props.placement
  }
})
</script>
