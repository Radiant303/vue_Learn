<template>
    <div class="row">
        <!-- 展示用户列表 -->
        <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px' />
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <!-- 展示首次加载状态 -->
        <div v-show="info.isFirst">
            <p>欢迎使用</p>
        </div>
        <!-- 展示加载状态 -->
        <div v-show="info.isLoading">
            <p>加载中...</p>
        </div>
        <!-- 展示错误信息 -->
        <div v-show="info.ErrorMsg">
            <p>{{info.ErrorMsg}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListComponent",//组件的名称
    data(){
        return {
            info:{
                isFirst: true,
                isLoading: false,
                ErrorMsg: '',
                users:[]
            }
        }
    },
    mounted(){
        this.$bus.$on('getUsers', (dataObj) => {
            console.log('我是list组件', dataObj);
            //更新状态
            this.info = {...this.info, ...dataObj};
        })
    }
}
</script>

<style scoped>
.album {
    min-height: 50rem;
    /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>