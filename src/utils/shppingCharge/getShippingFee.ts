"use client";

import { useEffect, useState } from "react";
import { getShippingCharge } from "./getShippingCharge";

export const useGetShippingFee = ({ soldAmount }: { soldAmount: number }) => {
  const [shippingFee, setShippingFee] = useState<number | null>(null);
  useEffect(() => {
    const fetchShippingFee = async () => {
      try {
        if (soldAmount) {
          const fee = await getShippingCharge({ soldAmount });
          setShippingFee(fee);
        } else {
          setShippingFee(0);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchShippingFee();
  }, [soldAmount]);
  return shippingFee;
};
