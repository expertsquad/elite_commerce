import { IProductVariant } from "./product.interface";

export interface ICart {
  userId: string;
  products: {
    productName: string;
    brandName: string;
    productPhoto: string;
    productId: string;
    variant: Partial<IProductVariant>;
    bulk: {
      minOrder: number;
      discount: number;
    };
    orderQuantity: number;
  }[];
}
