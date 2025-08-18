import { axiosInstance } from "@/lib/axios";
import type { FetchGoogleAuthUrlResponse } from "@/types/requests/useFetchGoogleAuthUrl.types";
import { useQuery } from "@tanstack/vue-query";

function fetchGoogleAuthUrl() {
  return axiosInstance.get<FetchGoogleAuthUrlResponse>(`v1/auth/google/login`);
}

export function useFetchGoogleAuthUrl() {
  return useQuery({
    queryKey: ["fetch.google.auth.url"],
    queryFn: async () => {
      const response = await fetchGoogleAuthUrl();
      return response.data;
    },
  });
}
