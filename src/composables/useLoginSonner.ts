import CustomSonner from "@/components/ui/sonner/CustomSonner.vue";
import { markRaw, ref } from "vue";
import { useRoute } from "vue-router";
import { toast } from "vue-sonner";
import { useFetchGoogleAuthUrl } from "./requests/useFetchGoogleAuthUrl";
export function useLoginSonner() {
  const intervalId = ref<number | null>(null);
  const isActive = ref(false);
  const { data } = useFetchGoogleAuthUrl();
  const route = useRoute();

  function handleClick() {
    if (!data.value?.authorization_url) return;

    const url = new URL(data.value?.authorization_url);
    url.searchParams.set("state", route.fullPath);

    window.location.href = url.toString();
  }

  function showSonner() {
    toast.custom(markRaw(CustomSonner), {
      componentProps: {
        title: "don't forget to login",
        description: "login to save your recipe collection progress",
        buttonLabel: "Login",
        onClick: handleClick,
      },
    });
  }

  const startSonnerTimer = () => {
    if (intervalId.value) return;
    if (!data) return;

    isActive.value = true;
    showSonner();

    intervalId.value = setInterval(showSonner, 20000);
  };

  return { startSonnerTimer };
}
