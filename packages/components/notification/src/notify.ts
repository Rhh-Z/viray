import { isElement, isString } from 'lodash'
import { debugWarn } from '@viray/utils'
import { createVNode, AppContext, isVNode, Ref, render, VNode } from 'vue'
import { NotificationProps, NotificationQueue, NotificationOptions, NotifyFn, Notify, notificationTypes } from './notification'
import NotificationConstructor from './notification.vue'


const notifications: Record<
  NotificationOptions['position'],
  NotificationQueue
> = {
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
}

const GAP_SIZE = 16
let seed = 1

const notify: NotifyFn & Partial<Notify> & { _context: AppContext | null } = (
  options = {},
  context: AppContext | null = null
) => {

  if (isString(options) || isVNode(options)) {
    options = { message: options }
  }

  const position = options.position || 'top-right'

  let verticalOffest = options.offset || 0

  notifications[position] && notifications[position].forEach(({ vm }) => {
    verticalOffest += (vm.el?.offsetHeight || 0) + GAP_SIZE
  })

  verticalOffest += GAP_SIZE

  const id = `notification_${seed++}`
  const userOnClose = options.onClose!

  const props: Partial<NotificationProps> = {
    ...options,
    offset: verticalOffest,
    id,
    onClose: () => {
      close(id, position, userOnClose)
    }
  }

  let appendTo: HTMLElement | null = document.body
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo!
  } else if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo)
  }

  // should fallback to default value with a warning
  if (!isElement(appendTo)) {
    debugWarn(
      'ElNotification',
      'the appendTo option is not an HTMLElement. Falling back to document.body.'
    )
    appendTo = document.body
  }

  const container = document.createElement('div')

  const vm = createVNode(
    NotificationConstructor,
    props,
    isVNode(props.message) ? { default: () => props.message } : null
  )
  vm.appContext = context ?? notify._context

  vm.props!.onDestroy = () => {
    render(null, container)
  }

  render(vm, container)

  notifications[position].push({ vm })
  appendTo?.appendChild(container.firstElementChild!)

  return {
    close: () => {
      (vm.component!.exposed as { visible: Ref<boolean> }).visible.value = false
    }
  }
}

notificationTypes.forEach((type) => {
  notify[type] = (options = {}) => {
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        message: options
      }
    }
    return notify({
      ...options,
      type
    })
  }
})

function close(
  id: string,
  position: NotificationOptions['position'],
  userOnClose: (vm: VNode) => void
) {
  const orientedNotifications = notifications[position]
  const idx = orientedNotifications.findIndex(
    ({ vm }) => vm.component?.props.id === id
  )
  if (idx === -1) return
  const { vm } = orientedNotifications[idx]
  // 在notification被移除前先执行用户的close函数
  userOnClose?.(vm)

  // note that this is called @before-leave, that's why we were able to fetch this property.
  const removedHeight = vm.el!.offsetHeight
  const verticalPos = position.split('-')[0]
  orientedNotifications.splice(idx, 1)
  const len = orientedNotifications.length
  if (len < 1) return
  // starting from the removing item.
  for (let i = idx; i < len; i++) {
    // new position equals the current offsetTop minus removed height plus 16px(the gap size between each item)
    const { el, component } = orientedNotifications[i].vm
    const pos =
      Number.parseInt(el!.style[verticalPos], 10) - removedHeight - GAP_SIZE
    component!.props.offset = pos
  }
}

export function closeAll(): void {
  for (const orientedNotifications of Object.values(notifications)) {
    orientedNotifications.forEach(({ vm }) => {
      (vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
        false
    })
  }
}

notify.closeAll = closeAll
notify._context = null

export default notify as Notify