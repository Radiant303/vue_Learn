<template>
  <div class="app">
    <h1>{{ msg }},学生姓名是{{ StudentName }}</h1>
    <MySchool :getSchoolName="getSchoolName"/>
    <hr/>
    <!-- <MyStudent @atguigu.once="getStudentName"/> -->



    <MyStudent ref="student" @demo="m1"/>
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent";
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool
  },
  data(){
    return {
        msg:"你好啊",
        StudentName:""
    }
  },
  methods:{
    getSchoolName(name){
        console.log("App收到了学校名：",name)
    },
    getStudentName(name,...params){
        console.log("App收到了学生名：",StudentName)
        this.StudentName = name

    },
    m1(){
        console.log("demo事件被触发了")
    }
  },
  mounted(){
    this.$refs.student.$on('atguigu',this.getStudentName)

  }
};
</script>

<style>
.app{
    padding: 5px;
}
</style> 