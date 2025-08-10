import { useMediaQuery } from "@vueuse/core";
import { type Ref } from "vue";

export function useResponsive(): {
  isXs: Ref<boolean>;
  isSm: Ref<boolean>;
  isMd: Ref<boolean>;
  isLg: Ref<boolean>;
  isXl: Ref<boolean>;
  is2Xl: Ref<boolean>;
} {
  const isXs = useMediaQuery("(min-width: 480px)");
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");
  const is2Xl = useMediaQuery("(min-width: 1536px)");
  return { isXs, isSm, isMd, isLg, isXl, is2Xl };
}
