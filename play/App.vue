<template>
  <vi-button size="large">默认按钮</vi-button>
  <vi-button type="primary" plain size="large">主要按钮</vi-button>
  <vi-button type="warning" plain>警告按钮</vi-button>
  <vi-button type="info" text>信息按钮</vi-button>
  <vi-button type="danger" round active color="#fcfced">危险按钮</vi-button>
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
  <vi-icon name="search">12313213</vi-icon>
  <br/>
  <vi-icon name="down-circle"></vi-icon>
  <vi-icon name="zoomout"></vi-icon>
  <vi-icon name="close"></vi-icon>
  <vi-icon name="delete" size="24px"></vi-icon>
  <vi-icon name="delete" size="50px" color="#f2f"></vi-icon>
  <vi-icon name="delete" size="small"></vi-icon>
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
  <vi-text tag="wavy">wavy</vi-text>&nbsp;
  <vi-text tag="emp">emp</vi-text>&nbsp;
  <vi-text tag="psw">del</vi-text>&nbsp;
  <hr>
  <vi-text style="width: 100px;" truncated>delwwwwwwwwwwwwsssssssssssssss</vi-text>
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
  <div>
    <vi-input type="text" placeholder="please input" v-model="inputVlaue2" :maxlength="10" show-word-limit/>
    <vi-input type="text" disabled placeholder="dacaczx"/>
    <vi-input type="text" placeholder="please input" v-model="inputValue" clearable></vi-input>

    <vi-input type="passworld" placeholder="please input" v-model="inputVlaue2" showPassword/>

    <vi-input type="text" placeholder="Please input" prefixIcon="book"/>
    <vi-input type="text" placeholder="Please input" suffixIcon="car"/>
    <vi-input type="text" placeholder="Please input" v-model="inputVlaue2">
      <template #prefix>
        <vi-icon name="search"/>
      </template>
    </vi-input>
    <vi-input type="text" placeholder="Please input" :maxlength="12">
      <template #suffix>
        <vi-icon name="database"/>
      </template>
    </vi-input>
      <vi-input type="text" autocomplete="on">
      <template #prepend>Http://</template>
    </vi-input>
    <vi-input type="text">
      <template #append>.com</template>
    </vi-input>
    <hr>
    <vi-input type="textarea" />
    <vi-input type="textarea" disabled/>
    <vi-input>
        <template #prefix>
          <vi-icon name="search"/>
        </template>
    </vi-input>
  </div>
  <hr>
  <vi-progress :percentage="percentage" :color="customColors"/>
  <vi-button-group>
    <vi-button type="primary" @click="increase">+</vi-button>
    <vi-button type="primary" @click="decrease">-</vi-button>
  </vi-button-group>
  <vi-progress :percentage="80" color="#f56c6c" />
  <vi-progress :percentage="80" :format="format" status="warning"/>
  <vi-progress :percentage="40" :format="format" status="success"/>
  <vi-progress :percentage="60" :format="format" status="error"/>
  <vi-progress :percentage="60" :format="format" :stroke-width="24" :text-inside="true"/>
  <hr>
  <vi-progress type="circle" :percentage="60" />
  <vi-progress type="dashboard" :percentage="40" status="warning"/>


  <vi-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value" style="display: block;">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
  </vi-progress>

  <vi-progress :percentage="60" :duration="2" :indeterminate="true" :format="format"/>
  <hr/>

  <vi-button text @click="showDialog">showDialog</vi-button>

  <vi-dialog title="DialogTitle" width="500px">
    <!-- <template #title>
      提示
    </template> -->
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm">确定</vi-button>
    </template>
  </vi-dialog>

  <vi-dialog center width="500px" v-model="dialogVisible">
    <template #title>
      Center
    </template>
    <template #content>
      这是content
    </template>
    <template #footer>
      <vi-button @click="handleCancel">取消</vi-button>
      <vi-button type="primary" @click="handleConfirm">确定</vi-button>
    </template>
  </vi-dialog>

  <hr>
  <vi-button text type="primary" @click="handleMessage">Click to show message</vi-button>
  <vi-button text type="error" @click="handleErrorMessage">Click to show error message</vi-button>
  <vi-button text @click="openVn">VNode</vi-button>

  <div id="box"></div>
</template>

<script setup lang='ts'>
import { h, ref } from 'vue'
import { ViMessage } from "@viray/components/message"
const name = ref('里斯')



const send = (value: string) => {
  console.log(value);
}

const inputValue = ref('in it')

const inputVlaue2 = ref('formatter')

const dialogVisible = ref(false)

const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const format = (percentage:number) => (percentage === 100 ? 'Full' : `${percentage}%`)

let percentage = ref(0)

const increase = ()=>{
  if(percentage.value >= 100) return
  percentage.value += 10
}

const decrease = ()=>{
  if(percentage.value <= 0) return
  percentage.value -= 10
}

const showDialog = ()=>{
  dialogVisible.value = true
}

const handleCancel = ()=>{
  dialogVisible.value = false
}

const handleConfirm = ()=>{ 
  dialogVisible.value = false
}

const handleMessage = ()=>{
  ViMessage({
    message:'<emp>This is a message.</emp>',
    type:'success',
    duration:5000,
    dangerouslyUseHTMLString:true,
  })
}
const handleErrorMessage = ()=>{
  ViMessage({
    message:'This is a error message.',
    type:'error',
    center:true,
    duration:10000,
  })
}

const openVn = () => {
  ViMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>


<style lang='scss'>
#box{
  height: 1000px;
}
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

.vi-input {
  margin-bottom: 10px;
  width: 400px !important;
  margin-right: 10px;
}

textarea {
  width: 400px !important;
  // margin-right: 10px;
}
.vi-progress {
  margin-bottom: 10px;
}

.vi-progress--line {
  width: 350px;
}
</style>
