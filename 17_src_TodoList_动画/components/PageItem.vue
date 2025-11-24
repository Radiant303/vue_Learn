<template>
    <transition name="todo" appear> 
">
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
                <span v-show="!todo.isEdit">{{ todo.title }}</span>
                <input type="text" :value="todo.title" v-show="todo.isEdit" @blur="handleBlur(todo, $event)"
                    ref="inputTitle" />
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
        </li>
    </transition>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: "PageItem",
    props: ["todo"],
    methods: {
        handleCheck(id) {
            //通知APP组件将对应的todo对象的done值取反
            this.$bus.$emit('checkTodo', id);
        },
        handleDelete(id) {
            if (confirm("确定删除吗")) {
                pubsub.publish('deleteTodo', id);
            }
        },
        handleEdit(todo) {
            if (Object.prototype.hasOwnProperty.call(todo, 'isEdit')) todo.isEdit = true;
            this.$set(todo, 'isEdit', true);
            // 自动将输入框中的内容选中
            this.$nextTick(() => {
                this.$refs.inputTitle.focus();
            })
        },
        // 失去焦点时，将isEdit设置为false
        handleBlur(todo, event) {
            todo.isEdit = false;
            if (event.target.value.trim() === "") {
                alert("输入不能为空");
                return;
            }
            // 通知APP组件将对应的todo对象的title值更新为输入框中的值
            this.$bus.$emit('updateTodo', todo.id, event.target.value);
        }
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

.todo-enter-active,.todo-leave-active{ 
    transition:0.5s linear;
}
.todo-enter,.todo-leave-to{
    transform: translateX(100%);
}
.todo-enter-to,.todo-leave{
    transform: translateX(0px);
}
</style>