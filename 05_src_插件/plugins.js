export default{
    install(Vue){
        Vue.mixin({
            data(){
                return {
                    x:10
                }
            }
        })

        Vue.prototype.hello = ()=>{alert("你好啊！")}
    }
}

