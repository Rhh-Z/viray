<script lang="ts" setup>
import { h } from 'vue'
import { ViMessage } from '@viray/components'

const open = () => {
  ViMessage('this is a message.')
}

const openVn = () => {
  ViMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  ViMessage('this is a message.')
}
const open2 = () => {
  ViMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ViMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ViMessage.error('Oops, this is a error message.')
}

// closeable
const open5 = () => {
  ViMessage({
    closeable: true,
    message: 'This is a message.',
  })
}
const open6 = () => {
  ViMessage({
    closeable: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open7 = () => {
  ViMessage({
    closeable: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open8 = () => {
  ViMessage({
    closeable: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}

// center
const openCenter = () => {
  ViMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}

// dangerousHTML
const openHTML = () => {
  ViMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}


</script>

# Message 消息提示

常用于主动操作后的反馈提示。 与 `Notification` 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

从顶部出现，3 秒后自动消失。

`Message` 在配置上与 `Notification` 非常类似，所以部分 options 在此不做详尽解释。 文末有 options 列表，可以结合 Notification 的文档理解它们。 Viray 注册了一个全局的 $message方法用于调用。 Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

<div class="example">
  <vi-button :plain="true" @click="open">Show message</vi-button>
  <vi-button :plain="true" @click="openVn">VNode</vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button :plain="true" @click="open">Show message</vi-button>
  <vi-button :plain="true" @click="openVn">VNode</vi-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ViMessage } from 'viray'

const open = () => {
  ViMessage('this is a message.')
}

const openVn = () => {
  ViMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
```
</details>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，`Message` 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态，默认为info。 此时正文内容以 `message` 的值传入。 同时，我们也为 `Message` 的各种 `type` 注册了方法，可以在不传入 `type` 字段的情况下像 `open4`那样直接调用。

<div class="example">
  <vi-button :plain="true" @click="open2">success</vi-button>
  <vi-button :plain="true" @click="open3">warning</vi-button>
  <vi-button :plain="true" @click="open1">message</vi-button>
  <vi-button :plain="true" @click="open4">error</vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button :plain="true" @click="open2">success</vi-button>
  <vi-button :plain="true" @click="open3">warning</vi-button>
  <vi-button :plain="true" @click="open1">message</vi-button>
  <vi-button :plain="true" @click="open4">error</vi-button>
</template>

<script lang="ts" setup>
import { ViMessage } from 'viray'

const open1 = () => {
  ViMessage('this is a message.')
}
const open2 = () => {
  ViMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ViMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ViMessage.error('Oops, this is a error message.')
}
</script>
```
</details>

## 可关闭的消息提示

可以添加关闭按钮。

默认的 `Message` 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `closeable` 设置为 true 此外，和 `Notification` 一样，`Message` 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。

<div class="example">
  <vi-button :plain="true" @click="open5">message</vi-button>
  <vi-button :plain="true" @click="open6">success</vi-button>
  <vi-button :plain="true" @click="open7">warning</vi-button>
  <vi-button :plain="true" @click="open8">error</vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button :plain="true" @click="open1">success</vi-button>
  <vi-button :plain="true" @click="open2">warning</vi-button>
  <vi-button :plain="true" @click="open3">message</vi-button>
  <vi-button :plain="true" @click="open4">error</vi-button>
</template>

<script lang="ts" setup>
import { ViMessage } from 'viray'

const open1 = () => {
  ViMessage({
    closeable: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  ViMessage({
    closeable: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ViMessage({
    closeable: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ViMessage({
    closeable: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
</script>
```
</details>

## 文字居中

使用 `center` 属性让文字水平居中。

<div class="example">
  <vi-button plain @click="openCenter">Centered text</vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="openCenter">Centered text</vi-button>
</template>

<script lang="ts" setup>
import { ViMessage } from 'viray'

// center
const openCenter = () => {
  ViMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
```
</details>


## 使用 HTML 片段作为正文内容

`message` 还支持使用 HTML 字符串作为正文内容。

将`dangerouslyUseHTMLString`属性设置为 `true`,`message` 就会被当作 `HTML` 片段处理。

<div class="example">
  <vi-button :plain="true" @click="openHTML">Use HTML String</vi-button>
</div>


::: warning
message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。 因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。
:::

## 全局方法

Viray 为 `app.config.globalProperties` 添加了全局方法 `$message`。 因此在 `vue` 实例中你可以使用当前页面中的调用方式调用 `Message`

### 单独引用

`import { ViMessage } from 'viray'`

此时调用方法为 `ViMessage(options)`。 我们也为每个 `type` 定义了各自的方法，如 `ViMessage.success(options)`。 并且可以调用 `ViMessage.closeAll()` 手动关闭所有实例。

## Message 配置项
| 名称 |   说明  |   类型   |  默认值  |
|------|---------|---------|----------|
|  message   |   消息文字	   |  string/ VNode/Function   |   ''    |
|  type   |   消息类型	   |  'success'/'warning'/'info'/'error'  | info |
|  icon   |   自定义图标，该属性会覆盖 type 的图标。  |  string   |  	—  |
|  dangerouslyUseHTMLString  |   是否将 `message` 属性作为 `HTML` 片段处理	   |  boolean   |   false   |
|  customClass   |   消息文字	   |  string/ VNode/Function   |   ''    |
|  duration  |  显示时间，单位为毫秒。 设为 0 则不会自动关闭|  number   |   3000    |
|  closeable   |   是否显示关闭按钮	   |  boolean   |   false   |
|  center   |   文字是否居中  |  boolean   |   false  |
|  onClose   |   关闭时的回调函数, 参数为被关闭的 message 实例  |  Function   |   —   |
|  onClose   |   关闭时的回调函数, 参数为被关闭的 message 实例  |  Function   |   —   |
|  offset   |   Message 距离窗口顶部的偏移量 |  number   |   16   |
|  appendTo   |   设置 message 的根元素，默认为 document.body |  string /HTMLElement   |   —   |
|  offset   |   Message 距离窗口顶部的偏移量 |  number   |   16   |
|  offset   |   Message 距离窗口顶部的偏移量 |  number   |   16   |

## Message 方法

调用 `Message` 或 `this.$message` 会返回当前 `Message` 的实例。 如果需要手动关闭实例，可以调用它的 `close`方法。
| 名称 | 	描述 |	类型 |
|------|------|--------|
| close |  关闭当前的 Message  |  Function  |

