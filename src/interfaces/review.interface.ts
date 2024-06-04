export interface IReview {
  orderId: string;
  reviewer: {
    fullName: string;
    profilePhoto: string;
    email: string;
    userId: string;
  };
  product: {
    productName: string;
    brandName: string;
    productPhoto?: string;
    productId: string;
  };
  rating: number;
  comment: string;
  reply: string;
  reviewPhotos: Array<string>;
}
