<template>
    <div>
        <button @click="getStudent">获取学生信息</button>
        <button @click="getCar">获取汽车信息</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "App",
    methods: {
        getStudent() {
            axios.get('http://localhost:8080/getStudent/students').then(
                response => {
                    console.log('请求成功，返回数据为：', response.data);
                },
                error => {
                    console.log('请求失败，错误信息为：', error.message);
                }
            )
        },
        getCar() {
            axios.get('http://localhost:8080/getCar/cars').then(
                response => {
                    console.log('请求成功，返回数据为：', response.data);
                },
                error => {
                    console.log('请求失败，错误信息为：', error.message);
                }
            )
        },
    }
};
</script>

<style>
</style>