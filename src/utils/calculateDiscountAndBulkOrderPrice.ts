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
  const { sellingPrice, discountedPrice, discountPercentage } = selectedVariant;

  // Check if user has only selling price (no discountPercentage, no discountedPrice)
  if (!discountedPrice && !discountPercentage) {
    // Apply bulk discount if bulk order conditions are met
    if (product?.bulk && quantity >= product.bulk.minOrder) {
      const bulkDiscount = product.bulk.discount;
      const finalDiscountedPrice = parseFloat(
        (sellingPrice - (sellingPrice * bulkDiscount) / 100).toFixed(2)
      );

      return {
        sellingPrice,
        discountedPrice: finalDiscountedPrice,
        discountPercentage: bulkDiscount,
      };
    }

    // No discount, return only the selling price
    return {
      sellingPrice,
      discountedPrice: sellingPrice,
      discountPercentage: 0,
    };
  }

  // <== 1. Check if `discountedPrice` exists, indicating a base discount ==>
  if (discountedPrice !== undefined) {
    // <== Calculate base discount percentage if it's missing ==>
    const baseDiscountPercentage =
      discountPercentage ??
      parseFloat(
        (((sellingPrice - discountedPrice) / sellingPrice) * 100).toFixed(2)
      );

    // <== 2. Apply bulk discount if conditions are met ==>
    if (product?.bulk && quantity >= product?.bulk?.minOrder) {
      const bulkDiscount = product?.bulk?.discount;

      const totalDiscountPercentage = baseDiscountPercentage + bulkDiscount;

      // <== Final discount figure ==>
      const finalDiscountedPrice = parseFloat(
        (sellingPrice - (sellingPrice * totalDiscountPercentage) / 100).toFixed(
          2
        )
      );

      return {
        sellingPrice,
        discountedPrice: finalDiscountedPrice,
        discountPercentage: totalDiscountPercentage,
      };
    }

    // <== Return standard discount if no bulk discount applies ==>
    return {
      sellingPrice,
      discountedPrice,
      discountPercentage: baseDiscountPercentage,
    };
  }

  // <== If no `discountedPrice`, return `sellingPrice` with 0% discount ==>
  return {
    sellingPrice,
    discountedPrice: sellingPrice,
    discountPercentage: 0,
  };
};
