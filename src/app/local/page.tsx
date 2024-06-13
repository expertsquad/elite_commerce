"use client";
import { fetchData, fetchProtectedData } from "@/actions/fetchData";
import { formatProductForCart } from "@/helpers/formatProductForCart.helper";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "@/helpers/localStorage.helper";
import { mergeProducts } from "@/helpers/mergeProduct.helper";
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
        orderQuantity: 5,
      });

      setLocalStorageData("data", formattedProduct);
      const remoteCart = await fetchProtectedData({ route: "/cart/me" });
      //   setLocalStorageData("data", data?.data?.products);

      const localProducts = getLocalStorageData("data");
      const remoteProducts = remoteCart?.data?.products;

      console.log("local:-", localProducts);
      console.log("remote:--", remoteProducts);

      console.log("merged:---", mergeProducts([localProducts], remoteProducts));
    };
    get();
  }, []);

  return <div>hello</div>;
};

export default Page;
