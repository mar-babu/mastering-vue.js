<script setup>
const services = [
    {
        title: 'Grow Your Business',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        title: 'Build Products',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        title: 'Success Every Day',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        title: 'Bring Ideas to Life',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
];
</script>
<template>
    <div class="untree_co-section">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
                    <h2 class="heading">Advantage of using our products</h2>
                    <p>Far from the countries Vokalia and Consonantia</p>
                </div>
            </div>
            <div class="row">
                <!-- Use v-for directive to loop through services -->
                <div v-for="(service, index) in services" :key="index" class="col-lg-6 mb-4" :data-aos="`fade-up`"
                    :data-aos-delay="100 * index">
                    <div class="service horizontal d-flex">
                        <div :class="`service-icon color-${index + 1} mb-4`">
                            <!-- Replace the service icon here (SVG code) -->
                        </div>
                        <div class="service-contents">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                            <p><a href="#" class="read-more">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
</style>
  