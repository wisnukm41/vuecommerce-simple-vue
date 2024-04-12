<template>
    <div class="form-container">
        <form @submit.prevent="login" class="login-form">
            <input type="text" v-model="form.email" required placeholder="Email">
            <input type="password" v-model="form.password" required placeholder="Password">
            <button type="submit">Login</button>
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
    email : '',
    password : ''
})

const login = async () => {
    try {
        const response = await axios.post('/login', form)

        if(response.data.token) {
            localStorage.setItem('token', response.data.token)

            authStore.login()

            router.push("/")
        }

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


.login-form {
display: flex;
flex-direction: column;
gap: 20px;
width: 300px;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


.login-form input, .login-form button {
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
font-size: 16px;
}


.login-form button {
background-color: #007BFF;
color: white;
cursor: pointer;
}
</style>