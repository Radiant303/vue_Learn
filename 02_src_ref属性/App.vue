<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button v-on:click="showDOM">点我输出上方DOM元素</button>
    <MySchool/>
  </div>
</template>

<script>
import MySchool from './components/MySchool';
export default {
    name:'App',
    data(){
        return {msg:"欢迎"}
    },
    components:{
        MySchool
    },
    methods:{
        showDOM(){
            console.log(this.$refs.title)
        }
    }
}
</script>

<style>

</style>