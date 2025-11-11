<template>
   <ul class="todo-main">
       <PageItem 
            v-for="(item) in todos" 
            v-bind:key="item.id" 
            :todo="item"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo">
        </PageItem>
    </ul>
</template>

<script>
import PageItem from './PageItem.vue';
export default {
name:"PageList",
components:{PageItem},
props:['todos','checkTodo','deleteTodo']
}
</script>

<style>

</style>