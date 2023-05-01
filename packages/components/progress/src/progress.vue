<template>
  <div
    :class='progressCls'
    :aria-valuenow="percentage"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div v-if="type=== 'line'" class="vi-progress-bar"
      :style="{ height: `${strokeWidth}px` }"
    >
      <div class="vi-progress-bar__outer">
        <div v-if="type=== 'line'"
          :class="innerCls"
          :style="barStyle"
        >
          <div v-if="(showText || $slots.default) && textInside"
            class="vi-progress-bar__innerText"
            :style="{ fontSize: `${progressTextSize}px` }"
          >
            <slot :percentage="percentage">
              <span>{{ content }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="vi-progress vi-progress-circle"
    :style="{ height: `${width}px`, width: `${width}px` }">
      <svg viewBox="0 0 100 100">
        <path 
          class="vi-progress-circle vi-progress-track"
          :d="trackPath"
          :stroke="'#e5e9f2'"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"
        >
        </path>
        <path
          class="vi-progress-circle vi-progress-path"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :opacity="percentage ? 1 : 0"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        />
      </svg>
    </div>
    <div v-if="(showText || $slots.default) && !textInside"
      class="vi-progress-bar__text"
      :style="{ fontSize: `${progressTextSize}px` }"
    >
      <slot :percentage="percentage">
        <span v-if="!status">{{ content }}</span>
        <vi-icon v-else :name="iconStatus"></vi-icon>
      </slot>
    </div>
  </div>
</template>

<script setup lang='ts' name="ViProgess">
import {computed, CSSProperties} from 'vue';
import { ProgressColor, progressProps } from './progress';
import '../style/index';
import { isFunction,isString } from 'lodash-unified';

const props = defineProps(progressProps)

const progressCls = computed(()=>{
  return {
    'vi-progress':true,
    [`vi-progress--${props.type}`]: props.type,
    "vi-progress--text-inside":props.textInside,
    [`is-${props.status}`]:props.status
  }
})


const innerCls = computed(()=>{
  return {
    "vi-progress-bar__inner":true,
    "vi-progress-bar__inner--indeterminate":props.indeterminate
  }
})


const content = computed(() => props.format(props.percentage))

const STATUS_COLOR_MAP: Record<string, string> = {
  success: '#13ce66',
  exception: '#ff4949',
  warning: '#e6a23c',
  default: '#20a0ff',
}

const iconStatus = computed(()=>{
  if(props.status === 'warning') {
    return 'warning-circle-fill'
  }
  if(props.type === 'line') {
    return props.status === 'success' ? 'check-circle-fill' : 'close-circle-fill'
  }else {
    return props.status === 'success' ? 'check-circle' : 'close-circle'
  }
})

const progressTextSize = computed(() => {
  return props.type === 'line'
    ? 12 + props.strokeWidth * 0.3
    : props.width * 0.111111 + 2
})

const relativeStrokeWidth = computed(() =>
  ((props.strokeWidth / props.width) * 100).toFixed(1)
)

const radius = computed(() => {
  if (['circle', 'dashboard'].includes(props.type)) {
    return Number.parseInt(
      `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
      10
    )
  }
  return 0
})

const trackPath = computed(()=>{
  const r = radius.value
  const isDashboard = props.type === 'dashboard'
  return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
          `
})

const perimeter = computed(() => 2 * Math.PI * radius.value)

const rate = computed(() => (props.type === 'dashboard' ? 0.75 : 1))

const strokeDashoffset = computed(() => {
  const offset = (-1 * perimeter.value * (1 - rate.value)) / 2
  return `${offset}px`
})

const trailPathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
}))

const circlePathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${
    perimeter.value * rate.value * (props.percentage / 100)
  }px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
  transition:
    'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s',
}))

const stroke = computed(() => {
  let ret: string
  if (props.color) {
    ret = getCurrentColor(props.percentage)
  } else {
    ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default
  }
  return ret
})

const barStyle = computed<CSSProperties>(() => ({
  width: `${props.percentage}%`,
  animationDuration: `${props.duration}s`,
  backgroundColor: getCurrentColor(props.percentage),
}))

function getColors(color: ProgressColor[]) {
  const span = 100 / color.length
  const seriesColors = color.map((seriesColor, index) => {
    if (isString(seriesColor)) {
      return {
        color: seriesColor,
        percentage: (index + 1) * span,
      }
    }
    return seriesColor
  })
  return seriesColors.sort((a, b) => a.percentage - b.percentage)
}

const getCurrentColor = (percentage: number) => {
  const { color } = props 
  if (isFunction(color)) {
    return color(percentage)
  } else if (isString(color)) {
    return color
  } else {
    const colors = getColors(color)
    for (const color of colors) {
      if (color.percentage > percentage) return color.color
    }
    return colors[colors.length - 1]?.color
  }
}
</script>