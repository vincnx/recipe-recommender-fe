<script setup lang="ts">
import { ScratchToReveal } from "@/components/ui/scratch-to-reveal";
import { SparklesText } from "@/components/ui/sparkles-text";
import { useResponsive } from "@/composables/useResponsive";
import { DisplayCard } from "@/features/(general)/@index/components";
import { cn } from "@/lib/utils";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { isSm } = useResponsive();
const isScratched = ref(false);

const width = computed(() => (isSm.value ? 400 : 200));
const height = computed(() => (isSm.value ? 220 : 100));
</script>

<template>
  <div class="-mt-16 flex items-center justify-center overflow-hidden">
    <div class="flex flex-col items-center gap-3">
      <h1
        class="gap flex flex-wrap items-center justify-center gap-2 text-center text-6xl sm:text-8xl md:text-9xl"
      >
        Reveal The
        <ScratchToReveal
          :width="width"
          :height="height"
          :min-scratch-percentage="80"
          class="mx-auto flex items-center justify-center overflow-hidden rounded-2xl"
          v-model:is-scratched="isScratched"
        >
          <p>Recipe</p>
        </ScratchToReveal>
      </h1>

      <SparklesText
        text="From fridge to table: discover meals made from what you already have."
        :colors="{ first: '#cb9520', second: '#efc555' }"
        :sparkles-count="10"
        :class="
          cn(
            'w-1/2 text-center text-xl font-medium sm:text-3xl',
            isScratched ? 'visible' : 'invisible',
          )
        "
      />
    </div>

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
          @click="() => router.push('todos')"
          title="TODOs"
          class="-right-36 -bottom-18 rotate-30 hover:-bottom-12 active:-bottom-12 sm:-right-52"
          :rotate-deg="30"
        />
      </div>
    </div>
  </div>
</template>
