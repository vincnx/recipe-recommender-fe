<script setup lang="ts">
import { useFetchRecipe } from "@/composables/requests/useFetchRecipe";
import { useRoute } from "vue-router";

const route = useRoute("/recipes/:recipeId");

const { data } = useFetchRecipe(route.params.recipeId as string);
</script>

<template>
  <div class="px-4 py-4 sm:px-8">
    <div
      class="border-primary bg-card mx-auto mb-8 flex h-full min-h-[calc(100dvh-8rem)] max-w-3xl rounded-xl border-6 p-4"
    >
      <div
        class="border-secondary flex flex-1 flex-col gap-8 rounded-xl border-6 p-8"
      >
        <h1 class="text-center">{{ data?.title }}</h1>

        <div class="flex flex-col gap-2">
          <h2>Ingredients</h2>
          <ul>
            <li
              v-for="ingredient in data?.ingredient_item.split(';')"
              :key="ingredient"
              class="ms-6 list-disc text-lg md:text-xl"
            >
              {{ ingredient }}
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-2">
          <h2>Instructions</h2>
          <div class="flex flex-col gap-4 text-justify">
            <p
              v-for="(paragraph, index) in data?.instructions.split('\n')"
              :key="index"
              class="text-lg md:text-xl"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
