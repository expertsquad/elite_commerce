export const calculatePercentageToFreeShipping = (
  totalAmount: number,
  minimumFreeShippingAmount: number
): number => {
  // If the total amount is already equal to or greater than the minimum amount, return 100%
  if (totalAmount >= minimumFreeShippingAmount) {
    return 100;
  }

  // Calculate the percentage of the total amount relative to the minimum free shipping amount
  const percentageToFreeShipping =
    (totalAmount / minimumFreeShippingAmount) * 100;

  return percentageToFreeShipping;
};
