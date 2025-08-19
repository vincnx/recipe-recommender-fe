<script setup lang="ts">
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
  <img
    src="@/assets/techno-art-logo.png"
    alt=""
    class="fixed inset-4 h-auto w-42"
  />
  <Toaster
    v-if="!authStore.user"
    position="top-right"
    :duration="5000"
    :visible-toasts="1"
  />
  <RouterView class="bg-background h-dvh w-dvw px-4"> </RouterView>
</template>
