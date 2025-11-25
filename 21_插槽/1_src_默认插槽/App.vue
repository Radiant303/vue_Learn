<template>
    <div class="container">
        <CategoryComponent :listData="foods" title="美食">
            <img src="https://img.shetu66.com/2024/04/10/171275757184677979.jpg" alt="">
        </CategoryComponent>
        <CategoryComponent :listData="games" title="游戏">
            <video src="http://api.mmp.cc/api/ksvideo?type=mp4&id=jk" controls></video>
        </CategoryComponent>

        <CategoryComponent :listData="files" title="书籍"></CategoryComponent>
    </div>
</template> 

<script>
import CategoryComponent from './components/Category.vue'
export default {
    name: "App",
    components: {
        CategoryComponent
    },
    data(){
        return{
            foods:['鱼香肉丝','红烧肉','青椒肉丝'],
            games:['足球','篮球','跑步'],
            files:['《三国演义》','《水浒传》','《西游记》']
        }
    }

};
</script>

<style>
.container{
    display: flex;
    justify-content: space-between;
}
</style>
