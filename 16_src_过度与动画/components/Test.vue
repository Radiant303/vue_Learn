<template>
    <div>
        <button @click="isShow = !isShow">切换显示</button>
        <transition  name="hello" appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: "TestComponent",//组件的名称
    data() {
        return {
           isShow: true
        }
    }
}
</script>

<style scoped>
    h1 {
        background-color: rgba(146, 252, 185, 0.534);
    }

    .hello-enter-active{
        animation: atguigu 0.5s;
    }

    .hello-leave-active{
        animation: atguigu 0.5s reverse;
    }
    @keyframes atguigu {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0px);
        }
    }
</style>
