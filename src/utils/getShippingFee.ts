export const getShippingFee = (
  shippingCharge: any,
  city: string,
  soldAmount?: number
) => {
  // Check if free shipping is active and sold amount meets the minimum order for free shipping
  if (
    shippingCharge?.isFreeShippingActive &&
    soldAmount !== undefined &&
    soldAmount >= shippingCharge?.freeShippingMinOrderAmount
  ) {
    return 0; // Free shipping
  }

  // If city is not provided, return the 'outside' charge
  if (!city) {
    return shippingCharge?.outside;
  }

  // Find the shipping charge for the specified city (case-insensitive)
  const cityCharge = shippingCharge?.insideCities.find(
    (item: any) => item.city.toLowerCase() === city.toLowerCase()
  );

  // If the city is found, return the corresponding charge
  if (cityCharge) {
    return cityCharge.charge;
  }

  // If soldAmount is not provided, return the 'outside' charge
  if (soldAmount === undefined) {
    return shippingCharge?.outside;
  }

  // If city and soldAmount do not match any conditions, return the 'outside' charge
  return shippingCharge?.outside;
};
