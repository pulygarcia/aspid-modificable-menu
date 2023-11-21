<script setup>
    import {useItemsStore} from '../../stores/itemsStore';
    import {formatCurrency} from '../../helpers/index'

    const items = useItemsStore();
</script>

<template>
    <h2 class="text-center text-2xl font-bold mt-8">Carta</h2>
    <p class="text-gray-600 text-center">Aquí podrás visualizar como está el menú actualmente.</p>
</template>