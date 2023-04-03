import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';
import alert from '../src/alert.vue';
// The component to test

describe('test alert', () => {
  test('should render slot', () => {
    const wrapper = mount(alert, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    test('should have class', () => {
      const wrapper = mount(alert);
      expect(wrapper.classes()).toContain('vi-alert');
    });
  });
});
