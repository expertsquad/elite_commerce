"use client";
import { IProductVariant } from "@/interfaces/product.interface";
import { Fragment, useState } from "react";

interface IProductVariantProps {
  variants: IProductVariant[];
  onSelectVariant?: any;
}

const ProductVariantColor = ({
  variants,
  onSelectVariant,
}: IProductVariantProps) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedVariantIndex(index);
    onSelectVariant?.(variants[index]);
  };

  const renderCircles = () => {
    return variants?.map((color: IProductVariant, index: number) => {
      const isSelected = index === selectedVariantIndex;
      const isNotSpecified = color?.variantName === "Not specified";
      return (
        <div
          key={index}
          title={color?.variantName}
          className={`w-7 h-7 cursor-pointer flex items-center  justify-center rounded-md ${
            isSelected ? "border-2" : "border"
          } ${
            isNotSpecified || color?.variantName === "white"
              ? "border-black border-2"
              : ""
          }`}
          onClick={() => handleClick(index)}
          style={{
            borderColor: isSelected
              ? color?.variantName || "#000000"
              : `#F8F8F8`,
          }}
        >
          <div
            className="h-5 w-5 rounded-md"
            style={{
              backgroundColor: isNotSpecified ? "#F8F8F8" : color?.variantName,
            }}
          ></div>
        </div>
      );
    });
  };

  return <Fragment>{renderCircles()}</Fragment>;
};

export default ProductVariantColor;
