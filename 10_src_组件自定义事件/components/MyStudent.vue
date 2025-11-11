<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age + 1 }}</h2>
    <button @click="sendStudentName">发送学生名字到App</button>
    <button @click="unbind">解绑</button>
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
  methods:{
    sendStudentName(){
        //触发student身上的实例atguigu
        this.$emit('atguigu',this.name)
/*         this.$emit('demo') */
    },
    unbind(){
        this.$off(['atguigu','demo'])
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