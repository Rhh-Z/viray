import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import backtop from '../src/backtop.vue'


describe('Backtop.vue', () => {
  test('render', () => {
    const wrapper = mount(backtop, {
      slots: {
        default: ''
      }
    })

    expect(wrapper.text()).toBe('');
  })

  test('class', () => {
    const wrapper = mount(backtop, {
      props: {
        class: 'vi-backtop'
      }
    })
    expect(wrapper.classes()).toContain('vi-backtop')
  })
})