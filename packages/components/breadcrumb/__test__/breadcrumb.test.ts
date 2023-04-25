import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import breadcrumb from '../src/breadcrumb.vue';

describe('test breadcrumb', () => {
  test('render', () => {
    const wrapper = mount(breadcrumb, {
      slots: {
        default: 'bread'
      }
    })

    expect(wrapper.text()).toContain('bread')
  })

  test('class', () => {
    const wrapper = mount(breadcrumb, {
      props: {
        class: 'vi-breadcrumb'
      }
    });
    expect(wrapper.classes()).toContain('vi-breadcrumb');
  });
})