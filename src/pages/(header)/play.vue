<script setup lang="ts">
import IngredientForm from "@/components/form/IngredientForm.vue";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useFetchRecommendations } from "@/composables/requests/useFetchRecommendations";
import type { IngredientSchema } from "@/schemas/ingredient.schema";
import { ingredientSchema } from "@/schemas/ingredient.schema";
import { toTypedSchema } from "@vee-validate/zod";
import { CircleQuestionMark } from "lucide-vue-next";
import { useForm } from "vee-validate";
import { watch } from "vue";
import { useRouter } from "vue-router";

const { mutate, isPending } = useFetchRecommendations();
const router = useRouter();

const form = useForm<IngredientSchema>({
  validationSchema: toTypedSchema(ingredientSchema),
  initialValues: {
    ingredients: [undefined],
  },
});

function handleSubmit() {
  return form.handleSubmit((values) => {
    mutate(
      {
        payload: {
          ingredients: values.ingredients.filter(
            (ingredient) => ingredient !== undefined,
          ),
        },
      },
      {
        onSuccess: (data) => {
          router.push({
            path: "/recipes",
            query: {
              ids: data.map((recipe) => recipe.id),
            },
          });
        },
      },
    );
  })();
}

function isFormValid() {
  return form.values.ingredients[0] !== undefined;
}

watch(
  () => form.values.ingredients,
  (values) => {
    if (values?.[values?.length - 1]) {
      form.setFieldValue("ingredients", [...values, undefined]);
    }
  },
  { deep: true },
);
</script>

<template>
  <div class="space-y-4 px-4 py-4 sm:px-8">
    <Alert class="mx-auto max-w-3xl">
      <CircleQuestionMark />
      <AlertTitle>How to use this</AlertTitle>
      <AlertDescription class="text-xl">
        <ul class="ms-8 list-disc">
          <li>Enter the leftover ingredients you have into the search box.</li>
          <li>Tap the Find Recipes button.</li>
          <li>
            The app will show recipe recommendations that best match the
            ingredients you entered.
          </li>
        </ul>
      </AlertDescription>
    </Alert>
    <div class="relative mx-auto max-w-3xl">
      <img src="@/assets/recipe-paper.svg" class="w-full" />
      <form
        @submit.prevent="handleSubmit"
        @keydown.enter.prevent
        class="absolute inset-0 flex h-[calc(min((100vw-32px),768px)/4*5)] w-full flex-col gap-8 p-8 sm:h-[calc(min((100vw-64px),768px)/4*5))] sm:p-12"
      >
        <h1 class="text-center text-3xl sm:text-4xl">Ingredients</h1>
        <div class="scrollbar-hide flex-1 overflow-y-scroll">
          <IngredientForm :form="form" />
        </div>
        <Button
          :disabled="!isFormValid() || isPending"
          :is-loading="isPending"
          type="submit"
        >
          Find Recipes
        </Button>
      </form>
    </div>
  </div>
</template>
