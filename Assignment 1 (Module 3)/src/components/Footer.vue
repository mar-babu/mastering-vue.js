<script setup>
const telLink = "tel://11234567890";
const emailLink = "/cdn-cgi/l/email-protection#b4dddad2dbf4d9cdd0dbd9d5ddda9ad7dbd9";

const footerData = {
    aboutText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    socialLinks: [
        { icon: "instagram", href: "#" },
        { icon: "twitter", href: "#" },
        { icon: "facebook", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "pinterest", href: "#" },
        { icon: "dribbble", href: "#" },
    ],
    projects: [
        { title: "La Lega Stadium", href: "#" },
        { title: "France Building", href: "#" },
        { title: "22 New Homes", href: "#" },
        { title: "Manage Center", href: "#" },
        { title: "Sports Hall", href: "#" },
    ],
    services: [
        { title: "Architect", href: "#" },
        { title: "Interior Design", href: "#" },
        { title: "Landscape Design", href: "#" },
        { title: "Consultancy", href: "#" },
    ],
    address: "43 Raymouth Rd. Baltemoer, London 3910",
    phoneNumbers: ["+1(123)-456-7890", "+1(123)-456-7890"],
};

</script>

<template>
    <div class="site-footer">
      <div class="footer-dots"></div>
  
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>About Launch<span class="text-primary">.</span></h3>
              <p>{{ footerData.aboutText }}</p>
            </div>
  
            <div class="widget">
              <h3>Connect</h3>
              <ul class="list-unstyled social">
                <li v-for="link in footerData.socialLinks" :key="link.icon">
                  <a :href="link.href"><span :class="'icon-' + link.icon"></span></a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="col-lg-2 ml-auto">
            <div class="widget">
              <h3>Projects</h3>
              <ul class="list-unstyled float-left links">
                <li v-for="project in footerData.projects" :key="project.title">
                  <a :href="project.href">{{ project.title }}</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="col-lg-2">
            <div class="widget">
              <h3>Services</h3>
              <ul class="list-unstyled float-left links">
                <li v-for="service in footerData.services" :key="service.title">
                  <a :href="service.href">{{ service.title }}</a>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="col-lg-3">
            <div class="widget">
              <h3>Contact</h3>
              <address>{{ footerData.address }}</address>
              <ul class="list-unstyled links mb-4">
                <li v-for="number in footerData.phoneNumbers" :key="number">
                  <a :href="'tel://' + number">{{ number }}</a>
                </li>
                <li>
                  <a :href="footerData.emailLink"
                    ><span class="__cf_email__" v-html="footerData.emailLink"></span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="row mt-5">
          <div class="col-12 text-center">
            <p>
              Copyright &copy; All rights reserved | This template is made with
              <i class="icon-heart text-danger" aria-hidden="true"></i> by
              <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>
</style>
  