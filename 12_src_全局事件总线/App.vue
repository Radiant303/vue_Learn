<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <MySchool></MySchool>
    <MyStudent></MyStudent>
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
  }
};
</script>

<style>
.app{
    padding: 5px;
}
</style> 