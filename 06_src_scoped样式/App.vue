<template>
  <div>
    <MySchool />
    <hr/>
    <MyStudent />
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
};
</script>

<style>
</style> 