import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('authStore', {
    state : () => ({
        isLogin : localStorage.getItem('token') ? true : false
    }), 
    actions: {
        login() {
            this.isLogin = true;
        },
        logout() {
            this.isLogin = false;
            router.push({ name: 'login' })
        }
    }
})