<script setup lang="ts">
import Header from "@/components/blocks/Header.vue";
import { Toaster } from "@/components/ui/sonner";
import { useLoginSonner } from "@/composables/useLoginSonner";
import { useAuthStore } from "@/stores/auth";
import { onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";

const { startSonnerTimer, stopSonnerTimer } = useLoginSonner();
const authStore = useAuthStore();

onMounted(() => {
  startSonnerTimer();
});

onUnmounted(() => {
  stopSonnerTimer();
});
</script>

<template>
  <Toaster
    v-if="!authStore.user"
    position="bottom-right"
    :duration="5000"
    :visible-toasts="1"
  />
  <Header />
  <div
    class="bg-background max-w-7x mx-auto mt-16 h-full min-h-[calc(100dvh-4rem)] bg-[url(@/assets/food-pattern.svg)]"
  >
    <RouterView></RouterView>
  </div>
</template>
