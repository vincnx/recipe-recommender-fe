<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useLogout } from "@/composables/requests/useLogout";
import { useAuthStore } from "@/stores/auth";
import { ArrowLeft, LogOut } from "lucide-vue-next";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();
const { mutate } = useLogout();

const username = computed(() => authStore.user?.name ?? "");
const email = computed(() => authStore.user?.email ?? "");

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
  <div class="mx-auto flex max-w-3xl flex-col gap-4 p-4 sm:px-8">
    <div class="mt-4 w-full items-center gap-4">
      <Button
        variant="ghost"
        class="absolute size-12 cursor-pointer"
        @click="router.back()"
      >
        <ArrowLeft class="size-10 stroke-3" />
      </Button>
      <h1 class="text-center">Profile</h1>
    </div>

    <div
      v-if="authStore.user"
      class="bg-card mt-8 flex flex-col items-center justify-center gap-6 rounded-xl border-6 p-8"
    >
      <Avatar class="size-24 border-6">
        <AvatarImage
          :src="authStore.user?.picture ?? ''"
          :alt="`profile picture of ${authStore.user?.name}`"
          referrerPolicy="no-referrer"
        />
        <AvatarFallback class="text-4xl uppercase">{{
          authStore.user?.name.slice(0, 2)
        }}</AvatarFallback>
      </Avatar>

      <div class="w-full">
        <Label class="text-2xl">username</Label>
        <p class="text-3xl font-semibold">{{ username }}</p>
        <div class="border-secondary rounded-full border-4"></div>
      </div>

      <div class="w-full">
        <Label class="text-2xl">email</Label>
        <p class="text-3xl font-semibold overflow-ellipsis">{{ email }}</p>
        <div class="border-secondary rounded-full border-4"></div>
      </div>

      <Button @click="handleLogout" class="mt-8 w-full py-6 text-2xl">
        <LogOut class="size-6" />
        Logout</Button
      >
    </div>
  </div>
</template>
