<template>
  <div class="student">
    <h1 v-text="msg" ref="title"></h1>
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age + 1 }}</h2>
  </div>
</template>

<script>
/* import { hunhe } from '@/mixin'; */
export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        name:"张三",
        age:19
    };
  },
/*   mixins:[hunhe] */
};
</script>

<style>
</style>