import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Icon from '../src/icon.vue';

describe('Icon.vue', () => {
  test('render', () => {
    const wrapper = mount(() => <Icon size={18} color={'#000000'} />)
    expect(wrapper.element.getAttribute('style')).toContain('color: #000000;')
    expect(wrapper.element.getAttribute('style')).toContain('font-size: 18px;')
  })
})