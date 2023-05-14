import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Text from '../src/text.vue';

describe('Text.vue', () => {
  test('render test', () => {
    const wrapper = mount(Text as any, {
      props: {
        type: 'primary',
      },
      slots: {
        default: 'VIRAY'
      }
    })
    expect(wrapper.text()).toBe('VIRAY')
    expect(wrapper.classes('vi-text')).toBe(true)
    expect(wrapper.classes('vi-text--primary')).toBe(true)
  })

  test('tag test1', () => {
    const wrapper = mount(Text as any, {
      props: {
        tag: 'emp'
      }
    })
    expect(wrapper.element.tagName).toBe('EMP')
  })

  test('tag test2', () => {
    const wrapper = mount(Text as any, {
      props: {
        tag: 'kbd'
      }
    })
    expect(wrapper.element.tagName).toBe('KBD')
  })

  test('size test', () => {
    const wrapper = mount(Text as any, {
      props: {
        type: 'small'
      }
    })

    expect(wrapper.classes('vi-text--small')).toBe(true)
  })
})