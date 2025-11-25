<template>
    <div class="category">
        <h3>{{ title }}分类列表</h3>
        <slot :youxi="games"></slot>
    </div>
</template>
<script>
export default {
    name: "CategoryComponent",//组件的名称
    data() {
        return {
            games: ['足球', '篮球', '跑步'],
        }
    }
}
</script>
<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: #ff9b29;
}

video {
    width: 100%;
    height: 200px;
}

img {
    width: 100%;
}
</style>
