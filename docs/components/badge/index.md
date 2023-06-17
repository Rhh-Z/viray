<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

</style>

# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法
可以用来展示新消息的数量。

value可接受 `Number` 或 `String`。

<div class="example">
  <vi-badge :value="12" class="item">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge :value="3" class="item">
    <vi-button>replies</vi-button>
  </vi-badge>
  <vi-badge :value="1" class="item" type="primary">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge :value="2" class="item" type="warning">
    <vi-button>replies</vi-button>
  </vi-badge>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-badge :value="12" class="item">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge :value="3" class="item">
    <vi-button>replies</vi-button>
  </vi-badge>
  <vi-badge :value="1" class="item" type="primary">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge :value="2" class="item" type="warning">
    <vi-button>replies</vi-button>
  </vi-badge>
</template>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
</details>

## 最大值
你还可以自定义最大值

由 `max` 属性定义，接受 `Number` 值。 请注意，仅在值也是 `Number` 时起作用。

<div class="example">
  <vi-badge :value="200" :max="99" class="item">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge :value="100" :max="10" class="item">
    <vi-button>replies</vi-button>
  </vi-badge>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-badge :value="200" :max="99" class="item">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge :value="100" :max="10" class="item">
    <vi-button>replies</vi-button>
  </vi-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
</details>

## 自定义显示内容
你也可以展示除数字以外你想要展示的任何值。

当 `value` 是 `String` 时，可以显示自定义文字。

<div class="example">
  <vi-badge value="new" class="item">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge value="hot" class="item">
    <vi-button>replies</vi-button>
  </vi-badge>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-badge value="new" class="item">
    <vi-button>comments</vi-button>
  </vi-badge>
  <vi-badge value="hot" class="item">
    <vi-button>replies</vi-button>
  </vi-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
</details>

## 小红点
通过一个小红点标记来告知用户有新内容。

使用 `is-dot` 属性。 是个布尔值。

<div class="example">
  <vi-badge is-dot class="item">query</vi-badge>
  <vi-badge is-dot class="item">
    <vi-button class="share-button" icon="share" type="primary" />
  </vi-badge>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-badge is-dot class="item">query</vi-badge>
  <vi-badge is-dot class="item">
    <vi-button class="share-button" icon="share" type="primary" />
  </vi-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
</details>

# API
## Attributes

| 属性名 |	说明 |	类型 |	默认值 |
|-------|-------|-------|--------|
| value |	显示值 |	string / number | '' |
| max |	最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时起作用 |	number | 99 |
| is-dot |	是否显示小圆点。 |	boolean | false |
| hidden |	是否隐藏 Badge。 |	boolean | false |
| type |	badge type. |	'primary'、'success'、'warning'、'danger'、'info'| danger |

## Slots
| 插槽名 |	说明 |
|--------|-------|
| default |	自定义默认内容 |


