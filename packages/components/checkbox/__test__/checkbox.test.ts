import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Checkbox from '../src/checkbox.vue'

describe('Checkbox.vue', () => {
  test('render test', () => {
    const wrapper = mount(Checkbox as any, {
      slots: {
        default: 'Hello'
      }
    })
    expect(wrapper.text()).toContain('Hello')
  })

  test('should have class', async () => {
    // const checked = ref(false)
    const wrapper = mount(Checkbox as any, {
      slots: {
        default: 'Hello'
      },
    })
    expect(wrapper.classes()).toContain('vi-checkbox')
    // expect(wrapper.classes('is-disabled')).toBe(true)
    // await wrapper.trigger('click', {
    //   checked: checked.value = true
    // })
    // expect(wrapper.classes('is-checked')).toBe(true)
    // await wrapper.trigger('click')
    // expect(wrapper.classes('is-checked')).toBe(false)
  })
})