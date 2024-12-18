import { fetchData } from "@/actions/fetchData";

export const getBulk = async (id: string) => {
  const res = await fetchData({
    route: `/product/${id}`,
  });
  return res;
};
