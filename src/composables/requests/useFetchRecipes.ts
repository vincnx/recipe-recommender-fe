import { axiosInstance } from "@/lib/axios";
import type { Recipe } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/vue-query";

function fetchRecipes(ids?: string[]) {
  return axiosInstance.get<Recipe[]>("v1/recipes", {
    params: {
      ids: ids?.join(","),
    },
  });
}

export function useFetchRecipes(ids?: string[]) {
  return useQuery({
    queryKey: ["fetch.recipes", ids],
    queryFn: async () => {
      const response = await fetchRecipes(ids);
      return response.data;
    },
    placeholderData: keepPreviousData,
    enabled: !!ids?.length,
  });
}
