<template>
    <div class="container">
        <CategoryComponent title="游戏">
           <template scope="atguigu">
            <ul>
                <li v-for="(item, index) in atguigu.youxi" :key="index">{{ item }}</li>
            </ul>
            </template>
        </CategoryComponent>
        <CategoryComponent title="游戏">
            <template scope="atguigu">
            <ol>
                <li style="color: red;" v-for="(item, index) in atguigu.youxi" :key="index">{{ item }}</li>
            </ol>
            </template>
        </CategoryComponent>
        <CategoryComponent title="游戏">
            <template scope="atguigu">
                <h4 v-for="(item, index) in atguigu.youxi" :key="index">{{ item }}</h4>
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
