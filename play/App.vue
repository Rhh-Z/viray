<template>
  <vi-button type="success">默认按钮</vi-button>
  <vi-button type="primary" plain disabled>主要按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="info" text>信息按钮</vi-button>
  <vi-button type="danger" size="small" round active>危险按钮</vi-button>
  <vi-button type="success">成功按钮</vi-button>
  <vi-button type="error" text>错误按钮</vi-button>
  <vi-button type="info" text @click="send(name)">信息按钮</vi-button>
  <vi-button type="info" icon="down-circle" disabled>loading</vi-button>
  <hr>
  <vi-button-group>
    <vi-button type="info" icon="down-circle"></vi-button>
    <vi-button type="info" icon="search"></vi-button>
    <vi-button type="info" icon="down-circle"></vi-button>
  </vi-button-group>
  <vi-button-group>
    <vi-button type="primary" icon="down-circle"></vi-button>
    <vi-button type="primary" icon="search"></vi-button>
    <vi-button type="primary" icon="down-circle"></vi-button>
  </vi-button-group>
  <hr>
  <vi-icon name="search"></vi-icon>
  <vi-icon name="down-circle"></vi-icon>
  <vi-icon name="zoomout"></vi-icon>
  <vi-icon name="close"></vi-icon>
  <hr>
  <div>
    <vi-row :gutter="0" justify="space-around" align="bottom">
      <vi-col tag="div" :span="3">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="6">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="10">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="4" :offset="0">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
    </vi-row>
  </div>
  <div>
    <vi-row :gutter="10" justify="space-around" align="bottom">
      <vi-col tag="div" :span="3">
        <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="3">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="10">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
      <vi-col tag="div" :span="2" :offset="0">
        <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
      </vi-col>
    </vi-row>
  </div>
  <hr>
  <vi-text type="default">default</vi-text>&nbsp;
  <vi-text type="primary">primary</vi-text>&nbsp;
  <vi-text type="danger">danger</vi-text>&nbsp;
  <vi-text type="info" size="large">info</vi-text>&nbsp;
  <vi-text type="info" size="default">info</vi-text>&nbsp;
  <vi-text type="info" size="small">info</vi-text>&nbsp;
  <vi-text tag="kbd">kbd</vi-text>&nbsp;
  <vi-text tag="del">del</vi-text>&nbsp;
  <vi-text tag="mark">del</vi-text>&nbsp;
  <vi-text tag="i">del</vi-text>&nbsp;
  <vi-text tag="b">del</vi-text>&nbsp;
  <vi-text tag="psw">del</vi-text>&nbsp;
  <hr>
  <vi-text style="width: 100px;" truncated>delwwwwwwwwwwwwsssssssssssssss</vi-text>&nbsp;
  <vi-row>
    <vi-col :span="4">
      <vi-text truncated>Squeezed by parent viement</vi-text>
    </vi-col>
  </vi-row>
  <hr>
  <vi-alert type="info" description="info" :showIcon="true" />
  <vi-alert type="success" title="success alert" :showIcon="true" />
  <vi-alert type="error" title="title" description="error" :showIcon="true" />
  <vi-alert type="warning" center description="warning" :showIcon="true" />
  <hr>
  <vi-checkbox v-model="checkboxValue" :value="name">{{ checkboxValue }}</vi-checkbox>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const name = ref('里斯')

const checkboxValue = ref(false)

const send = (value: string) => {
  console.log(value);
}


</script>


<style lang='scss' scoped>
.vi-row {
  margin: 10px;
}

.vi-row:last-child {
  margin-bottom: 0;
}

.vi-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: purple;
}
</style>
