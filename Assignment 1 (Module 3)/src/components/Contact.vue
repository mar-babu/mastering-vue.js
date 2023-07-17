<script setup>
const formData = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

const phoneNumber = "+1(123)-456-7890";
const email = "info@colorlib.com";
const website = "https://colorlib.com/";
 
const telLink = "tel://" + phoneNumber.replace(/\D/g, "");
const emailLink = "/cdn-cgi/l/email-protection#" + encodeEmail(email);
const websiteLink = website;
 
function encodeEmail (email) {
  const charCodeArray = email.split("").map(char => char.charCodeAt(0));
  return charCodeArray.map(charCode => ("&#" + charCode + ";")).join("");
}
 
function submitForm () { 
}
</script>

<template>
  <div class="untree_co-section" id="contact-section">
    <div class="container">
      <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="col-12 text-center">
          <h2 class="heading">Get In Touch</h2>
          <p>Far from the countries Vokalia and Consonantia</p>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-7">
          <form class="contact-form" data-aos="fade-up" data-aos-delay="100" @submit.prevent="submitForm">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="fname">First name</label>
                  <input v-model="formData.firstName" type="text" class="form-control" id="fname" />
                </div>
              </div>

              <div class="col-6">
                <div class="form-group">
                  <label class="" for="lname">Last name</label>
                  <input v-model="formData.lastName" type="text" class="form-control" id="lname" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="" for="email">Email address</label>
              <input v-model="formData.email" type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label class="" for="message">Message</label>
              <textarea v-model="formData.message" name="" class="form-control" id="message" cols="30"
                rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
          <h3 class="h5 mb-4">Contact Info</h3>
          <address class="text-black d-flex">
            <span class="mt-1 icon-room mr-2"></span><span>43 Raymouth Rd. Baltemoer, London 3910</span>
          </address>
          <ul class="list-unstyled ul-links mb-4">
            <li>
              <a :href="telLink" class="d-flex"><span class="mt-1 icon-phone mr-2"></span><span>{{ phoneNumber
              }}</span></a>
            </li>
            <li>
              <a :href="emailLink" class="d-flex"><span class="mt-1 icon-envelope mr-2"></span><span>{{ email
              }}</span></a>
            </li>
            <li>
              <a :href="websiteLink" target="_blank" class="d-flex"><span class="mt-1 icon-globe mr-2"></span><span>{{
                website }}</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
