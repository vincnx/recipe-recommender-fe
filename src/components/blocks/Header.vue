<script setup lang="ts">
import { useFetchGoogleAuthUrl } from "@/composables/requests/useFetchGoogleAuthUrl";
import { useLogout } from "@/composables/requests/useLogout";
import { useAuthStore } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";
import { Button } from "../ui/button";
import HeaderAvatarDropdown from "./HeaderAvatarDropdown.vue";

const { data, isLoading } = useFetchGoogleAuthUrl();
const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();
const { mutate } = useLogout();

function handleLogin() {
  if (!data.value?.authorization_url) return;

  const url = new URL(data.value?.authorization_url);
  url.searchParams.set("state", route.fullPath);

  window.location.href = url.toString();
}

function handleLogout() {
  if (!authStore.user) return;

  mutate(undefined, {
    onSuccess: () => {
      authStore.setUser(null);
      router.push("/");
    },
  });
}
</script>

<template>
  <div class="bg-background fixed inset-0 z-50 h-16 border-b-6">
    <div class="mx-auto flex h-full max-w-7xl items-center px-4">
      <RouterLink to="/">
        <h1 class="text-xl leading-none">
          Reveal <br />
          The Recipe
        </h1>
      </RouterLink>

      <div class="ms-auto">
        <div v-if="authStore.user">
          <!-- <img
            :src="authStore.user.picture"
            alt=""
            class="size-10 rounded-full border-4"
            referrerPolicy="no-referrer"
          /> -->
          <HeaderAvatarDropdown
            :image-url="authStore.user.picture"
            :image-fallback="authStore.user.name.slice(0, 2)"
            :username="authStore.user.name"
            :email="authStore.user.email"
            @logout="handleLogout"
          />
        </div>
        <Button v-else :disabled="isLoading" @click="handleLogin">Login</Button>
      </div>
    </div>
  </div>
</template>
