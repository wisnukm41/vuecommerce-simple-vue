<template>
    <div v-if="product" class="product-details">
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price : {{ product.price }}</p>
    </div>
</template>

<script setup>
import axios from "@/axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const id = ref(null)
const product = ref({})

onMounted(async () => {
    try {
        id.value = route.params.id;
        const response = await axios.get(`/products/${id.value}`);
        if(response.data) {
            product.value = response.data;
        } else {
            router.push('/')
        }
    } catch (error) {
        console.error(error)
    }})

</script>

<style lang="scss" scoped>

</style>