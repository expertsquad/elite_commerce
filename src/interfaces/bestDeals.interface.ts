export interface IBestDealsProductData {
  productPhoto: string;
  productName: string;
  brandName: string;
  stock: number;
  discountedPrice: number;
  sellingPrice: number;
  discountPercentage: number;
  averageRating: number | null;
  link: string;
  productId: string;
  productUrlSlug: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IBestDeals {
  _id: string;
  backgroundColor: string;
  firstProductPhoto: string;
  secondProductPhoto: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  products: IBestDealsProductData[];
  createdAt: string;
  updatedAt: string;
  backgroundPhoto?: string;
  __v: number;
  id: string;
}
