export interface IWishlist {
  userId: string;
  products: {
    productName: string;
    brandName: string;
    productPhoto: string;
    productId: string;
  }[];
}
