<template>
    <div class="container">
        <SearchComponent></SearchComponent>
        <ListComponent></ListComponent>
    </div>
</template>

<script>
import ListComponent from './components/List.vue'
import SearchComponent from './components/Search.vue'
export default {
    name: "App",
    components: {
        SearchComponent,
        ListComponent
    }

};
</script>

<style></style>