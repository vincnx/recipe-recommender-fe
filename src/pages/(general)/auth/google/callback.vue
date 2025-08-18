<script setup lang="ts">
import { useFetchGoogleCallback } from "@/composables/requests/useFetchGoogleCallback";
import { useAuthStore } from "@/stores/auth";
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { code, state } = route.query;
const { data } = useFetchGoogleCallback(code as string);
const authStore = useAuthStore();

watch(
  () => data.value,
  () => {
    if (!data.value) return;

    authStore.setUser({
      email: data.value.user.email,
      name: data.value.user.name,
      picture: data.value.user.picture,
    });

    router.push(`${state ? state : "/"}`);
  },
);
</script>

<template></template>
