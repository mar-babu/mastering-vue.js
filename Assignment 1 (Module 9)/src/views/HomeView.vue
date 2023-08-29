<script setup>
    import axios from 'axios';
    import { ref, onMounted } from 'vue'
    import { RouterLink } from 'vue-router'

    const latestNews = ref()
    const isLoad = ref(false)


    async function getLatestNews() {
        try {
            const response = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest')
            if (response.status == 200) {
                latestNews.value = response.data;
            }
        } catch (error) {
            isLoad.value = true
            console.log(isLoad)
        }
    }
    onMounted(() => {
        getLatestNews()
    })

</script>

<template v-if="false == isLoad">
    <div class="container mt-5">
        <div class="card" v-for="(item, index) in latestNews" :key="index">
            <div  v-if="index > 3">
                <img :src="item.img" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                        <RouterLink :to="{ name: 'postDetails', params: { id: item.id } }">
                            {{ item.title }}
                        </RouterLink>
                    </h5>
                    <p class="card-text">{{ item.short }}</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>

</style>