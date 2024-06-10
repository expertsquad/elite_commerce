"use client";
import { useState } from "react";

const ProductVariantColor = ({ variants, onSelectVariant }: any) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedVariantIndex(index);
    onSelectVariant(variants[index]);
  };

  const renderCircles = () => {
    return variants?.map((color: any, index: number) => {
      return (
        <div
          key={index}
          className={`w-6 h-6 rounded-sm bg-white cursor-pointer flex items-center justify-center border ${
            index === selectedVariantIndex
              ? `border-${color?.variantName} border-2 border-[#${color?.variantName}]`
              : "border-transparent"
          }`}
          onClick={() => handleClick(index)}
          style={{
            border: `2px solid ${color?.variantName}`,
          }}
        >
          <div
            className={`h-4 w-4 rounded-sm`}
            style={{ backgroundColor: color?.variantName }}
          ></div>
        </div>
      );
    });
  };

  return <>{renderCircles()}</>;
};

export default ProductVariantColor;
