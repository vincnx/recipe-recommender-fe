<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LibraryBig, LogOut, UserRound } from "lucide-vue-next";

defineProps<{
  imageUrl: string;
  imageFallback: string;
  username: string;
  email: string;
}>();

const emit = defineEmits<{
  logout: [];
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="cursor-pointer">
      <Avatar class="size-10 border-4">
        <AvatarImage
          :src="imageUrl"
          :alt="`profile picture of ${imageFallback}`"
          referrerPolicy="no-referrer"
        />
        <AvatarFallback class="uppercase">{{ imageFallback }}</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" side="bottom">
      <div class="p-1.5">
        <p class="text-primary text-lg font-bold">{{ username }}</p>
        <p class="text-primary -mt-2 text-lg">{{ email }}</p>
      </div>
      <DropdownMenuSeparator />
      <RouterLink to="/profile">
        <DropdownMenuItem>
          <UserRound class="size-5" />
          Profile
        </DropdownMenuItem>
      </RouterLink>
      <RouterLink to="/collections">
        <DropdownMenuItem>
          <LibraryBig class="size-5" />
          Collections
        </DropdownMenuItem>
      </RouterLink>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="emit('logout')">
        <LogOut class="size-5" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
