<template>
  <div class="main">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<style scoped>
.main {
text-align: center;
margin-top: 60px;
}
</style>