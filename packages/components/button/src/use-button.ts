import { computed, inject } from 'vue';
import { ButtonProps } from './button'
import { buttonGroupContextKey } from '@viray/components/button-group/src/constant';

export function useButton(
  props: ButtonProps,
) {

  const ButtonGroupContext = inject(buttonGroupContextKey, undefined)

  const _size = computed(() => {
    return ButtonGroupContext?.size || props.size
  })

  const _type = computed(() => {
    if (props.type !== 'default') return props.type
    else if (ButtonGroupContext?.type) return ButtonGroupContext?.type
    return 'default'
  })

  const _disabled = computed(() => {
    return ButtonGroupContext?.disabled || props.disabled
  })

  return {
    _size,
    _type,
    _disabled
  }
}