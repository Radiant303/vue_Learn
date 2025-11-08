<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名称:{{ studentName }}</h2>
        <h2>学生年龄:{{ age }}</h2>
    </div>
</template>

<script>
/* 组件交互相关的代码 */
export default {
    name: "MyStudent",
    data() {
        return {
            studentName: "张三",
            age: 18
        }

    },
    methods: {
    },
}
</script>


<style scoped>
/* 组件的样式 */
</style>