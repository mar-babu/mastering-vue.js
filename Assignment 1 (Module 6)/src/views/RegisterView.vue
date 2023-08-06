<script setup>
import { RouterLink } from 'vue-router';
import {reactive, ref} from 'vue';

const data = reactive({})
let message = ref('')

function signUp(){
	if(data.name && data.email && data.password && data.confirmPassword) {
		if(data.password == data.confirmPassword){
			localStorage.setItem('users', JSON.stringify(data))
			message.value = "You registered successfully, now you can sign in!"
		}else{
			message.value ="Password didn't match ! Pleae enter and confirm password!"
		}
	}else{
		message.value ="Please enter required information!"
	}
	
}
</script>

<template>
<!-- component -->
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative">
	<div class="absolute bg-white opacity-60 inset-0 z-0"></div>
	<div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
		<div class="text-center">
			<h2 class="mt-6 text-3xl font-bold text-gray-900">
				Register now
			</h2>
			<p class="mt-2 text-sm text-green-600">{{ message }}</p>      
		</div>
		<form class="mt-8 space-y-6" action="#" method="POST">
      <div class="relative">
				<label class="text-sm font-bold text-gray-700 tracking-wide">Name</label>
				<input v-model="data.name" class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Enter your name">
      </div>

			<div class="relative">
				<label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
				<input v-model="data.email" class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="mail@gmail.com">
      </div>

			<div class="mt-8 content-center">
				<label class="text-sm font-bold text-gray-700 tracking-wide">Password</label>
				<input v-model="data.password" type="password" class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Enter your password">
      </div>

      <div class="mt-8 content-center">
			<label class="text-sm font-bold text-gray-700 tracking-wide">Confirm Password</label>
			<input v-model="data.confirmPassword" type="password" class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Re enter your password">
      </div>

			<div>
				<button @click.prevent="signUp()" type="submit" class="w-full flex justify-center bg-gray-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300">Sign up </button>
			</div>
			<p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
				<span>Already have an account? </span>
				<RouterLink to="/" class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign in</RouterLink>
			</p>
		</form>
	</div>
</div>
</template>