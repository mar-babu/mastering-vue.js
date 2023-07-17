<script setup>
  const description1 = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
  const description2 = "Separated they live in Bookmarksgrove right at the coast";
</script>

<template>
  <div class="untree_co-section" id="about-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <img src="/src/assets/images/about.svg" alt="Image" class="img-fluid">
        </div>
        <div class="col-lg-4">
          <div class="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <span class="caption">About</span>
            <h2 class="heading">About Us</h2>
          </div>
          <div class="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <p><strong>{{ description1 }}</strong></p>
            <p><span class="highlight">{{ description2 }}</span>, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.</p>
          </div>
          <ul class="list-unstyled ul-check primary mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <li>There live the blind texts</li>
            <li>Far far away behind the word</li>
            <li>Their place and supplies</li>
          </ul>
          <div class="row count-numbers">
            <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              <span class="counter d-block"><span data-number="59">59</span><span>M</span></span>
              <span class="caption-2">Members</span>
            </div>
            <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
              <span class="counter d-block"><span data-number="14">14</span><span></span></span>
              <span class="caption-2">Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
