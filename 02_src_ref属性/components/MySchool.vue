<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
    name:"MySchool",
    data(){
        return{
            name:"尚硅谷",
            address:"北京前缘小区"
        }

    }

}
</script>

<style>
.school{
    background-color: skyblue;
}
</style>