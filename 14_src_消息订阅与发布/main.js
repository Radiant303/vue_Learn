import Vue from "vue";
import App from "./App.vue";


//关闭Vue生产提示
Vue.config.productionTip = false


new Vue({
    el:"#app",
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this  //全局事件总线
    }
})

window.Vue = Vue // 把Vue挂载到window对象上，方便在控制台调试