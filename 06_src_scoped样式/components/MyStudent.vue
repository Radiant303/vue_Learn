<template>
  <div class="demo">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age + 1 }}</h2>
  </div>
</template>

<script>

export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        name:"张三",
        age:19
    };
  },

};
</script>

<style>
.demo{
    background-color:orange;
}
</style>