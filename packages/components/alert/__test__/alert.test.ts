import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';
import alert from '../src/alert.vue';
// The component to test

describe('test alert', () => {
  test('should render slot', () => {
    const wrapper = mount(alert, {
      slots: {
        default: 'warning'
      }
    });

    expect(wrapper.text()).toContain('warning');
  });

  test('class', () => {
    const wrapper = mount(alert, {
      props: {
        class: 'vi-alert'
      }
    });
    expect(wrapper.classes()).toContain('vi-alert');
  });
});
