<script setup lang="ts">
import { Button } from "../button";

defineProps<{
  title?: string;
  description?: string;
  buttonLabel?: string;
  onClick?: () => void;
}>();
</script>

<template>
  <div
    class="bg-background flex w-full items-center gap-2 rounded-lg border-6 p-4 font-sans shadow-sm md:max-w-[364px]"
  >
    <div class="flex flex-1 items-center">
      <div class="w-full">
        <p class="text-primary text-2xl font-bold">{{ title }}</p>
        <p class="mt-1 text-xl leading-none">{{ description }}</p>
      </div>
    </div>
    <Button @click="onClick" v-if="buttonLabel">{{ buttonLabel }}</Button>
  </div>
</template>
