import { axiosInstance } from "@/lib/axios";
import type { FetchGoogleCallbackResponse } from "@/types/requests/useFetchGoogleCallback.types";
import { useQuery } from "@tanstack/vue-query";

function fetchGoogleCallback(code: string) {
  return axiosInstance.get<FetchGoogleCallbackResponse>(
    "v1/auth/google/callback",
    {
      params: {
        code,
      },
    },
  );
}

export function useFetchGoogleCallback(code: string) {
  return useQuery({
    queryKey: ["fetch.google.callback", code],
    queryFn: async () => {
      const response = await fetchGoogleCallback(code);
      return response.data;
    },
  });
}
