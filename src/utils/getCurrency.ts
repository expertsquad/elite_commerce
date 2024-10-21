import { fetchProtectedData } from "@/actions/fetchData";

export const getCurrency = async () => {
  const res = await fetchProtectedData({
    route: "/settings/shop",
  });
  console.log(res);

  return res?.data?.currencySymbol;
};
