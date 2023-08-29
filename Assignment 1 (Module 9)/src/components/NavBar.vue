<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import BASE_URL from '../Config/config';

const isNavbarOpen = ref(false);
const categories = ref([]);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};

categoryList();

async function categoryList(){
  let URL = 'https://basic-blog.teamrabbil.com/api/post-categories'
  let res = await axios.get(URL)
  console.log(res.data);
  categories.value = res.data
}


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container d-flex justify-content-between"> <!-- Use d-flex and justify-content-between -->
      <div>
        <RouterLink class="navbar-brand text-bold" to="/">MR BLOG</RouterLink>
      </div>
      <div>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link" :class="{ active: $route.path === '/' }" to="/">হোম</RouterLink>
            </li>
            <li class="nav-item" v-for="category in categories" :key="category.id">
              <RouterLink class="nav-link" :class="{ active: $route.path === '/' }" to="/">{{category.name}}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>