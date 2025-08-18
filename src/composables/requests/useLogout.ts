import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/vue-query";

function logout() {
  return axiosInstance.post<unknown>(`v1/auth/logout`);
}

export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      const response = await logout();

      return response.data;
    },
  });
}
