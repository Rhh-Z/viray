import { describe, expect, test, vi } from 'vitest';
import Message from '../src/message.vue';
import { makeMount } from '@viray/test-utils';
import { CSSProperties, Component, ComponentPublicInstance, h } from 'vue';

const AXIOM = 'Rem is the best girl'

type MessageInstance = ComponentPublicInstance<{
  visible: boolean
  iconComponent: string | Component
  customStyle: CSSProperties
}>

const onClose = vi.fn()
const _mount = makeMount(Message, {
  props: {
    onClose,
  },
})

describe('Progress.vue', () => {
  describe('render', () => {
    test('basic render test', () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
      })

      const vm = wrapper.vm as MessageInstance

      expect(wrapper.text()).toEqual(AXIOM)
      expect(vm.visible).toBe(true)
    })

    test('should be able to render VNode', () => {
      const wrapper = _mount({
        slots: {
          default: h('span', { class: 'text-node' }, AXIOM),
        },
      })

      expect(wrapper.find('.text-node').exists()).toBe(true)
    })

    test('should be able to render raw HTML with dangerouslyUseHTMLString prop', () => {
      const tagClass = 'test-class'
      const wrapper = _mount({
        props: {
          dangerouslyUseHTMLString: true,
          message: `<string class="${tagClass}"'>${AXIOM}</strong>`,
        },
      })

      expect(wrapper.find(`.${tagClass}`).exists()).toBe(true)
    })

    test('should not be able to render raw HTML without dangerouslyUseHTMLString prop', () => {
      const tagClass = 'test-class'
      const wrapper = _mount({
        props: {
          dangerouslyUseHTMLString: false,
          message: `<string class="${tagClass}"'>${AXIOM}</strong>`,
        },
      })

      expect(wrapper.find(`.${tagClass}`).exists()).toBe(false)
    })
  })
})
