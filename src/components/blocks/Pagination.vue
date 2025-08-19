<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const currentPage = defineModel<number>("currentPage", { required: true });

defineProps<{
  itemsPerPage?: number;
  total: number;
  siblingCount?: number;
  showEdges?: boolean;
}>();
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :items-per-page="itemsPerPage ?? 10"
    :total="total"
    :sibling-count="siblingCount ?? 1"
    :show-edges="showEdges ?? true"
    :default-page="currentPage"
    @update:page="currentPage = $event"
  >
    <PaginationContent v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrevious />

      <template v-for="(item, index) in items">
        <PaginationItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          as-child
        >
          <Button
            :class="
              cn(
                'h-10 w-10 p-0',
                item.value === page
                  ? 'hover:bg-primary hover:text-primary-foreground'
                  : '',
              )
            "
            :variant="item.value === page ? 'default' : 'outline'"
          >
            {{ item.value }}
          </Button>
        </PaginationItem>
        <PaginationEllipsis v-else :key="item.type" :index="index" />
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationContent>
  </Pagination>
</template>
