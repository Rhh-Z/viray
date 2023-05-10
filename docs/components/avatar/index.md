<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state1 = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state1)

const state2 = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const { fits, url } = toRefs(state2)
</script>

# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。

## 基础用法
使用 shape 和 size 属性来设置 Avatar 的形状和大小。

<div class="example">
  <vi-row class="demo-avatar demo-basic">
    <vi-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <vi-avatar :size="50" :src="circleUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <vi-avatar :size="size" :src="circleUrl" />
        </div>
      </div>
    </vi-col>
    <vi-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <vi-avatar shape="square" :size="50" :src="squareUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <vi-avatar shape="square" :size="size" :src="squareUrl" />
        </div>
      </div>
    </vi-col>
  </vi-row>
</div>

<style scoped>
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #1989fa;
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid #ccc;
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .vi-col:not(:last-child) {
  border-right: 1px solid #ccc;
}
</style>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <vi-row class="demo-avatar demo-basic">
    <vi-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <vi-avatar :size="50" :src="circleUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <vi-avatar :size="size" :src="circleUrl" />
        </div>
      </div>
    </vi-col>
    <vi-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <vi-avatar shape="square" :size="50" :src="squareUrl" />
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <vi-avatar shape="square" :size="size" :src="squareUrl" />
        </div>
      </div>
    </vi-col>
  </vi-row>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<style scoped>
  .demo-basic {
    text-align: center;
  }
  .demo-basic .sub-title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #ececec;
  }
  .demo-basic .demo-basic--circle,
  .demo-basic .demo-basic--square {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .demo-basic .block:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  .demo-basic .block {
    flex: 1;
  }
  .demo-basic .vi-col:not(:last-child) {
    border-right: 1px solid #ccc;
  }
</style>
```
</details>

## 展示类型
支持使用图片，图标或者文字作为 Avatar。

<div class="example">
  <div class="demo-type">
    <div>
      <vi-avatar icon="user" />
    </div>
    <div>
      <vi-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div>
      <vi-avatar> user </vi-avatar>
    </div>
  </div>
</div>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid #ccc;
}
</style>

<details>
<summary>查看详情</summary>

``` vue
<template>
  <div class="demo-type">
    <div>
      <vi-avatar icon="user" />
    </div>
    <div>
      <vi-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
    <div>
      <vi-avatar> user </vi-avatar>
    </div>
  </div>
</template>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid #ccc;
}
</style>
```
</details>

## 适应容器
当使用图片作为用户头像时，设置该图片如何在容器中展示。与object-fit 属性一致

<div class="example">
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <vi-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</div>

<style scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #1989fa;
}
</style>


<details>
<summary>查看详情</summary>

``` vue
<template>
   <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <vi-avatar shape="square" :size="100" :fit="fit" :src="url" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const { fits, url } = toRefs(state)
</script>

<style scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.demo-fit .block {
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
}

.demo-fit .title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #1989fa;
}
</style>
```
</details>

# API

## Attributes
| 名称 |	说明 |	类型 |	默认值 |
|-----|-------|-------|--------|
| icon | 设置 Avatar 的图标类型，具体参考 Icon 组件	  |  string  |  —  |
| size  |  Avatar 大小    | number/'small'、'default'、'large' | default  |
| shape  | Avatar 形状  | 'circle'、'square' |  —  |
| src | Avatar 图片的源地址 | string |   —   |
| src-set  | 图片 Avatar 的原生 srcset 属性 | string |  —  |
| alt  | 图片 Avatar 的原生 alt 属性 | string |  —  |
| fit  | 当展示类型为图片的时候，设置图片如何适应容器 | 'fill'、'contain'、'cover'、'none'、'scale-down' |  cover  |

## Slots
| 插槽名 |	说明 |
|-------|--------|
| default |	自定义头像展示内容 |