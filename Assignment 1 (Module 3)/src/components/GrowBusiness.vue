<script setup>
const activeServiceIndex = 0;
  const services = [
    {
      title: "Grow Your Business",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "#",
      icon: "app-indicator",
    },
    {
      title: "Build Products",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "#",
      icon: "arrow-repeat",
    },
    {
      title: "Success Every Day",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "#",
      icon: "briefcase",
    },
    {
      title: "Bring Ideas to Life",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      link: "#",
      icon: "collection",
    },
  ];

  let image = 'src/assets/images/dashboard.jpg';

</script>

<template> 
    <!-- First section -->
    <div class="untree_co-section bg-light">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 order-lg-2 js-custom-dots">
            <a
              v-for="(service, index) in services"
              :key="index"
              :href="service.link"
              class="service link horizontal d-flex"
              :class="{ active: index === activeServiceIndex }"
              :data-aos="'fade-left'"
              :data-aos-delay="index * 100"
            >
              <div :class="'service-icon color-' + (index + 1) + ' mb-4'">
                <svg
                  v-show="service.icon === 'app-indicator'"
                  class="bi bi-app-indicator"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                  />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                <!-- Add more icons if needed -->
              </div>
              <div class="service-contents">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </a>
          </div>
          <div class="col-lg-7">
            <div class="img-shadow">
                  <div class="owl-single no-dots owl-carousel">
                      <div v-for="index in 4" :key=index class="item">
                          <span class="number">{{ index+1}}/4</span>
                          <img :src="image" alt="Image" class="img-fluid">
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second section -->
    <div class="untree_co-section">
      <div class="container">
        <div class="row">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="col-md-6 mb-4 mb-lg-0 col-lg-3"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
          >
            <div class="service">
              <div :class="'service-icon color-' + (index + 1) + ' mb-4'">
                <svg
                  v-if="service.icon === 'app-indicator'"
                  class="bi bi-app-indicator"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                  />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg> 
              </div>
              <div class="service-contents">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
</template>

<style scoped>
</style>
