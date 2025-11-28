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
        <button @click="JIA(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="jiaOdd(n)">当前求和为奇数再加</button>
        <button @click="jiaWait(n)">等一等再加</button>
    </div>
</template>
<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'  
export default {
    name: "CountComponent",//组件的名称
    data() {
        return {
            n: 1,//用户选择的数字

        }
    },
    computed: {
        //使用mapState辅助函数,将state中的sum,school,subject映射到组件的计算属性中(数组写法)
        ...mapState(['sum','school','subject']),

        //使用mapGetters辅助函数,将getters中的bigSum映射到组件的计算属性中(数组写法)
        ...mapGetters(['bigSum']),
    },
    methods: {
        //使用mapMutations辅助函数,将mutations中的JIA,JIAN映射到组件的方法中(数组写法)
        ...mapMutations(['JIA','JIAN']),

        //使用mapActions辅助函数,将actions中的jiaOdd,jiaWait映射到组件的方法中(数组写法)
        ...mapActions(['jiaOdd','jiaWait'])
    }
}
</script>
<style scoped>
button {
    margin-left: 5px;
}
</style>
