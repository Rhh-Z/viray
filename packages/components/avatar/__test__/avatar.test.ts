import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import Avatar from '../src/avatar.vue'

describe('Avatar.vue', () => {
  test('render test', () => {
    const wrapper = mount(Avatar as any, {
      slots: {
        default: 'Hello World'
      }
    });
    expect(wrapper.text()).toContain('Hello World')
    expect(wrapper.find('.vi-avatar').exists()).toBe(true)
  })

  test('should have class', () => {
    const wrapper = mount(Avatar as any);
    expect(wrapper.classes()).toContain('vi-avatar');
    expect(wrapper.classes('vi-avatar')).toBe(true)
  });
})