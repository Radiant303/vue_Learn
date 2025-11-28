<template>
    <div>
       <CountComponent></CountComponent>
       <Person></Person>
    </div>
</template>

<script>
import CountComponent from './components/Count.vue'
import Person from './components/Person.vue'
export default {
    name: "App",
    components: {
        CountComponent,
        Person
    },
    data() {
        return {

        }
    }

};
</script>

<style>

</style>
