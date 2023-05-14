import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';
import Alert from '../src/alert.vue';
// The component to test

describe('test alert', () => {
  test('should render slot', () => {
    const wrapper = mount(Alert as any, {
      slots: {
        default: 'warning'
      }
    });

    expect(wrapper.text()).toContain('warning');
  });

  test('class', () => {
    const wrapper = mount(Alert as any, {
      props: {
        class: 'vi-alert'
      }
    });
    expect(wrapper.classes()).toContain('vi-alert');
  });
});
