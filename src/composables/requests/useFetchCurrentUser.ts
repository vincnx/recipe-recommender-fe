import { axiosInstance } from "@/lib/axios";
import type { User } from "@/types";
import { useQuery } from "@tanstack/vue-query";

function fetchCurrentUser() {
  return axiosInstance.get<User>(`v1/auth/me`);
}

export function useFetchCurrentUser() {
  return useQuery({
    queryKey: ["fetch.current.user"],
    queryFn: async () => {
      const response = await fetchCurrentUser();
      return response.data;
    },
    enabled: false,
  });
}
