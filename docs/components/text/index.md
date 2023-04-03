<style>
  .vi-text {
    margin: 0 10px;
  }
</style>

# Text

文本的常见操作

## 基础用法
由 type 属性来选择 Text 的类型。

<div class="example">
  <vi-text type="default">Default</vi-text>
  <vi-text type="primary">Primary</vi-text>
  <vi-text type="danger">Danger</vi-text>
  <vi-text type="success">Success</vi-text>
  <vi-text type="warning">Warning</vi-text>
  <vi-text type="error">Error</vi-text>
  <vi-text type="info">Info</vi-text>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-text type="default">Default</vi-text>
  <vi-text type="primary">Primary</vi-text>
  <vi-text type="danger">Danger</vi-text>
  <vi-text type="success">Success</vi-text>
  <vi-text type="warning">Warning</vi-text>
  <vi-text type="error">Error</vi-text>
  <vi-text type="info">Info</vi-text>
</template>
```
</details>

## 其他用法
<div class="example">
  <vi-text tag="kbd">kbd</vi-text>
  <vi-text tag="del">del</vi-text>
  <vi-text tag="mark">del</vi-text>
  <vi-text tag="i">del</vi-text>
  <vi-text tag="b">del</vi-text>
  <vi-text tag="wavy">wavy</vi-text>
  <vi-text tag="emp">emp</vi-text>
  <vi-text tag="psw">del</vi-text>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-text tag="kbd">kbd</vi-text>
  <vi-text tag="del">del</vi-text>
  <vi-text tag="mark">del</vi-text>
  <vi-text tag="i">del</vi-text>
  <vi-text tag="b">del</vi-text>
  <vi-text tag="wavy">wavy</vi-text>
  <vi-text tag="emp">emp</vi-text>
  <vi-text tag="psw">del</vi-text>
</template>
```
</details>


## 尺寸
使用 size 属性配置尺寸，可选的尺寸大小有: large, default 或 small
<div class="example">
  <vi-text size="large">Large</vi-text>
  <vi-text size="default">Default</vi-text>
  <vi-text size="small">Small</vi-text>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-text size="large">Large</vi-text>
  <vi-text size="default">Default</vi-text>
  <vi-text size="small">Small</vi-text>
</template>
```
</details>

## 省略
通过 truncated 属性，在文本超过视图或最大宽度设置时展示省略符。

<div class="example">
  <vi-text style="width:100px" truncated>Self element set width 100px</vi-text>
  <vi-row>
    <vi-col :span="4">
      <vi-text truncated>Squeezed by parent element</vi-text>
    </vi-col>
  </vi-row>
</div>

<details>
<summary>查看详情</summary>

```vue
<template>
  <vi-text style="width:100px" truncated>Self element set width 100px</vi-text>
  <vi-row>
    <vi-col :span="4">
      <vi-text truncated>Squeezed by parent element</vi-text>
    </vi-col>
  </vi-row>
</template>
```
</details>

## API

### Attributes

| 属性名  |	描述	 | 类型	 |  默认值   |
|---------|-------|-------|---------|
|  type    |   	类型   |   primary、success、warning、danger、info   |    —   |
|  size   |  大小  |   large、default、small   |   default   |
|  truncated  |  显示省略号  |   boolean   |   false   |
|  tag  |  自定义元素标签 |   string  |   span   |

### Slots
| 名称  |   详情   |
|-------| ---------|
| default | 默认内容 |