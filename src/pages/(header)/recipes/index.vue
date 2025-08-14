<script setup lang="ts">
import { useFetchRecipes } from "@/composables/requests/useFetchRecipes";
import { RecipeCard } from "@/features/(header)/recipes/@index/components";
import { useUrlSearchParams } from "@vueuse/core";
import { useRouter } from "vue-router";

const params = useUrlSearchParams("history");
const { data } = useFetchRecipes(params.ids as string[]);
const router = useRouter();
</script>

<template>
  <div class="flex flex-col gap-8 p-8 px-4">
    <h1 class="text-center">Pick a Card</h1>
    <div class="mx-auto flex w-fit gap-2 sm:gap-4">
      <div
        v-for="columnIndex in Math.ceil((data?.length ?? 0) / 3)"
        :key="columnIndex"
        class="flex w-fit flex-col gap-3 sm:gap-4"
      >
        <RecipeCard
          v-for="(_, index) in 3"
          :key="index"
          :title="data?.[(columnIndex - 1) * 3 + index]?.title ?? ''"
          @click="
            router.push(`recipes/${data?.[(columnIndex - 1) * 3 + index]?._id}`)
          "
        />
      </div>
    </div>
  </div>
</template>
