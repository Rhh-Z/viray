import { UPDATE_MODEL_EVENT } from "@viray/constants"
import { onMounted, watch } from "vue"
import { ComponentInternalInstance, getCurrentInstance, ref, SetupContext } from "vue"
import { DialogProps, DialogEmits } from "./dialog"

export const useDialog = (
  props: DialogProps
) => {
  const instance = getCurrentInstance() as ComponentInternalInstance
  const emit = instance.emit as SetupContext<DialogEmits>['emit']
  const visible = ref(false)
  const closed = ref(false)
  const rendered = ref(false) // when destroyOnClose is true, we initialize it as false vise versa

  const handleClose = () => {
    visible.value = false
  }

  const afterEnter = () => {
    emit('opened')
  }

  const afterLeave = () => {
    emit('opened')
    emit(UPDATE_MODEL_EVENT, false)
    if (props.destroyOnClose) {
      rendered.value = false
    }
  }

  const beforeLeave = () => {
    emit('close')
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false
      }
      visible.value = val
    }
  )

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true
      rendered.value = true // enables lazy rendering
      open()
    }
  })

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    visible,
    handleClose
  }
}