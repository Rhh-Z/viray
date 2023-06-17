import { describe, expect, test } from 'vitest';

import { mount } from '@vue/test-utils';
import Alert from '../src/alert.vue';

const AXIOM = 'Rem is the best girl'

// The component to test
describe('test alert', () => {
  test('should render slot', () => {
    const wrapper = mount(() => <Alert>warning</Alert>);

    expect(wrapper.text()).toContain('warning');
  });

  test('render test & class', () => {
    const wrapper = mount(() => <Alert title={AXIOM} showIcon={true} />)
    expect(wrapper.find('.vi-alert__title').text()).toEqual(AXIOM)
    expect(wrapper.find('.vi-alert').classes()).toContain('vi-alert--info')
  })

  test('type', () => {
    const wrapper = mount(() => (
      <Alert title={'test'} showIcon={true} type={'success'} />
    ))
    expect(wrapper.find('.vi-alert').classes()).toContain('vi-alert--success')
    expect(wrapper.find('.vi-alert i').classes()).toContain('vi-alert__icon')
    // expect(wrapper.findComponent(TypeComponentsMap.success).exists()).toBe(true)
  })

  test('description', () => {
    const wrapper = mount(() => (
      <Alert title={'Dorne'} showIcon={true} description={AXIOM} />
    ))
    expect(wrapper.find('.vi-alert__description').text()).toEqual(AXIOM)
  })

  test('title slot', () => {
    const wrapper = mount(() => <Alert title={AXIOM} />)
    expect(wrapper.find('.vi-alert__title').text()).toEqual(AXIOM)
  })

  test('close', async () => {
    const wrapper = mount(() => <Alert closable={true} />)
    const closeBtn = wrapper.find('.vi-alert__close')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
});
