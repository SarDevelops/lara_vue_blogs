<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "Login",
});
</script>

<template>
    <form action="#" @submit="login">
        {{ errorMsg }}
        <div class="flex flex-col mb-5">
            <label
                for="email"
                class="mb-1 text-xs tracking-wide text-gray-600"
            >E-Mail Address:</label
            >
            <div class="relative">
                <div
                    class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                >
                    <i class="fas fa-at text-blue-500"></i>
                </div>

                <input
                    v-model="user.email"
                    id="email"
                    type="email"
                    name="email"
                    class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter your email"
                />
            </div>
        </div>
        <div class="flex flex-col mb-6">
            <label
                for="password"
                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >Password:</label
            >
            <div class="relative">
                <div
                    class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
                >
                                <span>
                                    <i class="fas fa-lock text-blue-500"></i>
                                </span>
                </div>

                <input
                    v-model="user.password"
                    id="password"
                    type="password"
                    name="password"
                    class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                    placeholder="Enter your password"
                />
            </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-start">
                <div class="flex items-center h-5">
                    <input id="remember" v-model="user.remember" aria-describedby="remember" type="checkbox"
                           class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                </div>
                <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
            </div>
            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                password?</a>
        </div>
        <div class="flex w-full">
            <button
                type="submit"
                class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
                <span class="mr-2 uppercase">Sign Up</span>
                <span>
                                <svg
                                    class="h-6 w-6"
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
                >You don't have an account?
                    <a href="#" class="text-xs ml-2 text-blue-500 font-semibold"
                    >Register here</a
                    ></span
                >
        </a>
    </div>

</template>

<script setup>
import {LockClosedIcon} from "@heroicons/vue/20/solid/index.js";
import store from "../../store/index.js";
import {useRouter} from "vue-router";
import {ref} from "vue";
import {createToast} from "mosha-vue-toastify";
import 'mosha-vue-toastify/dist/style.css'
// import Alert from "../components/Alert.vue";
// import TButtonLoading from "../components/core/TButtonLoading.vue";

const router = useRouter();

const user = {
    email: "",
    password: "",
};
let loading = ref(false);
let errorMsg = ref("");

function login(ev) {
    ev.preventDefault();
    loading.value = true;
    store
        .dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({
                name: "Dashboard",
            });
            createToast("Login successfully",
                {
                    type: 'success',
                    showIcon: 'true',
                });
        })
        .catch((err) => {
            loading.value = false;
            errorMsg.value = err.response.data.error;
            createToast(err.response.data.error,
                {
                    type: 'danger',
                    showIcon: 'true',
                });
        });
}
</script>

<style scoped></style>
