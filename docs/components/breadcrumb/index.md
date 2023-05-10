# Breadcrumb 面包屑
显示当前页面的路径，快速返回之前的任意页面。

## 基础用法
在 el-breadcrumb 中使用 el-breadcrumb-item 标签表示从首页开始的每一级。 该组件接受一个 String 类型的参数 separator来作为分隔符。 默认值为 '/'。

<div class="example">
  <vi-breadcrumb separator="/">
    <vi-breadcrumb-item :to="{ path: '/' }">homepage</vi-breadcrumb-item>
    <vi-breadcrumb-item
      ><a href="/">promotion management</a></vi-breadcrumb-item
    >
    <vi-breadcrumb-item>promotion list</vi-breadcrumb-item>
    <vi-breadcrumb-item>promotion detail</vi-breadcrumb-item>
  </vi-breadcrumb>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-breadcrumb separator="/">
    <vi-breadcrumb-item :to="{ path: '/' }">homepage</vi-breadcrumb-item>
    <vi-breadcrumb-item
      ><a href="/">promotion management</a></vi-breadcrumb-item
    >
    <vi-breadcrumb-item>promotion list</vi-breadcrumb-item>
    <vi-breadcrumb-item>promotion detail</vi-breadcrumb-item>
  </vi-breadcrumb>
</template>
```
</details>


## 图标分隔符
通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 失效。

<div class="example">
  <vi-breadcrumb separator-icon="right">
    <vi-breadcrumb-item :to="{ path: '/' }">homepage</vi-breadcrumb-item>
    <vi-breadcrumb-item
      ><a href="/">promotion management</a></vi-breadcrumb-item
    >
    <vi-breadcrumb-item>promotion list</vi-breadcrumb-item>
    <vi-breadcrumb-item>promotion detail</vi-breadcrumb-item>
  </vi-breadcrumb>
</div>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-breadcrumb separator-icon="right">
    <vi-breadcrumb-item :to="{ path: '/' }">homepage</vi-breadcrumb-item>
    <vi-breadcrumb-item
      ><a href="/">promotion management</a></vi-breadcrumb-item
    >
    <vi-breadcrumb-item>promotion list</vi-breadcrumb-item>
    <vi-breadcrumb-item>promotion detail</vi-breadcrumb-item>
  </vi-breadcrumb>
</template>
```
</details>


# Breadcrumb API

## Breadcrumb Attributes
| 属性名 |	说明 |	类型 |	默认值 |
|--------|-------|------|---------|
| separator |	分隔符 | string | / |
| separator-icon | 图标分隔符的组件或组件名 | string | - |

## Breadcrumb Slots
| 属性名 |	说明 |	子标签|
|--------|-------|------|
| default |	自定义默认内容	 | Breadcrumb Item |

# BreadcrumbItem API
## BreadcrumbItem Attributes

| 属性名 |	说明 |	类型 |	默认值 |
|--------|-------|------|---------|
| to |	路由跳转目标，同 vue-router 的 to 属性 | string/object | / |
| replace | 如果设置该属性为 true, 导航将不会留下历史记录 | boolean | false |

## BreadcrumbItem Slots
| 插槽名 | 说明 |
|--------|------|
| default | 自定义默认内容 |
