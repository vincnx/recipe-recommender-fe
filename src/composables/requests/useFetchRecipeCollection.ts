import { axiosInstance } from "@/lib/axios";
import type { Recipe } from "@/types";
import { useQuery } from "@tanstack/vue-query";

function fetchRecipeCollection(id: string) {
  return axiosInstance.get<Recipe>(`v1/user/collections/${id}`);
}

export function useFetchRecipeCollection(id: string) {
  return useQuery({
    queryKey: ["fetch.collection", id],
    queryFn: async () => {
      const response = await fetchRecipeCollection(id);
      return response.data;
    },
  });
}
