import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/button.vue';

// The component to test
describe('Button.vue', () => {
  it('should render slot', () => {
    const wrapper = mount(Button as any, {
      slots: {
        default: 'viray'
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('viray');
  });

  it('should have class', () => {
    const wrapper = mount(Button as any, {
      props: {
        type: 'primary',
        size: 'large',
        plain: true,
        text: true
      }
    })
    expect(wrapper.classes()).toContain('vi-button--primary');
    expect(wrapper.classes()).toContain('vi-button--large');
    expect(wrapper.classes()).toContain('is-plain');
    expect(wrapper.classes()).toContain('is-text');
  });

  it('not disabled test', async () => {

    const wrapper = mount(Button as any)
    // wrapper.find('button').trigger('click')
    // 触发的自定义事件
    wrapper.vm.$emit('click', 123)

    await wrapper.vm.$nextTick()  // 等待事件处理完成
    await wrapper.trigger('click') // 等待事件处理完成
    expect(wrapper.emitted('click')).toBeTruthy() //断言事件已触发

    // 断言事件的数量
    expect(wrapper.emitted('click')?.length).toBe(2)
    // 断言事件的有效数据
    expect(wrapper.emitted().click[0]).toEqual([123])
  })

  it('disabled test', async () => {
    const wrapper = mount(Button as any, {
      props: {
        disabled: true
      },
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })
});