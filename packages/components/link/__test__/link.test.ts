import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Link from '../src/link.vue';

const AXIOM = 'Rem is the best girl'

describe('Link.vue', () => {
  test('should render slot', () => {
    const wrapper = mount(Link as any, {
      slots: {
        default: 'warning'
      }
    });
    expect(wrapper.text()).toContain('warning');
  });

  test('should have class', () => {
    const wrapper = mount(Link as any, {
      props: {
        class: 'vi-link'
      }
    });
    expect(wrapper.classes()).toContain('vi-link');
  });

  test('it should disable click when link is disabled', async () => {
    const linkName = 'test link'

    const wrapper = mount(Link as any, {
      slots: {
        default: () => linkName,
        icon: () => AXIOM
      },
      props: {
        disabled: true
      }
    })

    expect(wrapper.classes()).toContain('is-disabled')
    expect(wrapper.attributes('href')).toBeUndefined()
  })

});
