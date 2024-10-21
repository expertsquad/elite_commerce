"use server";

import { fetchData } from "@/actions/fetchData";

export const getWidget = async () => {
  const response = await fetchData({
    route: "/promotions/deals-of-the-day",
  });
  return response?.data?.widget;
};
