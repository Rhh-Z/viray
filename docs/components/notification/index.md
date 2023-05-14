<script lang="ts" setup>
import { h } from 'vue'
import { ViNotification } from '@viray/components'

// example 1
const open1 = () => {
  ViNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  ViNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}

// example 2
const open3 = () => {
  ViNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open4 = () => {
  ViNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open5 = () => {
  ViNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open6 = () => {
  ViNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}

// example 3
const open7 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open8 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open9 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open10 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}

const open11 = () => {
  ViNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}

const open12 = () => {
  ViNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}

const open13 = () => {
  ViNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    closeable: false,
  })
}
</script>

# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

`Viement Plus` 注册了 `$notify` 方法并且它接受一个 `Object`作为其参数。 在最简单的情况下，你可以通过设置 `title` 和 `message` 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 `duration` 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 `duration` 接收一个 `Number`，单位为毫秒。

<div class="example">
  <vi-button plain @click="open1"> Closes automatically </vi-button>
  <vi-button plain @click="open2"> Won't close automatically </vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="open1"> Closes automatically </vi-button>
  <vi-button plain @click="open2"> Won't close automatically </vi-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ViNotification } from 'viray'

const open1 = () => {
  ViNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  ViNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
```
</details>


## 不同类型的通知

我们提供了四种不同类型的提醒框：`success`、`warning`、`info` 和`error`。

`Viray`为 `Notification` 组件准备了四种通知类型：`success`, `warning`, `info`,`error`。 他们可以设置 `type`字段来修改，除上述的四个值之外的值会被忽略。 同时，我们也为 `Notification` 的各种 `type` 注册了单独的方法，可以在不传入 `type` 字段的情况下像 `open3` 和 `open4` 那样直接调用。

<div class="example">
  <vi-button plain @click="open3"> Success </vi-button>
  <vi-button plain @click="open4"> Warning </vi-button>
  <vi-button plain @click="open5"> Info </vi-button>
  <vi-button plain @click="open6"> Error </vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="open1"> Success </vi-button>
  <vi-button plain @click="open2"> Warning </vi-button>
  <vi-button plain @click="open3"> Info </vi-button>
  <vi-button plain @click="open4"> Error </vi-button>
</template>

<script lang="ts" setup>
import { ViNotification } from 'viray'

const open1 = () => {
  ViNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  ViNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  ViNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  ViNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
```
</details>

## 自定义消息弹出的位置

可以让 Notification 从屏幕四角中的任意一角弹出

使用 position 属性设置 Notification 的弹出位置， 支持四个选项：`top-right`、`top-left`、`bottom-right` 和 `bottom-left`， 默认为 `top-right`。

<div class="example">
  <vi-button plain @click="open7"> Top Right </vi-button>
  <vi-button plain @click="open8"> Bottom Right </vi-button>
  <vi-button plain @click="open9"> Bottom Left </vi-button>
  <vi-button plain @click="open10"> Top Left </vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="open1"> Success </vi-button>
  <vi-button plain @click="open2"> Warning </vi-button>
  <vi-button plain @click="open3"> Info </vi-button>
  <vi-button plain @click="open4"> Error </vi-button>
</template>

<script lang="ts" setup>
import { ViNotification } from 'viray'

const open1 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  ViNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
```
</details>


## 有位置偏移的通知栏

能够设置偏移量来使 `Notification` 偏移默认位置。

`Notification` 提供设置偏移量的功能，通过设置 `offset` 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 `Notification` 实例应当具有一个相同的偏移量。

<div class="example">
  <vi-button plain @click="open11"> Notification with offset </vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="open"> Notification with offset </vi-button>
</template>

<script lang="ts" setup>
import { ViNotification } from 'viray'

const open = () => {
  ViNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

</script>
```
</details>

## 使用 HTML 片段作为正文内容

`message` 支持传入 `HTML` 字符串来作为正文内容。

将 `dangerouslyUseHTMLString` 属性设置为 `true`，`message` 属性就会被当作 `HTML` 片段处理。

<div class="example">
  <vi-button plain @click="open12"> Use HTML String </vi-button>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="open"> Use HTML String </vi-button>
</template>

<script lang="ts" setup>
import { ViNotification } from 'viray'

const open = () => {
  ViNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
```
</details>

::: warning
message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。 因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。
:::


## 隐藏关闭按钮

通知的关闭按钮可以被设置为隐藏。
将 `closeable` 属性设置为 `false` 即可隐藏关闭按钮。

<div class="example">
  <vi-button plain @click="open13"> Hide close button </vi-button>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-button plain @click="open"> Hide close button </vi-button>
</template>

<script lang="ts" setup>
import { ViNotification } from 'viray'

const open = () => {
  ViNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    closeable: false,
  })
}
</script>
```
</details>


## 全局方法

Viray 为 `app.config.globalProperties` 添加了全局方法 `$notify`。 因此在 Vue instance 中可以采用本页面中的方式调用 `Notification`。

### 单独引用
`import { ViNotification } from 'viray'`

你可以在对应的处理函数内调用 `ViNotification(options)` 来呼出通知栏。 我们也提前定义了多个 `type` 的单独调用方法，如 `ViNotification.success(options)`。 当你需要关闭页面上所有的通知栏的时候，可以调用 `ViNotification.closeAll()` 来关闭所有的实例。

## Notification 配置项
| 名称 |	说明 |	类型 |	默认 |
|-------|------|-------|------|
|  title |  标题	 |   string  |   ''    |
|  message |  通知栏正文内容	 |  string / VNode  |   ''    |
|  dangerouslyUseHTMLString |  是否将 message 属性作为 HTML 片段处理	 | boolean  |   false   |
|  type |  通知的类型	|   string  | 'success'/'warning'/'info'/'error' |   ''   |
|  custom-class |  自定义类名	|   string  |   ''    |
|  duration |  显示时间, 单位为毫秒。 值为 0 则不会自动关闭	 | number  |   4500  |
|  position |  自定义弹出位置	 |  top-right、top-left、'bottom-right'、bottom-left  |  top-right   |
|  closeable |  是否显示关闭按钮	 |   boolean  |  true   |
|  on-close |  关闭时的回调函数	|   Function  |   	—   |
|  on-click |  点击 Notification 时的回调函数 |  Function  |   —   |
|  offset |  相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量 |  number |  0  |
|  appendTo | 设置 notification 的根元素，默认为 `document.body`|  `string` /` HTMLElement`  |   —   |
|  zIndex |  初始 zIndex |  number  |   9999  |










