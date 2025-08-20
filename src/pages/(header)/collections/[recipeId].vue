<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchRecipeCollection } from "@/composables/requests/useFetchRecipeCollection";
import { ArrowLeft } from "lucide-vue-next";
import { useRoute, useRouter } from "vue-router";

const route = useRoute("/recipes/:recipeId");

const { data, isLoading } = useFetchRecipeCollection(
  route.params.recipeId as string,
);

const router = useRouter();
</script>

<template>
  <div class="flex w-full flex-col gap-8 px-4 py-4 sm:px-8">
    <div class="mx-auto mt-4 w-full max-w-3xl items-center gap-4">
      <Button
        variant="ghost"
        class="absolute size-12 cursor-pointer"
        @click="router.back()"
      >
        <ArrowLeft class="size-10 stroke-3" />
      </Button>
      <h1 class="w-full text-center">Detail Collection</h1>
    </div>

    <div
      v-if="isLoading"
      class="mx-auto flex h-full min-h-[calc(100dvh-14rem)] w-full max-w-3xl"
    >
      <Skeleton class="flex-1" />
    </div>
    <div
      v-else
      class="border-primary bg-card mx-auto mb-8 flex h-full min-h-[calc(100dvh-14rem)] w-full max-w-3xl rounded-xl border-6 p-4"
    >
      <div
        v-if="data?.title !== ''"
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

      <div
        v-else
        class="border-secondary flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border-6 p-8"
      >
        <h1>Unknown</h1>
        <p class="text-center text-xl">
          this card holds a delicious secret waiting to be discovered.
          <br />
          keep playing to reveal this card
        </p>

        <RouterLink to="/play">
          <Button>Play now</Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
