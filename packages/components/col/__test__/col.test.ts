import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Row from '@viray/components/row'
import Col from '../src/col.vue'


describe('Col', () => {
  it('create', () => {
    const wrapper = mount(Col as any)
    expect(wrapper.classes()).toContain('vi-col')
  })

  it('span', () => {
    const wrapper = mount(Col as any, {
      props: {
        span: 12
      }
    })
    expect(wrapper.classes()).toContain('vi-col-12')
  })

  it('pull', () => {
    const wrapper = mount(Col as any, {
      props: {
        span: 12,
        pull: 3
      }
    })
    expect(wrapper.classes()).toContain('vi-col-pull-3')
  })

  it('push', () => {
    const wrapper = mount(Col as any, {
      props: {
        span: 12,
        push: 3
      }
    })
    expect(wrapper.classes()).toContain('vi-col-push-3')
  })
})


describe('Row', () => {
  test('create', () => {
    const wrapper = mount(Row as any)
    expect(wrapper.classes()).toContain('vi-row')
  })

  test('gutter', () => {
    const wrapper = mount(Row as any, {
      props: {
        gutter: 20
      }
    })
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })

  test('justify', () => {
    const wrapper = mount(Row as any, {
      props: {
        justify: 'end'
      }
    })
    expect(wrapper.classes()).toContain('is-justify-end')
  })

  test('justify', () => {
    const wrapper = mount(Row as any, {
      props: {
        align: 'bottom'
      }
    })
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})