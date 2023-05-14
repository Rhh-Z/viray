# Link 链接

文字超链接

## 基础用法

基础的文字链接用法。

<div class="example">
  <vi-link href="https://element-plus.org" target="_blank">default</vi-link>
  <vi-link type="primary">primary</vi-link>
  <vi-link type="success">success</vi-link>
  <vi-link type="warning">warning</vi-link>
  <vi-link type="danger">danger</vi-link>
  <vi-link type="info">info</vi-link>
</div>

<style scoped>
.vi-link {
  margin-right: 8px;
}
.vi-link .vi-icon--right.vi-icon {
  vertical-align: text-bottom;
}
</style>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-link href="https://element-plus.org" target="_blank">default</vi-link>
  <vi-link type="primary">primary</vi-link>
  <vi-link type="success">success</vi-link>
  <vi-link type="warning">warning</vi-link>
  <vi-link type="danger">danger</vi-link>
  <vi-link type="info">info</vi-link>
</template>

<style scoped>
.vi-link {
  margin-right: 8px;
}
.vi-link .vi-icon--right.vi-icon {
  vertical-align: text-bottom;
}
</style>
```
</details>

## 禁用状态

文字链接不可用状态。

<div class="example">
  <vi-link disabled href="https://element-plus.org" target="_blank">default</vi-link>
  <vi-link disabled type="primary">primary</vi-link>
  <vi-link disabled type="success">success</vi-link>
  <vi-link disabled type="warning">warning</vi-link>
  <vi-link disabled type="danger">danger</vi-link>
  <vi-link disabled type="info">info</vi-link>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-link disabled href="https://element-plus.org" target="_blank">default</vi-link>
  <vi-link disabled type="primary">primary</vi-link>
  <vi-link disabled type="success">success</vi-link>
  <vi-link disabled type="warning">warning</vi-link>
  <vi-link disabled type="danger">danger</vi-link>
  <vi-link disabled type="info">info</vi-link>
</template>

<style scoped>
.vi-link {
  margin-right: 8px;
}
.vi-link .vi-icon--right.vi-icon {
  vertical-align: text-bottom;
}
</style>
```
</details>

## 下划线

文字链接下划线。

<div class="example">
  <vi-link :underline="false">Without Underline</vi-link>
  <vi-link>With Underline</vi-link>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-link :underline="false">Without Underline</vi-link>
  <vi-link>With Underline</vi-link>
</template>

<style scoped>
.vi-link {
  margin-right: 8px;
}
.vi-link .vi-icon--right.vi-icon {
  vertical-align: text-bottom;
}
</style>
```
</details>

## 图标

带图标的链接
<div class="example">
  <vi-link icon="edit">Edit</vi-link>
  <vi-link>
    Check<vi-icon class="el-icon--right" name="eye"></vi-icon>
  </vi-link>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-link icon="edit">Edit</vi-link>
  <vi-link>
    Check<vi-icon class="el-icon--right" name="eye"></vi-icon>
  </vi-link>
</template>

<style scoped>
.vi-link {
  margin-right: 8px;
}
.vi-link .vi-icon--right.vi-icon {
  vertical-align: text-bottom;
}
</style>
```
</details>


# Link API
## Attributes
| 属性名 |	说明 |	类型 |	默认值 |
|-------|--------|-------|-------|
|  type   |    类型   |  'primary'、'success'、'warning'、'danger'、 'info' 、'default' |   true   |
| underline |   是否下划线   |   boolean   |   true   |
| disabled |  是否禁用状态    |  boolean   |   false  |
| href |   原生 href 属性   |  string   |   —  |
| icon |  图标组件  |  string   |   —  |

## Slots
| 插槽名 |   说明   |
|-------|----------|
| default |  自定义默认内容  |
| icon |   自定义图标组件  |

