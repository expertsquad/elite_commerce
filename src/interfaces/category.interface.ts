export interface ICategory {
  categoryName: string;
  categoryPhoto: string;
  categoryIcon?: string;
  subcategories?: Array<{
    subcategoryName: string;
    subcategoryId: string;
  }>;
}
