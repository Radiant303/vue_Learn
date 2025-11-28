import Vue from "vue"
//该文件用于创建vuex的状态树
import Vuex from "vuex"

Vue.use(Vuex)//安装vuex插件,可以在组件中使用this.$store访问vuex的状态树

//定义actions对象,用于响应组件中的动作
const actions ={
    jiaOdd(context,value){
        if(context.state.sum % 2 !== 0){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}
//定义mutations对象,用于直接更新状态
const mutations ={
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    JIAODD(state,value){
        state.sum += value
    },
    JIAWAIT(state,value){
        state.sum += value
    }
} 
//定义state对象,用于存储状态
const state ={
    sum: 0,//当前求和
    school: '尚硅谷',
    subject: '前端'
}

//定义getters对象,用于对状态进行加工处理
const getters ={
    bigSum(state){
        return state.sum * 10
    }
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,//对象的简写形式
    getters
})

//导出store对象
export default store