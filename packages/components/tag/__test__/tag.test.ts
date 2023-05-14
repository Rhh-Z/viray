import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Tag from '../src/tag.vue';

describe('Tag.vue', () => {
  test('render test', () => {
    const wrapper = mount(Tag as any, {
      slots: {
        default: "Vitality"
      }
    })
    expect(wrapper.text()).toBe('Vitality')
  })

  test('should have class', () => {
    const wrapper = mount(Tag as any, {
      props: {
        class: 'customClass'
      }
    })
    expect(wrapper.classes('customClass')).toBe(true)
  })
})