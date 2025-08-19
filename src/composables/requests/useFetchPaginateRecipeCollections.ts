import { axiosInstance } from "@/lib/axios";
import type { PaginationParam } from "@/types";
import type { FetchPaginateRecipeCollection } from "@/types/requests/useFetchPaginateRecipeCollection.type";
import { keepPreviousData, useQuery } from "@tanstack/vue-query";
import type { ComputedRef } from "vue";

function fetchPaginateRecipeCollections(param: PaginationParam) {
  return axiosInstance.get<FetchPaginateRecipeCollection>(
    "v1/user/collections",
    {
      params: param,
    },
  );
}

export function useFetchPaginateRecipeCollections(
  param: ComputedRef<PaginationParam>,
) {
  return useQuery({
    queryKey: ["fetch.user.collections", param],
    queryFn: async () => {
      const response = await fetchPaginateRecipeCollections(param.value);
      return response.data;
    },
    placeholderData: keepPreviousData,
  });
}
