<template>
    <div class="edit-product">
        <form @submit.prevent="submitForm" class="edit-product-form">
            <input type="text" class="input-field" v-model="form.name" placeholder="Product Name">
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
            <input type="text" class="input-field" v-model="form.description" placeholder="Product Description">
            <p v-if="errors.description" class="error">{{ errors.description }}</p>
            <input type="text" class="input-field" v-model="form.price" placeholder="Product Price">
            <p v-if="errors.price" class="error">{{ errors.price }}</p>

            <button type="submit" class="submit-button">Update Product</button>
        </form>
    </div>
</template>

<script setup>

import { onMounted, reactive, ref } from "vue";
import axios from "@/axios";
import { useRouter, useRoute } from "vue-router";

const id = ref(null)
const form = reactive({
    name: '',
    description: '',
    price: ''
})

const errors = reactive({})
const router = useRouter();
const route = useRoute();

onMounted(async () => {
    id.value = route.params.id;
    try {
        const response = await axios.get(`/products/${id.value}`);
        if(response.data) {
            form.name = response.data.name;
            form.description = response.data.description;
            form.price = response.data.price;
        } else {
            router.push('/')
        }
    } catch (error) {

    }
});

const validateInput = () => {
        if(!form.name) {
            errors.name = "Name is required"
        }

        if(!form.description) {
            errors.description = "Description is required"
        }

        if(!form.price || isNaN(form.price)) {
            errors.price = "Price is required and must be a number"
        }
    }

const submitForm = async () => {
    try {
        validateInput()
        if (Object.keys(errors).length > 0) {
            return
        }

        await axios.patch(`/products/${id.value}`, form)

        router.push('/')

    } catch (error) {
        console.error(error)
    } 
}


</script>

<style>
.error {
color: red;
}
.edit-product-form {
max-width: 400px;
margin: 20px auto;
padding: 20px;
background-color: #f9f9f9;
border-radius: 8px;
}


.input-field {
display: block;
width: 100%;
margin: 10px 0;
padding: 10px;
font-size: 1em;
}


.submit-button {
padding: 10px 20px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}


.submit-button:hover {
background-color: #45a049;
}
</style>