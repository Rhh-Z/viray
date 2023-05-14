import { describe, test, expect } from "vitest";
import Divider from '../src/divider.vue'
import { mount } from "@vue/test-utils";

const AXIOM = 'Rem is the best girl'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(Divider as any, {
      slots: {
        default: () => AXIOM
      }
    })

    expect(wrapper.text()).toBe(AXIOM)
  })

  test('should have class', () => {
    const wrapper = mount(Divider as any);
    expect(wrapper.classes()).toContain('vi-divider');
    expect(wrapper.classes('vi-divider')).toBe(true)
  });

  test('direction', () => {
    const wrapper = mount(Divider as any, {
      props: {
        direction: 'vertical'
      }
    })
    expect(wrapper.classes()).toContain('vi-divider--vertical')
  })

  test('customClass', () => {
    const wrapper = mount(Divider as any, {
      props: {
        class: 'customClass',
        direction: 'horizontal',
      }
    })
    expect(wrapper.classes()).toContain('customClass')
    expect(wrapper.classes()).toContain('vi-divider--horizontal')
  })
})