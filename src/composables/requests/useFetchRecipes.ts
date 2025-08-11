import { axiosInstance } from "@/lib/axios";
import type { IngredientSchema } from "@/schemas/ingredient.schema";
import { useMutation } from "@tanstack/vue-query";

interface Params {
  payload: IngredientSchema;
}

function fetchRecipes(params: Params) {
  return axiosInstance.post("/v1/recipes", params.payload);
}

export function useFetchRecipes() {
  return useMutation({
    mutationFn: async (params: Params) => {
      await fetchRecipes(params);
    },
  });
}
