<script setup lang="ts">
import { RecipeCard } from ".";
</script>

<template>
  <div class="fixed inset-0 z-50 h-dvh w-dvw bg-black/50">
    <div class="flex h-full w-full items-center justify-center gap-8">
      <RecipeCard title="Recipe 1" />
      <RecipeCard title="Recipe 1" />
      <RecipeCard title="Recipe 1" />
    </div>
  </div>
</template>
