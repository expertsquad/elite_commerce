import { IProduct } from "@/interfaces/product.interface";

interface PricingDetails {
  sellingPrice: number;
  discountedPrice: number;
  discountPercentage: number;
}

export const getPricingDetails = (product: IProduct): PricingDetails => {
  const firstVariant = product?.variants[0];

  const sellingPrice = firstVariant?.sellingPrice || 0;
  const discountedPrice = firstVariant?.discountedPrice ?? sellingPrice;
  const discountPercentage =
    firstVariant?.discountPercentage ??
    (sellingPrice !== discountedPrice
      ? ((sellingPrice - discountedPrice) / sellingPrice) * 100
      : 0);

  return {
    sellingPrice,
    discountedPrice: discountedPrice === sellingPrice ? 0 : discountedPrice,
    discountPercentage,
  };
};
