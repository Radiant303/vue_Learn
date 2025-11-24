<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>地址:{{ address }}</h2>
        <button @click="sendSchoolName">发送学校名</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyStudent",
  data() {
    return { 
        msg: "欢迎",
        name:"尚硅谷",
        address:"北京市"
    };
  },
  methods:{

  },
  mounted(){
    this.pubid = pubsub.subscribe('hello',(msgName,msg)=>{
        console.log("有人发布Hello事件，事件回调执行了",msgName,msg)
    })
  },
  beforeDestroy(){
    pubsub.unsubscribe(this.pubid)
  }
};
</script>

<style lang="less" scoped>
    .school{
        background-color: pink;
        padding: 5px;
    }
</style>