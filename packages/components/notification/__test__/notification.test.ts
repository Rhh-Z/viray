import { afterEach, describe, it, expect } from "vitest";
import Notification, { closeAll } from '../src/notify'

describe('Notification.vue', () => {
  afterEach(() => {
    closeAll()
  })
  it('it should be able to render vnode', async () => {
    const testClassName = 'test-classname'
    const { close } = Notification({
      duration: 0,
      message: `<div class=${testClassName}>test-content</div>,`
    })

    expect(document.querySelector(`.${testClassName}`)).toBeDefined()
    close()
  })
})