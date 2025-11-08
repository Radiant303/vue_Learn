<template>
  <div>
    <hr />
    <MyStudent name="李四" :age="18"/>
    <hr />
    <MyStudent name="王老五" :age="20"/>
    <hr />
    <MyStudent name="张三" :age="22"/>
  </div>
</template>

<script>
import MyStudent from "./components/MyStudent";
export default {
  name: "App",
  components: {
    MyStudent,
  },
  methods: {},
};
</script>

<style>
</style>