<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age + 1 }}</h2>
    <button></button>
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
  mounted(){
    this.$bus.$on('hello',(data)=>{
        console.log("我是Student",data)
    })
  },
  beforeDestroy(){
    this.$bus.$off('hello')
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