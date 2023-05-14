import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Progress from '../src/progress.vue';

describe('Progress.vue', () => {
  test('should render slot', () => {
    const wrapper = mount(Progress as any, {
      slots: {
        default: 'warning'
      }
    });
    expect(wrapper.text()).toContain('warning');
  });

  test('should have class', () => {
    const wrapper = mount(Progress as any, {
      slots: {
        default: 'warning'
      }
    });
    expect(wrapper.classes('vi-progress')).toBe(true);
    expect(wrapper.classes('vi-progress--line')).toBe(true);
  });

  test('should have class', () => {
    const wrapper = mount(Progress as any, {
      props: {
        type: 'circle'
      }
    });
    expect(wrapper.classes('vi-progress')).toBe(true);
    expect(wrapper.classes('vi-progress--circle')).toBe(true);
  });
})
