"use client";
import ProductCard from "@/Components/ProductCard/ProductCard";
import { IProduct } from "@/interfaces/product.interface";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";

interface IFilteredProductsGridViewProps {
  products: {
    data: [];
  };
}

const FilteredProductsGridView = ({
  products,
}: IFilteredProductsGridViewProps) => {
  const filtereableProducts = products?.data;

  const searchParams = useSearchParams();
  const min = parseFloat(searchParams.get("min") ?? "");
  const max = parseFloat(searchParams.get("max") ?? "");
  const categoryName = searchParams.get("categoryName") ?? "";
  const color = searchParams.get("color") ?? "";
  const brand = searchParams.get("brand") ?? "";
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);

  useEffect(() => {
    if (min !== undefined && max !== undefined) {
      const filteredProducts = filtereableProducts.filter(
        (product: IProduct) =>
          product?.variants?.some(
            (variant) =>
              variant?.sellingPrice >= min && variant?.sellingPrice <= max
          ) ||
          product?.category?.categoryName === categoryName ||
          product?.variants?.some((variant) => variant.variantName === color) ||
          product?.brand?.brandName === brand
      );
      setFilteredData(filteredProducts);
    } else {
      setFilteredData(filtereableProducts);
    }
  }, [min, max, filtereableProducts, categoryName, color, brand]);

  if (filteredData?.length === 0) {
    return (
      <div className="flex text-center mt-20 justify-center items-center">
        <span className="text-lg">No products found</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 mb-10">
      <span className="text-lg">{filteredData?.length} Items result found</span>
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {filteredData?.map((product: IProduct) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilteredProductsGridView;
