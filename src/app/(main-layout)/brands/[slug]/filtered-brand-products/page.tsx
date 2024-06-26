"use client";

import { fetchData } from "@/actions/fetchData";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import { FilterContext } from "@/Provider/BrandProductFilteringProvider";

import { useContext, useEffect, useState } from "react";

const FilteredBrandProductsPage = ({
  params,
}: {
  params: { slug: string };
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    let query: string = `brand.brandName=${params.slug}`;

    Object.entries(filter).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(
          (item) =>
            (query = query ? query + `&${key}=${item}` : `${key}=${item}`)
        );
      } else {
        query = query ? query + `&${key}=${value}` : `${key}=${value}`;
      }
    });
    const getDataByFetching = async () => {
      setIsLoading(true);
      const response = await fetchData({
        route: "/product",
        limit: 40,
        query: query,
      });
      setProducts(response?.data);
      setIsLoading(false);
    };

    getDataByFetching();
  }, [filter, params]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary [animation-delay:-0.3s]"></div>
          <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary [animation-delay:-0.15s]"></div>
          <div className="w-5 h-5 rounded-full animate-bounce bg-gradient-primary"></div>
        </div>
      </div>
    );
  }
  if (products?.length === 0) {
    return (
      <div className="flex text-center mt-20 justify-center items-center">
        <span className="text-lg">No products found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <span>{products?.length} items found</span>
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {products?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilteredBrandProductsPage;
