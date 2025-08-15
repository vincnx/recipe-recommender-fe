import { axiosInstance } from "@/lib/axios";
import type { Recipe } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/vue-query";

function fetchRecipe(id: string) {
  return axiosInstance.get<Recipe>(`v1/recipes/${id}`);
}

export function useFetchRecipe(id: string) {
  return useQuery({
    queryKey: ["fetch.recipes", id],
    queryFn: async () => {
      const response = await fetchRecipe(id);
      return response.data;
    },
    placeholderData: keepPreviousData,
  });
}
