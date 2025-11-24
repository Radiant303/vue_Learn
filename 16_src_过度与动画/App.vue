<template>
<div>
    <TestComponent></TestComponent>
    <TestTwo></TestTwo>
    <TestThree></TestThree>
</div>
</template>

<script>
import TestComponent from './components/Test.vue';
import TestTwo from './components/Test2.vue';
import TestThree from './components/Test3.vue';

export default {
    name: "App", 
    components: { TestComponent, TestTwo, TestThree },   
};
</script>

<style>

</style>