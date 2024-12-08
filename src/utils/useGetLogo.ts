"use client";
import { fetchData } from "@/actions/fetchData";
import { useEffect, useState } from "react";

const useGetLogo = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShopLogo = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchData({ route: `/settings/shop` });
        setLogo(res?.data?.shopLogo);
      } catch (error) {
        // console.error(error);
        setError("Failed To Fetch Product");
      } finally {
        setLoading(false);
      }
    };
    fetchShopLogo();
  }, []);

  return { logo, loading, error };
};

export default useGetLogo;
