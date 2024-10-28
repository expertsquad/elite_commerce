"use client";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage.helper";
import { formatProductForCart } from "@/utils/formatProductForCart.utils";
import { mergeProducts } from "@/utils/mergeProduct.utils";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const get = async () => {
      const product = await fetchData({ route: "/product", limit: 1 });

      const v = {
        variantName: "Not specified",
      };

      const formattedProduct = formatProductForCart({
        product: product?.data?.[0],
        selectedVariant: v,
      });

      setLocalStorageData("data", formattedProduct);
      const remoteCart = await fetchProtectedData({ route: "/cart/me" });
      // setLocalStorageData("cartProducts", remoteCart?.data?.products);

      const localProducts = getLocalStorageData("data");
      const remoteProducts = remoteCart?.data?.products;
    };
    get();
  }, []);

  return <div>hello</div>;
};

export default Page;
