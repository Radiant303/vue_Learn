<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age + 1 }}</h2>
    <button @click="sendStudentName">发送学生名</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        name:"张三",
        age:19
    };
  },
  mounted(){
  },
  beforeDestroy(){
  },
  methods:{
    sendStudentName(){
        pubsub.publish('hello',this.name)
    }
  }

};
</script>

<style>
.student{
    background-color:orange;
            padding: 5px;
            margin-top: 30px;
}
</style>