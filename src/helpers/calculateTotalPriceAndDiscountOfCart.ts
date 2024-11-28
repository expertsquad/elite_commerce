import { ICartProduct } from "@/interfaces/cart.interface";

const calculateTotalPriceAndDiscountOfCart = (products: ICartProduct[]) => {
  let totalPrice = 0;
  let totalDiscount = 0;

  products?.forEach((product) => {
    const { variant, orderQuantity, bulk } = product;

    // Determine the base discount percentage
    let baseDiscountPercentage = variant?.discountPercentage ?? 0;

    // Calculate discount percentage if discounted price exists but no discount percentage is provided
    if (
      !baseDiscountPercentage &&
      variant?.sellingPrice &&
      variant?.discountedPrice
    ) {
      baseDiscountPercentage =
        ((variant.sellingPrice - variant.discountedPrice) /
          variant.sellingPrice) *
        100;
    }

    const bulkDiscountPercentage =
      bulk && orderQuantity >= bulk.minOrder ? bulk.discount : 0;

    // Total discount percentage
    const totalDiscountPercentage =
      baseDiscountPercentage + bulkDiscountPercentage;

    // Calculate final discounted price per unit
    const discountedPrice = parseFloat(
      (variant?.sellingPrice * (1 - totalDiscountPercentage / 100)).toFixed(2)
    );

    // Calculate the order total with discounted price
    const orderTotal = discountedPrice * orderQuantity;

    // Calculate total discount amount
    const discountAmount =
      (variant.sellingPrice - discountedPrice) * orderQuantity;
    totalDiscount += discountAmount;

    // Accumulate the total price
    totalPrice += orderTotal;
  });

  // Ensure prices and discounts are rounded to two decimal places
  totalPrice = parseFloat(totalPrice.toFixed(2));
  totalDiscount = parseFloat(totalDiscount.toFixed(2));

  return { totalPrice, totalDiscount };
};

export default calculateTotalPriceAndDiscountOfCart;
