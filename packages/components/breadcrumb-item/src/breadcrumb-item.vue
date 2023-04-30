<template>
  <span class="vi-breadcrumb-item">
    <span 
      ref="link"
      role="link"
      :class="breadcrumbItemCls"
      @click="onClick"
    >
      <slot/>
    </span>
    <vi-icon v-if="separatorIcon" :name="separatorIcon" class="vi-breadcrumb-item__separator"/>
    <span v-else class="vi-breadcrumb-item__separator" role="presentation">
      {{ separator }}
    </span>
  </span>
</template>

<script setup lang='ts'>
import { breadcrumbItemProps } from './breadcrumb-item';
import type { Router } from 'vue-router';
import { computed, getCurrentInstance, inject, ref, toRefs } from 'vue';
import {breadcrumbKey} from '../../breadcrumb/src/constants';
import '../style/index';

defineOptions({name:"ViBreadcrumbItem"})

const props = defineProps(breadcrumbItemProps)

const instance = getCurrentInstance()!
// 获取breadcrumb注入的属性,默认为undefined
const breadcrumbContext = inject(breadcrumbKey,undefined)!
// 获取vue-router注册的实例
const router = instance.appContext.config.globalProperties.$router as Router

const { separator, separatorIcon } = toRefs(breadcrumbContext)
const link = ref<HTMLSpanElement>()

const breadcrumbItemCls = computed(()=>{
  return {
    'vi-breadcrumb-item__inner':true,
    'is-link':props.to
  }
})

const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
