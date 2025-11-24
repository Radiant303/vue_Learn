<template>
   <ul class="todo-main">
       <PageItem 
            v-for="item in todos" 
            :key="item.id"
            :todo="item">
        </PageItem>
    </ul>
</template>

<script>
import PageItem from './PageItem.vue';
export default {
name:"PageList",
components:{PageItem},
props:['todos']
}
</script>

<style>

</style>