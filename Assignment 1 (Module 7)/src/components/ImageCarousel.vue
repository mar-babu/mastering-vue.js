<script setup>
    import {ref, onMounted, nextTick, onBeforeUnmount} from "vue";

    const items = ref([
        'https://images.unsplash.com/photo-1691585505253-5dd60f26b0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1691585495436-fc49b8f99b87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1662747974578-5f0eeaee3a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1692023350707-33d901c2c4fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
        'https://images.unsplash.com/photo-1691853533232-78d352cf6d25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
        'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ])
    let carousel =null
    const newItem = ref('https://images.unsplash.com/photo-1691520673295-9626f624869b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')

    onMounted(()=>{
        initializeCarousel()
    })

    onBeforeUnmount(()=>{
        destroyCarousel()
    })

    function addNewItem(){
        items.value.push(newItem.value)
        destroyCarousel()
        nextTick(function (){
            carousel = new Flickity('#carousel',{})
        })
    }

    function initializeCarousel(){
        carousel = new Flickity('#carousel', {})
    }

    function destroyCarousel(){
        if (carousel){
            carousel.destroy()
            carousel = null
        }

    }

</script>

<template>
    <div>
        <div class="my-10 flex justify-center">
        <input type="text" v-model="newItem">
        <button @click="addNewItem()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Image
        </button>
    </div>
    <div class="my-10">
        <div class="mx-auto items bg-white rounded-lg" id="carousel">
            <div :style="`background-image:url(${item})`" class="item rounded-md px-6 py-3" v-for="(item, index) in items" :key="item">{{ index + 1 }} / {{ items.length }}</div>
        </div>
    </div>
    </div>
    
</template>

<style scoped>
    input {
        background-color: #191616;
    }

    .items {
        width: 600px;
        height: 400px;
    }

    .item {
        width: 600px;
        height: 400px;
        background-color: #ccc;
        background-size: cover;
    }
</style>