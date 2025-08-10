<script setup lang="ts">
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { IngredientSchema } from "@/schemas/ingredient.schema";
import { X } from "lucide-vue-next";
import { FieldArray, useForm } from "vee-validate";
import { watch } from "vue";
import { Button } from "../ui/button";

const props = defineProps<{
  form: ReturnType<typeof useForm<IngredientSchema>>;
}>();

watch(
  () => props.form.values.ingredients,
  (values) => {
    if (values?.[values?.length - 1]) {
      props.form.setFieldValue("ingredients", [...values, undefined]);
    }
  },
  { deep: true },
);
</script>

<template>
  <FormField name="ingredients">
    <FormItem>
      <FieldArray v-slot="{ fields, remove }" name="ingredients">
        <div v-for="(_, index) in fields" :key="index">
          <FormField v-slot="{ componentField }" :name="`ingredients.${index}`">
            <FormItem class="gap-0.5">
              <div class="flex items-center">
                <Input
                  placeholder="Enter Ingredient..."
                  type="text"
                  autocomplete="off"
                  v-bind="componentField"
                  :class="componentField.modelValue ? 'font-bold' : ''"
                />
                <Button
                  v-if="index != form.values.ingredients.length - 1"
                  size="icon"
                  variant="ghost"
                  class="cursor-pointer"
                  @click="remove(index)"
                  tabindex="-1"
                >
                  <X class="size-6 stroke-3" />
                </Button>
              </div>
              <div class="border-secondary rounded-full border-3"></div>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
      </FieldArray>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
