<template>
    <div class="form-container">
        <form @submit.prevent="register" class="register-form">
            <input type="text" v-model="form.name" required placeholder="Name">
            <input type="text" v-model="form.email" required placeholder="Email">
            <input type="password" v-model="form.password" required placeholder="Password">
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from '@/axios'
import { useAuthStore } from "@/store";
import { useRouter } from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
    name : '',
    email : '',
    password : ''
})

const register = async () => {
    try {
        const response = await axios.post('/register', form)
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
</script>

<style scoped>
.form-container {
display: flex;
justify-content: center;
align-items: center;
}


.register-form {
display: flex;
flex-direction: column;
gap: 20px;
width: 300px;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


.register-form input, .register-form button {
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
font-size: 16px;
}


.register-form button {
background-color: #007BFF;
color: white;
cursor: pointer;
}
</style>