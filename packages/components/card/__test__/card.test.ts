import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from '../src/card.vue'

const AXIOM = 'Rem is the best girl'

describe('Card.vue', () => {
  test('render test', () => {
    const wrapper = mount(Card as any, {
      slots: {
        default: AXIOM
      }
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('string header', () => {
    const header = 'I am header'
    const wrapper = mount(Card as any, {
      slots: {
        header: header
      }
    })
    expect(wrapper.text()).toContain(header)
  })

  test('shadow', () => {
    const shadow = 'always'
    const wrapper = mount(Card as any, {
      props: {
        shadow: shadow
      },
      slots: {
        default: AXIOM
      }
    })

    expect(wrapper.find(`.is-${shadow}-shadow`).exists()).toBe(true)
  })
})
