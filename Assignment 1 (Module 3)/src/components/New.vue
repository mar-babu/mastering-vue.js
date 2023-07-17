<script setup>
const newsItems = [
    {
        author: "James",
        date: "Jun 14, 2020",
        image: "src/assets/images/person_1.jpg",
        title: "Far far away behind the word mountains far from the countries",
        link: "#",
    },
    {
        author: "Khan",
        date: "Jun 14, 2020",
        image: "src/assets/images/person_2.jpg",
        title: "Far far away behind the word mountains far from the countries",
        link: "#",
    },
    {
        author: "Rob",
        date: "Jun 14, 2020",
        image: "src/assets/images/person_3.jpg",
        title: "Far far away behind the word mountains far from the countries",
        link: "#",
    },
];
</script>

<template>
    <div class="untree_co-section bg-light">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
                    <h2 class="heading">Our News</h2>
                    <p>Far from the countries Vokalia and Consonantia</p>
                </div>
            </div>
            <div class="row">
                <div v-for="(item, index) in newsItems" :key="index" class="col-md-6 mb-4 mb-lg-0 col-lg-4"
                    data-aos="fade-up" :data-aos-delay="index * 100">
                    <div class="news-item">
                        <div class="vcard d-flex align-items-center mb-4">
                            <div class="img-wrap">
                                <img :src="item.image" :alt="item.author" class="img-fluid">
                            </div>
                            <div class="post-meta">
                                <strong>Posted by {{ item.author }}</strong>
                                <span>{{ item.date }}</span>
                            </div>
                        </div>
                        <div class="news-contents mb-4">
                            <span class="post-meta-2">Digital Service, 4 min read</span>
                            <h3><a :href="item.link">{{ item.title }}</a></h3>
                        </div>
                        <p class="mb-0"><a :href="item.link" class="read-more-arrow">
                                <svg class="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16"
                                    fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z" />
                                    <path fill-rule="evenodd"
                                        d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z" />
                                </svg>
                            </a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
</style>
  