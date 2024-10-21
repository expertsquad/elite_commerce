interface Reviewer {
  fullName: string;
  email: string;
  userId: string;
}

interface Product {
  productName: string;
  brandName: string;
  productPhoto: string;
  productId: string;
}

export interface IReviewTypes {
  _id: string;
  orderId: string;
  reviewer: Reviewer;
  product: Product;
  reviewStatus: "Reviewed" | "Pending" | "Rejected";
  isReplied: boolean;
  reviewPhotos: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  rating: number;
  comment: string;
}
