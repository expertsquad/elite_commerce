import { fetchData, fetchProtectedData } from "@/actions/fetchData";

export const getCurrency = async () => {
  const res = await fetchData({
    route: "/settings/shop",
  });
  console.log(res);

  return res?.data?.currencySymbol;
};
