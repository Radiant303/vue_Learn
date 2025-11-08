<template>
  <div>
    <MySchool name="李四"/>
    <hr />
    <MyStudent name="王老五" :age="20"/>
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
  methods: {},
};
</script>

<style>
</style>