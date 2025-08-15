<script setup lang="ts">
import { cn } from "@/lib/utils";
import { computed, onMounted, ref } from "vue";

const isRotate = ref(false);

defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  click: [];
}>();

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

function handleClick() {
  if (!isRotate.value) {
    isRotate.value = true;

    setTimeout(() => {
      emit("click");
    }, 150);
  }
}
</script>

<template>
  <div
    @click="handleClick"
    :style="floatingStyle"
    :class="
      cn(
        'absolute flex cursor-pointer transition-all duration-300 ease-in-out [transform-style:preserve-3d]',
        isRotate && 'bottom-64! rotate-0! [transform:rotateY(180deg)]',
      )
    "
  >
    <div class="animate-floating relative [backface-visibility:hidden]">
      <img src="@/assets/card.png" alt="" class="h-auto w-44 sm:w-72" />
      <div
        class="absolute inset-0 m-10 flex flex-1 flex-col items-center justify-center text-center text-2xl font-bold"
      >
        <h2 class="text-4xl capitalize sm:text-5xl">{{ title }}</h2>
      </div>
    </div>
  </div>
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
