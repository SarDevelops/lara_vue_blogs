<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Register",
});
</script>

<template>

                <form action="#" @submit="register">
                    <div class="flex flex-col mb-5">
                        <label
                            for="email"
                            class="mb-1 text-xs tracking-wide text-gray-600"
                            >Name:</label
                        >
                        <div class="relative">
                            <div
                                class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"
                            >
                                <i class="text-blue-500 fas fa-user"></i>
                            </div>

                            <input
                                v-model="user.name"
                                id="name"
                                type="text"
                                name="name"
                                class="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-400"
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col mb-5">
                        <label
                            for="email"
                            class="mb-1 text-xs tracking-wide text-gray-600"
                            >E-Mail Address:</label
                        >
                        <div class="relative">
                            <div
                                class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"
                            >
                                <i class="text-blue-500 fas fa-at"></i>
                            </div>

                            <input
                                v-model="user.email"
                                id="email"
                                type="email"
                                name="email"
                                class="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-400"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <label
                            for="password"
                            class="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
                            >Password:</label
                        >
                        <div class="relative">
                            <div
                                class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"
                            >
                                <span>
                                    <i class="text-blue-500 fas fa-lock"></i>
                                </span>
                            </div>

                            <input
                                v-model="user.password"
                                id="password"
                                type="password"
                                name="password"
                                class="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>

                    <div class="flex flex-col mb-6">
                        <label
                            for="password_confirmation"
                            class="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
                        >Confirm Password:</label
                        >
                        <div class="relative">
                            <div
                                class="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400"
                            >
                                <span>
                                    <i class="text-blue-500 fas fa-lock"></i>
                                </span>
                            </div>

                            <input
                                v-model="user.password_confirmation"
                                id="password_confirmation"
                                type="password_confirmation"
                                name="password_confirmation"
                                class="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>
                    </div>
                    <div class="flex w-full">
                        <button
                            type="submit"
                            class="flex items-center justify-center w-full py-2 mt-2 text-sm text-white transition duration-150 ease-in bg-blue-500 focus:outline-none sm:text-base hover:bg-blue-600 rounded-2xl"
                        >
                            <span class="mr-2 uppercase">Sign Up</span>
                            <span>
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
    <div class="flex justify-center items-center mt-6">
        <a
            href="#"
            target="_blank"
            class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
        >
                <span class="ml-2"
                >You have an account?
                    <a href="#" class="text-xs ml-2 text-blue-500 font-semibold"
                    >Login here</a
                    ></span
                >
        </a>
    </div>

</template>



<script setup>
import {LockClosedIcon} from "@heroicons/vue/20/solid/index.js";
import store from "../../store/index.js";
import router from "../../router/index.js";

const user ={
    name:'',
    email:'',
    password:'',
    password_confirmation:''

}
function  register(ev){
    ev.preventDefault();
    store.dispatch('register',user)
        .then((res)=>{
            router.push({
                name:'Dashboard'
            })
        })
}
</script>

<style scoped></style>
