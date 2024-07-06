"use client";

import { useEffect, useState } from "react";
import { getShippingCharge } from "./getShippingCharge";

export const useGetShippingFee = ({ soldAmount }: { soldAmount: number }) => {
  const [shippingFee, setShippingFee] = useState<number | null>(null);
  useEffect(() => {
    const fetchShippingFee = async () => {
      try {
        const fee = await getShippingCharge({ soldAmount });
        setShippingFee(fee);
      } catch (error) {
        console.error("Failed to fetch shipping fee", error);
      }
    };

    fetchShippingFee();
  }, [soldAmount]);
  return shippingFee;
};
