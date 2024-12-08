"use client";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";
import { useEffect, useState } from "react";

const useGetSingleProduct = (productId: string) => {
  const [singleProduct, setSingleProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      setLoading(true);
      setError(null);
      try {
        const res = await fetchData({ route: `/product/${productId}` });
        setSingleProduct(res?.data);
      } catch (error) {
        // console.error(error);
        setError("Failed To Fetch Product");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return { singleProduct, loading, error };
};

export default useGetSingleProduct;
