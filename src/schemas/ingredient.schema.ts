import { z } from "zod";

export const ingredientSchema = z
  .object({
    ingredients: z.array(z.string().optional()).min(1, {
      message: "ingredients is required",
    }),
  })
  .required();

export type IngredientSchema = z.infer<typeof ingredientSchema>;
