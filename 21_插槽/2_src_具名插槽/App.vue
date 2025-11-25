<template>
    <div class="container">
        <CategoryComponent :listData="foods" title="美食">
            <img slot="center" src="https://img.shetu66.com/2024/04/10/171275757184677979.jpg" alt="">
            <a slot="footer" href="https://www.baidu.com">更多美食</a>
        </CategoryComponent>
        <CategoryComponent :listData="games" title="游戏">
            <div class="footer" slot="footer">
                <a href="https://www.baidu.com">单机游戏</a>
                <a href="https://www.baidu.com">网络游戏</a>
            </div>
        </CategoryComponent>

        <CategoryComponent :listData="files" title="书籍">
            <video slot="center" src="http://api.mmp.cc/api/ksvideo?type=mp4&id=jk" controls></video>
            <template v-slot:footer>
                <div class="footer">
                    <a href="https://www.baidu.com">经典</a>
                    <a href="https://www.baidu.com">现代</a>
                    <a href="https://www.baidu.com">当代</a>
                </div>
                <h4>欢迎来到书籍分类</h4>
            </template>
        </CategoryComponent>
    </div>
</template>

<script>
import CategoryComponent from './components/Category.vue'
export default {
    name: "App",
    components: {
        CategoryComponent
    },
    data() {
        return {
            foods: ['鱼香肉丝', '红烧肉', '青椒肉丝'],
            games: ['足球', '篮球', '跑步'],
            files: ['《三国演义》', '《水浒传》', '《西游记》']
        }
    }

};
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
}

.footer {
    display: flex;
    justify-content: space-between;
}

h4 {
    text-align: center;
}
</style>
