<template>
  <div class="student">
    <h1 v-text="msg" ref="title"></h1>
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        name:"尚硅谷",
        address:"北京市"
    };
  },



};
</script>

<style>
</style>