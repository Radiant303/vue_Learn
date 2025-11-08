import Vue from "vue";
import App from "./App.vue";
import { hunhe } from "./mixin";

//关闭Vue生产提示
Vue.config.productionTip = false
Vue.mixin(hunhe)

new Vue({
    el:"#app",
    render: h => h(App)
})