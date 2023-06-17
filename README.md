<h1 align="center">
   VIRAY
</h1>
<p align="center">
    <a href="#">
        <img src="https://img.shields.io/github/package-json/v/Rhh-Z/viray">
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/license/Rhh-Z/viray">
    </a>
</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

## 安装

### PNPM安装
推荐使用 pnpm 的方式安装
```Shell
pnpm i viray -S
```

### 其他安装方式
```Shell
npm i viray -S
yarn add viray -S
```

## 快速开始
### 完整引入
如果你对打包后的体积大小不是很在乎，那么使用完整导入会更方便。
```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import viray from 'viray';
const app = createApp(App);
app.use(viray).mount('#app');
```

### 按需引入
```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import {ViButton} from 'viray';
const app = createApp(App);
app.use(ViButton).mount('#app');
```

### 使用
```vue
<template>
    <vi-button type="primary">primary</vi-button>
</template>
```

## 仓库相关命令

### 安装 pnpm
```Shell
npm i pnpm -g
```
### 安装所有依赖
```Shell
pnpm install
```
### 启动本地测试项目
```Shell
cd ./play
pnpm run dev
```
### 打包组件库
```Shell
pnpm run build:viray
```
### 启动文档
```Shell
pnpm run docs:dev
```
### 单元测试
```Shell
pnpm run test
```
### 查看测试覆盖率
```Shell
pnpm run coverage
```