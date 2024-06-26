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
  console.log(selectedVariantIndex);

  const handleClick = (index: number) => {
    setSelectedVariantIndex(index);
    onSelectVariant(variants[index]);
  };

  const renderCircles = () => {
    return variants?.map((color: IProductVariant, index: number) => {
      return (
        <div
          key={index}
          className={`w-6 h-6 rounded-sm bg-white cursor-pointer flex items-center justify-center`}
          onClick={() => handleClick(index)}
          style={{
            border: `${
              index === selectedVariantIndex &&
              `2px solid ${color?.variantName}`
            }`,
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

  return <Fragment>{renderCircles()}</Fragment>;
};

export default ProductVariantColor;
