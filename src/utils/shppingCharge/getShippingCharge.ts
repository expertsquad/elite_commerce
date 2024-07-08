import { fetchData, fetchProtectedData } from "@/actions/fetchData";

export const getShippingCharge = async ({
  soldAmount,
}: {
  soldAmount: number;
}): Promise<number> => {
  const shippingData = await fetchData({
    route: "/settings/shipping-charge",
  });

  const defaultAddressData = await fetchProtectedData({
    route: "/user-address/me",
    query: "isDefault=true",
  });

  const shippingCharge = shippingData?.data;
  const defaultAddress = defaultAddressData?.data?.[0];

  let shippingFee;
  if (soldAmount > shippingCharge?.freeShippingMinOrderAmount) {
    shippingFee = 0;
  } else if (defaultAddress?.state === shippingCharge?.state) {
    shippingFee = shippingCharge?.inside;
  } else {
    shippingFee = shippingCharge?.outside || 0;
  }

  return shippingFee;
};
