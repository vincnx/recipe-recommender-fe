import { type User } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<User | null>(null);

    function setUser(newUser: User | null) {
      user.value = newUser;
    }

    return { user, setUser };
  },
  {
    persist: true,
  },
);
