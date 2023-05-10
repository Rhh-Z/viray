# Card 卡片
将信息聚合在卡片容器中展示。

## 基础用法
卡片包含标题，内容以及操作区域。

Card 组件由 header 和 body 组成。 header 是可选的，其内容取决于一个具名的 slot。

<div class="example">
  <vi-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <vi-button class="button" text>Operation button</vi-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </vi-card>
</div>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>


<details>
<summary>查看详情</summary>

``` vue
<template>
   <vi-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <vi-button class="button" text>Operation button</vi-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </vi-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>

```
</details>


## 简单卡片
卡片可以只有内容区域。

<div class="example">
  <vi-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </vi-card>
</div>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>


<details>
<summary>查看详情</summary>

``` vue
<template>
   <vi-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </vi-card>
</template>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
```
</details>


## 有图片内容的卡片
可配置定义更丰富的内容展示。

配置 body-style 属性来自定义 body 部分的样式。 在这个例子中我们还使用了 el-col 组件来布局。

<div class="example">
  <vi-row>
    <vi-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <vi-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <vi-button text class="button">Operating</vi-button>
          </div>
        </div>
      </vi-card>
    </vi-col>
  </vi-row>
</div>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-row>
    <vi-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <vi-card>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <vi-button text class="button">Operating</vi-button>
          </div>
        </div>
      </vi-card>
    </vi-col>
  </vi-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>

```
</details>

## 带有阴影效果的卡片
你可以定义什么时候展示卡片的阴影效果。

通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。
<div class="example">
  <vi-row :gutter="12">
    <vi-col :span="8">
      <vi-card shadow="always"> Always </vi-card>
    </vi-col>
    <vi-col :span="8">
      <vi-card shadow="hover"> Hover </vi-card>
    </vi-col>
    <vi-col :span="8">
      <vi-card shadow="never"> Never </vi-card>
    </vi-col>
  </vi-row>
</div>


<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-row :gutter="12">
    <vi-col :span="8">
      <vi-card shadow="always"> Always </vi-card>
    </vi-col>
    <vi-col :span="8">
      <vi-card shadow="hover"> Hover </vi-card>
    </vi-col>
    <vi-col :span="8">
      <vi-card shadow="never"> Never </vi-card>
    </vi-col>
  </vi-row>
</template>
```
</details>


# API

## Attributes
| 名称 |	说明 |	类型 |	默认值 |
|------|------|--------|--------|
| header |	卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点 | string |— |
| body-style	 |	body 的 CSS 样式 | object(CSSProperties) | — |
| shadow |	设置阴影显示时机 | always、never、hover | always |


## Slots
| 插槽名 | 说明 |
|------|------|
| default |	自定义默认内容 |
| header | 卡片标题内容 |