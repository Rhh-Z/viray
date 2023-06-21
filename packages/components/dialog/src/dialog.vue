<template>
  <Teleport to="body" :disabled="!appendToBody">
    <transition 
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <div class="vi-mask" v-show="visible">
        <div role="dialog" :class="dialogCls" :style="dialogsty">
          <div class="vi-dialog__header">
            <slot v-if="$slots.title" name="title"/>
            <span v-else class="vi-dialog__title">{{ props.title }}</span>
            <span v-if="showClose" class="vi-dialog__close" @click="handleClose">
                <vi-icon name="close" />
            </span>
          </div>
          <div class="vi-dialog__content">
            <slot v-if="$slots.content" name="content"/>
            <slot v-else />
          </div>
          <div v-if="$slots.title || props.title" class="vi-dialog__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang='ts' name="ViDialog">
import { computed, CSSProperties } from 'vue';
import { dialogProps , dialogEmits} from './dialog'
import {isString} from 'lodash-unified'
import '../style/index';
import { useDialog } from './use-dialog';

const props =defineProps(dialogProps)
defineEmits(dialogEmits)

const dialogsty  = computed<CSSProperties>(()=>({
  width: isString(props.width) ? props.width : `${props.width}px`,
  scrollbarWidth: props.lockScroll ? 'none' : 'auto',
}))

const {
  visible,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose
} = useDialog(props)

const dialogCls = computed(()=>{
  return {
    'vi-dialog' :true,
    'is-center':props.center
  }
})

</script>
