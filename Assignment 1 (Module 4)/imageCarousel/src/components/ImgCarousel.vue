<script setup>
    import { ref, computed } from 'vue';

    const images = ref([
    'https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60',
    'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60',
    'https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60',
    //'https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d??ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60'
    // Add more image URLs here
    ]);

    const currentIndex = ref(0);

    const currentImage = computed(() => images.value[currentIndex.value]);

    const nextImage = () => {
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };

    const prevImage = () => {
        currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
    };

</script>

<template>
    <div class="image-carousel">
        <div class="carousel-container">
            <img :src="currentImage" alt="Carousel Image" />
        </div>
        <div class="navigation">
            <button @click="prevImage" class="btn btn-primary">Previous</button>
            <button @click="nextImage" class="btn btn-primary">Next</button>
        </div>
    </div>

</template>
    
<style scoped>
    /*custom CSS or Bootstrap classes for styling */
    .carousel-container {
        max-width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .carousel-container img {
        max-width: 100%;
        height: auto;
    }
    
</style>
  