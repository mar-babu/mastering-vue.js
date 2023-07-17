<script setup>
import { ref } from 'vue';

const pricingPlans = ref([
    {
        plan: 'Free',
        price: 0,
        features: [
            'There live the blind texts',
            'Far far away behind the word',
            'Far from the countries Vokalia and Consonantia',
        ],
        isActive: false,
    },
    {
        plan: 'Standard',
        price: 19.99,
        features: [
            'There live the blind texts',
            'Far far away behind the word',
            'Far from the countries Vokalia and Consonantia',
        ],
        isActive: true,
    },
    {
        plan: 'Premium',
        price: 79.99,
        features: [
            'There live the blind texts',
            'Far far away behind the word',
            'Far from the countries Vokalia and Consonantia',
        ],
        isActive: false,
    },
]);
</script>

<template>
    <div class="untree_co-section bg-light" id="pricing-section">
        <div class="container">
            <div class="row pricing-title">
                <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
                    <h2 class="heading">Pricing</h2>
                    <p>Pricing for everyone. Choose your plan now!</p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="row">
                        <!-- Use v-for directive to loop through pricingPlans -->
                        <div v-for="(plan, index) in pricingPlans" :key="index" class="col-lg-4" data-aos="fade-up"
                            :data-aos-delay="100 * index">
                            <div :class="['pricing', { 'active': plan.isActive }]">
                                <div class="body">
                                    <div class="price">
                                        <span class="d-block plan">{{ plan.plan }}</span>
                                        <span class="price"><sup>$</sup><span>{{ plan.price }}</span></span>
                                    </div>
                                    <ul class="list-unstyled ul-check primary mb-5">
                                        <li v-for="(feature, idx) in plan.features" :key="idx">{{ feature }}</li>
                                    </ul>
                                    <p class="text-center mb-0"><a href="#" class="btn btn-outline-primary" :class="{ 'active': plan.isActive }">Get Started</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
</style>
  