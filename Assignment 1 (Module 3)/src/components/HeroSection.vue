<script setup>
  let heroSection = {
      imageSrc: "src/assets/images/market-launch-pana.svg",
      imageAlt: "Image",
      headingText: "Promote Your Products by Colorlib",
      excerptText: `Another cool free html css template by <a href="#" target="_blank" class="highlight">Colorlib</a> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast`,
      btnGroup: {
        leftBtnText: "See Features",
        leftBtnUrl: "#features-section",
        rightBtnText: "Pricing",
        rightBtnUrl: "#pricing-section"
      },
      imageAnimation: "fade-right",
      headingAnimation: "fade-up",
      excerptAnimation: "fade-up",
      buttonsAnimation: "fade-up",
  }
</script>

<template>
    <div class="untree_co-hero" id="home-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="dots"></div>

                    <div class="row align-items-center">
                        <div class="col-lg-7 ml-auto order-lg-2" :data-aos="heroSection.imageAnimation" :data-aos-delay="400">
                            <img :src="heroSection.imageSrc" :alt="heroSection.imageAlt" class="img-fluid">
                        </div>

                        <div class="col-lg-5">
                            <h1 class="heading" :data-aos="heroSection.headingAnimation" :data-aos-delay="0">{{ heroSection.headingText }}</h1>

                            <div class="excerpt" :data-aos="heroSection.excerptAnimation" :data-aos-delay="100">
                                <p v-html="heroSection.excerptText"></p>
                            </div>

                            <p :data-aos="heroSection.buttonsAnimation" :data-aos-delay="200">
                                <a :href="heroSection.btnGroup.leftBtnUrl" class="btn btn-primary smoothscroll">{{ heroSection.btnGroup.leftBtnText }}</a>
                                <a :href="heroSection.btnGroup.rightBtnUrl" class="btn btn-outline-primary smoothscroll">{{ heroSection.btnGroup.rightBtnText }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>