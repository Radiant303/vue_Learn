<template>
    <div>
        <h1>人员列表</h1>
        <h3>当前求和值是：{{sum}}</h3>
        <input v-model="newName" type="text" placeholder="请输入姓名">
        <button @click="add">添加</button>
        <ul>
            <li v-for="item in personList" :key="item.id">{{item.id}}--{{item.name}}</li>  
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapState,mapMutations } from 'vuex'
export default {
    name: "Person",//组件的名称
    data() {
        return {
            newName: ''
        }
    },
    computed: {
       personList(){
           return this.$store.state.personList
       },
       sum(){
           return this.$store.state.sum
       }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.newName}
            this.$store.commit('ADD_PERSON',personObj)
            this.newName = ''
        }
    }
}
</script>