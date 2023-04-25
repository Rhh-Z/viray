import { onMounted, ref, SetupContext, shallowRef } from "vue"
import { BacktopEmits, BacktopProps } from "./backtop"
import { throwError } from "@viray/utils"
import { throttle } from "lodash"

export const useBacktop = (
  props: BacktopProps,
  emit: SetupContext<BacktopEmits>['emit'],
  componentName: string
) => {
  const el = shallowRef<HTMLElement>()
  const container = shallowRef<Document | HTMLElement>()
  const visible = ref(false)

  const handleScroll = () => {
    if (el.value) visible.value = (el.value.scrollTop >= props.visibilityHeight)
  }

  const throttleFn = throttle(handleScroll, 250, { trailing: false })

  addEventListener('scroll', () => {
    throttleFn()
  })

  const handleClick = (event: MouseEvent) => {
    el.value?.scrollTo({ top: 0, behavior: 'smooth' })
    emit('click', event)
  }

  onMounted(() => {
    container.value = document
    el.value = document.documentElement

    if (props.target) {
      el.value = document.querySelector<HTMLElement>(props.target) ?? undefined
      if (!el.value) {
        throwError(componentName, `target does not exist: ${props.target}`)
      }
      container.value = el.value
    }
  })

  return {
    visible,
    handleClick
  }
}