import type { Recipe } from "../recipe.type";
import type { PaginationResponse } from "../response";

export interface FetchPaginateRecipeCollection
  extends PaginationResponse<Recipe> {
  num_collection: number;
}
