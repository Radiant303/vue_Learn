<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h3>当前求和的十倍为{{bigSum}}</h3>
        <h3>当前学校为{{school}}</h3>
        <h3>当前学科为{{subject}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'
export default {
    name: "CountComponent",//组件的名称
    data() {
        return {
            n: 1,//用户选择的数字

        }
    },
    computed: {
        
        //使用mapGetters辅助函数,将getters中的bigSum映射到组件的计算属性中(对象写法)
/*         bigSum(){
            return this.$store.getters.bigSum
        }, */


        //使用mapState辅助函数,将state中的sum,school,subject映射到组件的计算属性中(对象写法)
/*         ...mapState({
            sum:'sum',
            school:'school',
            subject:'subject'
        }) */

        //使用mapState辅助函数,将state中的sum,school,subject映射到组件的计算属性中(数组写法)
        ...mapState(['sum','school','subject']),

        //使用mapGetters辅助函数,将getters中的bigSum映射到组件的计算属性中(数组写法)
        ...mapGetters(['bigSum']),
    },
    methods: {
        increment() {
            this.$store.commit('JIA',this.n)
        },
        decrement() {
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait() {
            this.$store.dispatch('jiaWait',this.n)
        }
    }
}
</script>
<style scoped>
button {
    margin-left: 5px;
}
</style>
