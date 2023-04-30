import {
  getCurrentInstance,
  ComponentInternalInstance,
  SetupContext,
  ref,
  watch,
  unref,
  computed,
} from "vue";
import { CarouselEmits, CarouselProps } from "./carousel";
import { throttle } from 'lodash-unified';

const THROTTLE_TIME = 500

export const useCarousel = (
  props: CarouselProps,
  emit: SetupContext<CarouselEmits>['emit'],
) => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  const items = instance.slots.default! && instance.slots.default()
  const activeIndex = ref(0)
  const prevIndex = computed(() => {
    return activeIndex.value - 1 < 0 ? items.length - 1 : activeIndex.value - 1
  })

  const setIndex = (index: number) => {
    activeIndex.value = index
  }

  const autoplay = () => {
    if (activeIndex.value === items.length - 1) {
      activeIndex.value = -1
    }
    activeIndex.value++
    emit('change', unref(activeIndex), unref(prevIndex))
  }

  const handleIndicatorEnter = (index: number) => {
    if (props.trigger === 'hover' && index !== activeIndex.value) {
      activeIndex.value = index
      handleMouseEnter()
    }
    emit('change', unref(activeIndex), unref(prevIndex))
  }

  const handleIndicatorClick = (index: number) => {
    if (props.trigger === 'click' && index !== activeIndex.value) {
      activeIndex.value = index
      handleMouseEnter()
    }
    emit('change', unref(activeIndex), unref(prevIndex))
  }

  const prev = () => {
    handleMouseEnter()
    if (activeIndex.value <= 0) {
      activeIndex.value = items?.length as number
    }
    activeIndex.value--
    emit('change', unref(activeIndex), unref(prevIndex))
  }

  const throttlePrev = throttle(prev, THROTTLE_TIME)

  const next = () => {
    handleMouseEnter()
    if (activeIndex.value === (items?.length as number) - 1) {
      activeIndex.value = -1
    }
    activeIndex.value++
    emit('change', unref(activeIndex), unref(prevIndex))
  }

  const throttleNext = throttle(next, THROTTLE_TIME)

  // 自动播放
  let intervalTimer = 0;

  const cleanIntervalTimer = () => {
    if (intervalTimer) {
      window.clearInterval(intervalTimer);
      intervalTimer = 0;
    }
  };

  const handleMouseEnter = () => {
    if (props.autoplay && props.pauseOnHover) {
      cleanIntervalTimer();
    }
  };

  const handleMouseLeave = () => {
    if (intervalTimer) return
    if (props.autoplay && props.pauseOnHover) {
      intervalTimer = window.setInterval(autoplay, props.interval);
    }
  };

  watch(
    () => props.autoplay,
    () => {
      if (props.autoplay) {
        intervalTimer = window.setInterval(autoplay, props.interval);
      }
    }, { immediate: true })

  return {
    handleIndicatorEnter,
    handleIndicatorClick,
    setIndex,
    activeIndex,
    handleMouseLeave,
    throttlePrev,
    throttleNext,
  }
}