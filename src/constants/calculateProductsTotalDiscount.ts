import { IProduct } from "@/interfaces/product.interface";

export const calculateProductsTotalDiscount = (
  products: IProduct[]
): number => {
  return products?.reduce((totalDiscount, product) => {
    const variantDiscounts =
      product?.variants?.map((variant) => {
        const { sellingPrice = 0, discountedPrice = 0 } = variant;
        return sellingPrice > discountedPrice
          ? sellingPrice - discountedPrice
          : 0;
      }) || [];

    const productDiscountTotal = variantDiscounts?.reduce(
      (acc, discount) => acc + (discount || 0),
      0
    );

    return totalDiscount + (productDiscountTotal || 0);
  }, 0);
};
