<template>
    <div class="category"> 
        <h3>{{title}}分类列表</h3>
        <slot name="center"></slot>
        <slot name="footer"></slot>
        <ul>
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul>   
    </div>
</template>
<script>
export default {
    name: "CategoryComponent",//组件的名称
    props:['listData','title'],//接收外部传递过来的数据
}
</script>
<style scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: #ff9b29;
}
video{
    width: 100%;
    height: 200px;
}
img{
    width: 100%;
}
</style>
