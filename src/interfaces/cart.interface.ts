import { IProduct, IProductVariant } from "./product.interface";

export interface ICartProduct extends IProduct {
  brandName: string;
  variant: IProductVariant;
  orderQuantity: number;
  productPhoto: string;
  productId: string;
}

export interface ICart {
  userId: string;
  products: ICartProduct[];
}
