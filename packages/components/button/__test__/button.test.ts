import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import button from '../src/button.vue';

// The component to test
describe('Button.vue', () => {
  it('should render slot', () => {
    const wrapper = mount(button, {
      slots: {
        default: 'viray'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('viray');
  });

  it('should have class', () => {
    const wrapper = mount(button, {
      props: {
        type: 'primary',
        size: 'large',
        plain: true,
        text: true
      }
    })
    expect(wrapper.classes()).toContain('vi-button--primary');
  });

});