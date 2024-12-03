import { OrderItemsTypes } from "@/interfaces/orderitems.interface";

export function calculateOrderedItemPricesAndDiscount(item: OrderItemsTypes) {
  const sellingPrice = item?.variant?.sellingPrice;
  const variantDiscount = item?.variant?.discountPercentage || 0;

  // Calculate the discount amount from selling price
  const variantDiscountAmount = (sellingPrice * variantDiscount) / 100;

  // Selling price after variant discount
  const priceAfterVariantDiscount = sellingPrice - variantDiscountAmount;

  const hasBulkDiscount =
    item?.bulk && item?.orderQuantity >= item?.bulk?.minOrder;

  // Calculate bulk discount amount if applicable
  const bulkDiscountAmount = hasBulkDiscount
    ? (sellingPrice * item?.bulk?.discount) / 100
    : 0;

  // Final discounted price after both discounts
  const finalDiscountedPrice =
    Math.round(
      (sellingPrice - variantDiscountAmount - bulkDiscountAmount) * 100
    ) / 100;

  // Total discount percentage (cumulative of variant and bulk discounts)
  const totalDiscountPercentage = hasBulkDiscount
    ? variantDiscount + item?.bulk?.discount
    : variantDiscount;

  // Total discounted price for the order quantity
  const discountedTotal =
    Math.round(finalDiscountedPrice * item?.orderQuantity * 100) / 100;

  return {
    finalDiscountedPrice,
    totalDiscountPercentage,
    discountedTotal,
  };
}
