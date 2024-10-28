import { fetchData, fetchProtectedData } from "@/actions/fetchData";

export const getCurrency = async () => {
  const res = await fetchData({
    route: "/settings/shop",
  });
  return res?.data?.currencySymbol;
};
