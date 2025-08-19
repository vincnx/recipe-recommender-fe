export interface PaginationResponse<T> {
  items: T[];
  total_pages: number;
  total_items: number;
}
