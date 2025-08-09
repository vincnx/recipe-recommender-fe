<script setup lang="ts">
import { DisplayCard } from "@/features/(general)/@index/components";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex items-center justify-center overflow-hidden">
    <h1 class="text-center text-6xl sm:text-8xl md:text-9xl">
      Reveal The Recipe
    </h1>

    <div class="fixed bottom-0 w-44 overflow-visible sm:-bottom-12 sm:w-72">
      <div class="relative">
        <DisplayCard
          @click="() => router.push('/about')"
          title="about"
          class="-bottom-18 -left-36 -rotate-30 hover:-bottom-12 active:-bottom-12 sm:-left-52"
        />
        <DisplayCard
          @click="() => router.push('/play')"
          title="play"
          class="-bottom-12 hover:-bottom-6 active:-bottom-6 sm:-bottom-6 sm:hover:-bottom-0 sm:active:-bottom-0"
        />
        <DisplayCard
          title="tes"
          class="-right-36 -bottom-18 rotate-30 hover:-bottom-12 active:-bottom-12 sm:-right-52"
          :rotate-deg="30"
        />
      </div>
    </div>
  </div>
</template>
