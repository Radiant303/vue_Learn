<template>
  <div class="student">
    <h1 v-text="msg" ref="title"></h1>
    <h2>学生姓名:{{ myName }}</h2>
    <h2>学生年龄:{{ myAge + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        myName:this.name,
        myAge:this.age
    };
  },
  //props:['name',"age"] //简单接收

  //接收的同时对数据类型进行限制
  /*   props:{
    name:String,
    age:Number
  } */

  //接收时对数据类型进行限制+默认值指定+必要性限制
  props: {
    name: {
      type: String,
      require: true, //是否必须
    },
    age: {
      type: Number, //类型
      default: 99 //默认值
    },
  },
};
</script>

<style>
</style>