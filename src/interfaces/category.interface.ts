export interface ICategory {
  _id: string;
  categoryName: string;
  categoryPhoto: string;
  categoryIcon?: string;
  subcategories?: Array<{
    subcategoryName: string;
    subcategoryId: string;
  }>;
}
