interface IBestDealsProductData {
  productPhoto: string;
  productName: string;
  brandName: string;
  stock: number;
  sellingPrice: number;
  discountPercentage?: number;
  discountedPrice?: number;
  averageRating?: number;
  link: string;
  productId: string;
}

export interface IBestDeals {
  _id: string;
  backgroundColor?: string;
  backgroundPhoto?: string;
  firstProductPhoto?: string;
  secondProductPhoto?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  products: [IBestDealsProductData];
}
