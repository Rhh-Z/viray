import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../src/button.vue';
import ButtonGroup from '../../button-group/src/button-group.vue'
import Icon from '../../icon/src/icon.vue'
import { ref, nextTick } from 'vue';
import { ComponentSize } from '@viray/constants';

describe('Button.vue', () => {
  it('type', () => {
    const wrapper = mount(() => <Button type='primary'>viray</Button>);

    // Assert the rendered text of the component
    expect(wrapper.text()).toBe('viray');
    // expect(wrapper)
  });

  it('class', () => {
    const wrapper = mount(() => <Button type='primary'>viray</Button>)

    expect(wrapper.classes()).toContain('vi-button--primary')
  });

  it('icon', () => {
    const wrapper = mount(() => <Button icon="search" />)

    expect(wrapper.findComponent(Icon).exists())
  })

  it('nativeType', () => {
    const wrapper = mount(() => <Button nativeType="submit" />)

    expect(wrapper.attributes('type')).toBe('submit')
  })

  it('size', () => {
    const wrapper = mount(() => <Button size="large" />)

    expect(wrapper.classes()).toContain('vi-button--large')
  })

  it('circle', () => {
    const wrapper = mount(() => <Button circle />)

    expect(wrapper.classes()).toContain('is-circle')
  })

  it('plain', () => {
    const wrapper = mount(() => <Button plain />)

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(() => <Button round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('active', () => {
    const wrapper = mount(() => <Button active />)
    expect(wrapper.classes()).toContain('is-active')
  })

  it('disabled', async () => {
    const wrapper = mount(() => <Button disabled />)

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('text', async () => {
    const bg = ref(false)

    const wrapper = mount(() => <Button text bg={bg.value} />)
    expect(wrapper.classes()).toContain('is-text')

    bg.value = true

    await nextTick()

    expect(wrapper.classes()).toContain('is-bg')
  })
  test('render text', () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => 'Hello World',
        }}
      />
    ))

    expect(wrapper.text()).toEqual('Hello World')
  })

  test('handle click inside', async () => {
    const wrapper = mount(() => (
      <Button
        v-slots={{
          default: () => <span class="inner-slot"></span>,
        }}
      />
    ))

    wrapper.find('.inner-slot').trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
});


describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      setup: () => () =>
      (
        <ButtonGroup>
          <Button type="primary">Prev</Button>
          <Button type="primary">Next</Button>
        </ButtonGroup>
      ),
    })
    expect(wrapper.classes()).toContain('vi-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group size', async () => {
    const size = ref<ComponentSize>('small')
    const wrapper = mount({
      setup: () => () =>
      (
        <ButtonGroup size={size.value}>
          <Button type="primary">Prev</Button>
          <Button type="primary">Next</Button>
        </ButtonGroup>
      ),
    })
    expect(wrapper.classes()).toContain('vi-button-group')
    expect(
      wrapper.findAll('.vi-button-group button.vi-button--small').length
    ).toBe(2)
  })

  it('button group type', async () => {
    const wrapper = mount({
      setup: () => () =>
      (
        <ButtonGroup type="warning">
          <Button type="primary">Prev</Button>
          <Button>Next</Button>
        </ButtonGroup>
      ),
    })
    expect(wrapper.classes()).toContain('vi-button-group')

    expect(
      wrapper.findAll('.vi-button-group button.vi-button--primary').length
    ).toBe(1)
    expect(
      wrapper.findAll('.vi-button-group button.vi-button--warning').length
    ).toBe(1)
  })
})