import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Breadcrumb from '../src/breadcrumb.vue'
import BreadcrumbItem from '../../breadcrumb-item/src/breadcrumb-item.vue'
import type { VNode } from 'vue'

const _mount = (render: () => VNode, $router = {}) =>
  // @ts-ignore
  mount(render, {
    global: {
      provide: {
        breadcrumb: {},
      },
      config: {
        globalProperties: {
          $router,
        },
      },
    },
  })

describe('Breadcrumb.vue', () => {
  it('separator', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separator="?">
        <BreadcrumbItem>A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.vi-breadcrumb-item__separator').text()).toBe('?')
  })

  it('separatorIcon', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separatorIcon={'check'}>
        <BreadcrumbItem>A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.vi-breadcrumb-item__separator').text()).toBe('')
  })

  it('to', () => {
    const wrapper = _mount(() => (
      <Breadcrumb separator="?" separatorIcon={'check'}>
        <BreadcrumbItem to="/index">A</BreadcrumbItem>
      </Breadcrumb>
    ))
    expect(wrapper.find('.vi-breadcrumb-item__inner').classes()).toContain('is-link')
  })

  it('single', () => {
    const wrapper = _mount(() => <BreadcrumbItem>A</BreadcrumbItem>)
    expect(wrapper.find('.vi-breadcrumb-item__inner').text()).toBe('A')
    expect(wrapper.find('.vi-breadcrumb-item__separator').text()).toBe('')
  })

  describe('BreadcrumbItem', () => {
    it('should set the last item as current page', () => {
      const wrapper = _mount(() => (
        <Breadcrumb>
          <BreadcrumbItem>A</BreadcrumbItem>
          <BreadcrumbItem>B</BreadcrumbItem>
        </Breadcrumb>
      ))

      const items = wrapper.findAllComponents(BreadcrumbItem)
      expect(items.at(1)!.element.getAttribute('aria-current')).toBe('page')
    })

    it('click event', async () => {
      const replace = vi.fn()
      const push = vi.fn()
      let wrapper = _mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/path">A</BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          replace,
          push,
        }
      )
      await wrapper.find('.vi-breadcrumb-item__inner').trigger('click')
      expect(push).toHaveBeenCalled()
      wrapper.unmount()
      wrapper = _mount(
        () => (
          <Breadcrumb>
            <BreadcrumbItem to="/path" replace>
              A
            </BreadcrumbItem>
          </Breadcrumb>
        ),
        {
          replace,
          push,
        }
      )

      await wrapper.find('.vi-breadcrumb-item__inner').trigger('click')
      expect(replace).toHaveBeenCalled()
    })
  })
})
