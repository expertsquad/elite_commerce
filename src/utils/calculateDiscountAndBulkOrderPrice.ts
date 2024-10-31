import { IProduct, IProductVariant } from "@/interfaces/product.interface";

interface DiscountCalculationResult {
  sellingPrice: number;
  discountedPrice: number;
  discountPercentage: number;
}

export const calculateDiscountAndBulkOrderPrice = (
  product: IProduct,
  selectedVariant: IProductVariant,
  quantity: number
): DiscountCalculationResult => {
  let { sellingPrice, discountedPrice, discountPercentage } = selectedVariant;

  // 1. Check if `discountedPrice` exists, indicating a base discount
  if (discountedPrice !== undefined) {
    // Calculate discount percentage if missing
    const baseDiscountPercentage =
      discountPercentage ??
      parseFloat(
        (((sellingPrice - discountedPrice) / sellingPrice) * 100).toFixed(2)
      );

    // 2. Apply bulk discount if conditions are met
    if (product.bulk && quantity >= product.bulk.minOrder) {
      const bulkDiscount = product.bulk.discount;

      const bulkDiscountAmount = (discountedPrice * bulkDiscount) / 100;
      const finalDiscountedPrice = parseFloat(
        (discountedPrice - bulkDiscountAmount).toFixed(2)
      );
      const finalDiscountPercentage = baseDiscountPercentage + bulkDiscount;

      return {
        sellingPrice,
        discountedPrice: finalDiscountedPrice,
        discountPercentage: finalDiscountPercentage,
      };
    }

    // Return standard discount if no bulk discount applies
    return {
      sellingPrice,
      discountedPrice,
      discountPercentage: baseDiscountPercentage,
    };
  }

  // If no `discountedPrice`, return `sellingPrice` with 0% discount
  return {
    sellingPrice,
    discountedPrice: sellingPrice,
    discountPercentage: 0,
  };
};
