export interface ISubcategory {
  subcategoryName: string;
  subcategoryId: string;
}
export interface ICategory {
  _id: string;
  categoryName: string;
  categoryPhoto: string;
  categoryIcon?: string;
  subcategories?: ISubcategory[];
}
