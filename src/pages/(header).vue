<script setup lang="ts">
import Header from "@/components/blocks/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <Header />
  <div
    class="bg-background max-w-7x mx-auto mt-16 h-full min-h-[calc(100dvh-4rem)] bg-[url(@/assets/food-pattern.svg)]"
  >
    <RouterView></RouterView>
  </div>
</template>
