
# Alert 提示
用于页面中展示重要的提示信息。

## 基础用法
Alert 组件不属于浮层元素，不会自动消失或关闭。

Alert 组件提供四种类型，由 type 属性指定，默认值为 info。
<div class="example">
  <vi-alert type="info" description="info alert"/>
  <vi-alert type="success" description="success alert"/>
  <vi-alert type="error" description="error alert"/>
  <vi-alert type="warning" description="warning alert"/>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-alert type="info" description="info alert"/>
  <vi-alert type="success" description="success alert"/>
  <vi-alert type="error" description="error alert"/>
  <vi-alert type="warning" description="warning alert"/>
</template>
```
</details>

## 使用图标
你可以通过为 Alert 组件添加图标来提高可读性。

通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。
<div class="example">
  <vi-alert type="info" description="info alert" :showIcon="true" />
  <vi-alert type="success" description="success alert" :showIcon="true" />
  <vi-alert type="error" description="error alert" :showIcon="true" />
  <vi-alert type="warning" description="warning alert" :showIcon="true" />
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-alert type="info" description="info alert" :showIcon="true" />
  <vi-alert type="success" description="success alert" :showIcon="true" />
  <vi-alert type="error" description="error alert" :showIcon="true" />
  <vi-alert type="warning" description="warning alert" :showIcon="true" />
</template>
```
</details>

## 文字居中
使用 center 属性来让文字水平居中。
<div class="example">
  <vi-alert type="info" center description="info alert" :showIcon="true" />
  <vi-alert type="success" center description="success alert" :showIcon="true" />
  <vi-alert type="error" center description="error alert" :showIcon="true" />
  <vi-alert type="warning" center description="warning alert" :showIcon="true" />
</div>

## 文字描述
为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。

除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。

<div class="example">
  <vi-alert type="info" title="Title" description="this is a description"/>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-alert type="info" title="Title" description="this is a description"/>
</template>
```
</details>

## 带图标和描述
在最后, 这是一个带有图标和描述的例子。
<div class="example">
  <vi-alert type="info" title="Title" description="this is a description" :showIcon="true"/>
  <vi-alert type="success" title="Title" description="this is a description" :showIcon="true"/>
  <vi-alert type="warning" title="Title" description="this is a description" :showIcon="true"/>
  <vi-alert type="error" title="Title" description="this is a description" :showIcon="true"/>
</div>


# Alert API

## Attributes
| 名称 |	说明 |	类型 |	默认值 |	必填 |
| ----- |--------|-------|-------|-------|
| title | Alert 标题 | string  |  —  |  否  |
| type |  Alert 类型 | 'success'、'warning'、'info'、'error' |  info  |  否   |
| description | 描述性文本  | string |  —  | 否 |
| closable |  是否可以关闭  | boolean | true  | 否 |
| center |  文字是否居中   |  boolean  | false  | 否 |
| show-icon | 是否显示类型图标 |  boolean  | false  | 否 |

## Events

Function
| 名称  | 描述  | 类型 |
|-------|------|------|
| close |Alert关闭时触发的事件| Function |

## Slots
| 名称  | 描述  |
|-------|------|
| default  |Alert内容描述 |
| title |  title	标题的内容 |