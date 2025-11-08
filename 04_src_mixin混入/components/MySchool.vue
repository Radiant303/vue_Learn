<template>
  <div class="student">
    <h1 v-text="msg" ref="title"></h1>
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>地址:{{  address }}</h2>
  </div>
</template>

<script>
/* import { hunhe } from '@/mixin'; */
export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        name:"尚硅谷",
        address:"北京市"
    };
  },
/*   mixins:[hunhe] */


};
</script>

<style>
</style>