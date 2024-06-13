import { ICartProduct } from "@/interfaces/product.interface";

export const mergeProducts = (
  localStorageProducts: ICartProduct[],
  remoteProducts: ICartProduct[]
): ICartProduct[] => {
  const productMap = new Map<string, ICartProduct>();

  remoteProducts.forEach((product) => {
    productMap.set(product?.productId + product?.variant?.variantName, product);
  });

  localStorageProducts.forEach((product) => {
    productMap.set(product?.productId + product?.variant?.variantName, product);
  });

  return Array.from(productMap.values());
};
