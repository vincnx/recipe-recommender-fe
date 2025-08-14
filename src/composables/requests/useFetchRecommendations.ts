import { axiosInstance } from "@/lib/axios";
import type { IngredientSchema } from "@/schemas/ingredient.schema";
import type { Recipe } from "@/types";
import { useMutation } from "@tanstack/vue-query";

interface Params {
  payload: IngredientSchema;
}

function fetchRecommendations(params: Params) {
  return axiosInstance.post<Recipe[]>(
    "/v1/recipes/recommendations",
    params.payload,
  );
}

export function useFetchRecommendations() {
  return useMutation({
    mutationFn: async (params: Params) => {
      const response = await fetchRecommendations(params);

      return response.data;
    },
  });
}
