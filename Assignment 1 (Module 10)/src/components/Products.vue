<script setup>
    import axios from 'axios';
    import { ref, onBeforeMount } from 'vue';

    const products = ref([]);

    onBeforeMount(() => {
        axios.get(`https://dummyjson.com/products?limit=20`)
        .then(response => {
            products.value = response.data.products;
        })
        .then(error => {
            console.log(error)
        })
    });

</script>

<template>
    <h1 class="text-center">Products Page</h1>

    <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <span v-for="product in products" :key="product.id">
                    <router-link :to="{ name: 'product', params: { id: product.id }}">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img :src="`https://i.dummyjson.com/data/products/${product.id}/thumbnail.jpg`" alt="" class="h-full w-full object-cover object-center group-hover:opacity-75">
                        </div>
                        <div class="float-left">
                            <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
                        </div>
                        <div class="float-right">
                            <router-link :to="{ name: 'product', params: { id: product.id }}" class="mt-10 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">View Details</router-link> 
                        </div>
                    </router-link> 
                </span>

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
