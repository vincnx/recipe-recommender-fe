<script setup lang="ts">
import Pagination from "@/components/blocks/Pagination.vue";
import RecipeCardSkeleton from "@/components/blocks/RecipeCardSkeleton.vue";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useFetchPaginateRecipeCollections } from "@/composables/requests/useFetchPaginateRecipeCollections";
import { RecipeCard } from "@/features/(header)/@collections/components";
import { ArrowLeft } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const currentPage = ref(1);
const pageSize = ref(12);

const { data, isLoading } = useFetchPaginateRecipeCollections(
  computed(() => ({
    page: currentPage.value,
    limit: pageSize.value,
  })),
);
</script>

<template>
  <div class="mx-auto flex max-w-3xl flex-col gap-4 p-4 sm:px-8">
    <div class="mt-4 w-full items-center gap-4">
      <Button
        variant="ghost"
        class="absolute size-12 cursor-pointer"
        @click="router.back()"
      >
        <ArrowLeft class="size-10 stroke-3" />
      </Button>
      <h1 class="text-center">Collections</h1>
    </div>

    <div>
      <Progress
        v-if="data"
        :model-value="(data?.num_collection / data?.total_items) * 100"
      />
      <p class="text-xl font-semibold">
        {{ data?.num_collection }} / {{ data?.total_items }} unlocked
      </p>
    </div>

    <div class="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
      <RecipeCardSkeleton v-if="isLoading" v-for="d in 12" :key="d" />
      <RecipeCard
        v-else
        v-for="d in data?.items"
        :title="d.title"
        :key="d._id"
        @click="router.push(`recipes/${d._id}`)"
      />
    </div>

    <div>
      <Pagination
        :total="data?.total_items ?? 1"
        :items-per-page="pageSize"
        :sibling-count="1"
        :default-page="currentPage"
        v-model:current-page="currentPage"
      />
    </div>
  </div>
</template>
