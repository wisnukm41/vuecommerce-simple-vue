<template>
    <nav>
        <RouterLink :to="{name:'login'}" v-if="!isLoggedIn">Login</RouterLink>
        <RouterLink :to="{name:'register'}" v-if="!isLoggedIn">Register</RouterLink>
        <RouterLink :to="{name:'index'}" v-if="isLoggedIn">List Product</RouterLink>
        <RouterLink :to="{name:'addProduct'}" v-if="isLoggedIn">Add Product</RouterLink>
        <a href="#" @click="logout" v-if="isLoggedIn">Logout</a>
    </nav>
</template>

<script setup>
import { useAuthStore } from "@/store";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isLogin) 

const logout = () => {
    localStorage.clear()
    authStore.logout()
}

</script>

<style scoped>
    nav {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        padding: 10px;
    }
</style>