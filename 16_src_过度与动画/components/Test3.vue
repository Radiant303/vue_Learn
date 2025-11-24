<template>
    <div>
        <button @click="isShow = !isShow">切换显示</button>
        <transition-group 
            name="animate__animated animate__bounce" 
            appear
            enter-active-class="animate__swing"
            leave-active-class="animate__backInUp">
            <h1 v-show="!isShow" key="1">Test2组件</h1>
            <h1 v-show="isShow" key="2">Test2组件</h1>
        </transition-group>
    </div>
</template>

<script>
import animate from 'animate.css'
export default {
    name: "TestThree",//组件的名称
    data() {
        return {
            isShow: true
        }
    }
}
</script>
<style scoped>
h1 {
    background-color: rgb(231, 255, 151);
}

</style>