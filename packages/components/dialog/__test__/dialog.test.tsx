import { mount } from "@vue/test-utils";
import { describe, test, expect } from "vitest";
import Dialog from '../src/dialog.vue'
import { nextTick } from "vue";

// const rAF = async () => {
//   return new Promise((res) => {
//     requestAnimationFrame(() => {
//       requestAnimationFrame(async () => {
//         res(null)
//         await nextTick()
//       })
//     })
//   })
// }

const AXIOM = 'Rem is the best girl'

describe('Dialog.vue', () => {
  test('render test', async () => {
    const wrapper = mount(() => <Dialog modelValue={true}>{AXIOM}</Dialog>)

    await nextTick()

    expect(wrapper.find('.vi-dialog__content').text()).toEqual(AXIOM)
  })

  test('should have class', async () => {
    const wrapper = mount(() => <Dialog />)
    expect(wrapper.find('.vi-dialog')).toBeTruthy()
  })


  test('dialog should have a title and header when it has been given', async () => {
    const HEADER = 'I am header'
    const wrapper = mount(() =>
      <Dialog
        modelValue={true}
        v-slots={{
          title: () => HEADER,
        }}
      >
        {AXIOM}
      </Dialog>
    )
    await nextTick()
    expect(wrapper.find('.vi-dialog__header').text()).toBe(HEADER)

    mount(() =>
      <Dialog modelValue={true} title={HEADER}>
        {AXIOM}
      </Dialog>
    )
    await nextTick()

    expect(wrapper.find('.vi-dialog__header').text()).toBe(HEADER)
  })


  test('dialog header should have slot props', async () => {
    const wrapper = mount(() =>
      <Dialog
        modelValue={true}
        v-slots={{
          title: ({
            close,
          }: {
            close: () => void
          }) => (
            <button
              onClick={close}
            />
          ),
        }}
      >
        {AXIOM}
      </Dialog>
    )

    await nextTick()
    const headerButton = wrapper.find('button')

    expect(wrapper.emitted().close).toBeFalsy()
    headerButton.trigger('click')
    await nextTick()
    expect(wrapper.emitted()).toBeTruthy()
  })

  test('should center dialog', async () => {
    const wrapper = mount(() =>
      <Dialog modelValue={true} center={true}>
        {AXIOM}
      </Dialog>
    )

    await nextTick()
    expect(wrapper.find('.is-center').exists()).toBe(true)
  })

  test('should show close button', async () => {
    const wrapper = mount(() => <Dialog modelValue={true}>{AXIOM}</Dialog>)

    await nextTick()
    expect(wrapper.find('.vi-dialog__close').exists()).toBe(true)
  })

  test('should hide close button when showClose = false', async () => {
    const wrapper = mount(() =>
      <Dialog modelValue={true} showClose={false}>
        {AXIOM}
      </Dialog>
    )

    await nextTick()
    expect(wrapper.find('.vi-dialog__close').exists()).toBe(false)
  })


  test('should close dialog when click on close button', async () => {
    const wrapper = mount(() => <Dialog modelValue={true}>{AXIOM}</Dialog>)

    await nextTick()

    await wrapper.find('.vi-dialog__close').trigger('click')
    expect(wrapper.isVisible()).toBe(false)
  })

})


