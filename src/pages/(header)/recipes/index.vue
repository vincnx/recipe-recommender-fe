<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useFetchRecipes } from "@/composables/requests/useFetchRecipes";
import { RecipeCard } from "@/features/(header)/recipes/@index/components";
import { useUrlSearchParams } from "@vueuse/core";
import { ArrowLeft } from "lucide-vue-next";
import { useRouter } from "vue-router";

const params = useUrlSearchParams("history");
const { data } = useFetchRecipes(params.ids as string[]);
const router = useRouter();
</script>

<template>
  <div class="flex flex-col gap-8 p-4 sm:px-8">
    <div class="mx-auto mt-4 w-full max-w-3xl items-center gap-4">
      <Button
        variant="ghost"
        class="absolute size-12 cursor-pointer"
        @click="router.back()"
      >
        <ArrowLeft class="size-10 stroke-3" />
      </Button>
      <h1 class="text-center">Pick a Card</h1>
    </div>

    <div class="mx-auto flex w-fit max-w-3xl gap-2 sm:gap-4">
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
