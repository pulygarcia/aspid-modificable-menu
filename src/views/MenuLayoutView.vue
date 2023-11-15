<script setup>
    import {RouterView} from 'vue-router'
    import Header from '../components/Header.vue';
</script>

<template>
    <Header />

    <main class="container mx-auto w-11/12 md:w-full py-20">
        <h2 class="text-center text-lg">Menú</h2>
        <RouterView />
    </main>
</template>