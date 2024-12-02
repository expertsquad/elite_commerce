type Reviewer = {
  fullName: string;
  profilePhoto: string;
  email: string;
  userId: string;
};

type Product = {
  productName: string;
  brandName: string;
  productPhoto: string;
  productId: string;
};

type Review = {
  _id: string;
  orderId: string;
  reviewer: Reviewer;
  product: Product;
  rating: number;
  comment: string;
  reviewPhotos: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  reply?: string;
};

export type ReviewDataType = Review[];

export interface CustomerReviewProps {
  _id: string;
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
    productPhoto: string;
    productId: string;
  };
  rating: number | any;
  comment: string;
  reviewPhotos: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  reply: string;
  replyTime?: string;
}
