<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;<button
                @click="search">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "SearchComponent",//组件的名称
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        search() {
            //请求前更新状态
            this.$bus.$emit('getUsers', {
                isFirst: false,
                isLoading: true,
                ErrorMsg: '',
                users:[]
            });

            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
                .then(response => {
                    console.log(response.data.items);
                    //请求成功后更新状态
                    this.$bus.$emit('getUsers', {
                        isLoading: false,
                        ErrorMsg: '',
                        users: response.data.items
                    });
                }, error => {
                    console.log(error);
                    //请求失败后更新状态
                    this.$bus.$emit('getUsers', {
                        isLoading: false,
                        ErrorMsg: error.message,
                        users:[]
                    }); 
                })
        }
    }
}
</script>

<style scoped></style>
