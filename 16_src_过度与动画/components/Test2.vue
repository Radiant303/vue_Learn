<template>
    <div>
        <button @click="isShow = !isShow">切换显示</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">Test2组件</h1>
            <h1 v-show="isShow" key="2">Test2组件</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "TestTwo",//组件的名称
    data() {
        return {
            isShow: true
        }
    }
}
</script>
<style scoped>
h1 {
    background-color: rgb(118, 230, 255);
}
.hello-enter-active,.hello-leave-active{ 
    transition:0.5s linear;
}
.hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}
.hello-enter-to,.hello-leave{
    transform: translateX(0px);
}

</style>