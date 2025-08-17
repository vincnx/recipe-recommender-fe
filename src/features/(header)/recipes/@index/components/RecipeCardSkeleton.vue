<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";
import { computed, onMounted, ref } from "vue";

const randomDuration = ref(0);
const randomDelay = ref(0);
const randomHeight = ref(0);

onMounted(() => {
  randomDuration.value = 2 + Math.random() * 2;
  randomDelay.value = Math.random() * 2;
  randomHeight.value = 5 + Math.random() * 10;
});

const floatingStyle = computed(() => {
  return {
    "--float-duration": `${randomDuration.value}s`,
    "--float-delay": `${randomDelay.value}s`,
    "--float-height": `${randomHeight.value}px`,
  };
});
</script>

<template>
  <Skeleton
    :style="floatingStyle"
    class="animate-floating aspect-[245/333] w-full max-w-64 sm:max-w-72"
  />
</template>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(calc(-1 * var(--float-height)));
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-floating {
  animation: floating var(--float-duration) ease-in-out infinite;
  animation-delay: var(--float-delay);
}
</style>
