import Vue from "vue";
import App from "./App.vue";
import vueResource from "vue-resource"

//导入store对象
import store from "./store"

//关闭Vue生产提示
Vue.config.productionTip = false

// 安装vue-resource插件
Vue.use(vueResource)//安装vue-resource插件,可以在组件中使用this.$http发送请求


new Vue({
    el:"#app",
    render: h => h(App),
    store,//将store对象挂载到vue实例上
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})

window.Vue = Vue