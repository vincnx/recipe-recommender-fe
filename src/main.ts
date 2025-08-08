import {
  VueQueryPlugin,
  type VueQueryPluginOptions,
} from "@tanstack/vue-query";
import { AxiosError } from "axios";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "./style.css";

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry(failureCount, error) {
          if (
            (error instanceof AxiosError &&
              error.response?.status &&
              error.response?.status >= 400 &&
              error.response?.status !== 408 &&
              error.response?.status < 500) ||
            !router.currentRoute.value.meta?.requiresAuth
          ) {
            return false;
          }
          return failureCount < 3;
        },
      },
    },
  },
};

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .mount("#app");
