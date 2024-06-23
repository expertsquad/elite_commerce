import { IProduct, IProductVariant } from "./product.interface";

export interface IWishlistProduct extends IProduct {
  brandName: string;
  variant: IProductVariant;
  productPhoto: string;
  productId: string;
}

export interface IWishlist {
  userId: string;
  products: IWishlistProduct[];
}
