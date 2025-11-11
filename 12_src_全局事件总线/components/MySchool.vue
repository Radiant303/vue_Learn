<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
        <button @click="sendSchoolName">发送学校名</button>
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
  methods:{
    sendSchoolName(){
        this.$bus.$emit('hello',this.name)
    }
  },
  mounted(){
  }
};
</script>

<style lang="less" scoped>
    .school{
        background-color: pink;
        padding: 5px;
    }
</style>