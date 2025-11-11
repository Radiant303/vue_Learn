<template>
  <div class="demo">
    <h2 class="qwe">学校名称:{{ name }}</h2>
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

<style lang="less" scoped>
    .demo{
        background-color: pink;
        .qwe{
            font-size: 40px;
        }
    }
</style>