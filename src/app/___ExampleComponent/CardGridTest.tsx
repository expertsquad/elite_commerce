import ProductCard from "@/Components/ProductCard";
import React from "react";

const CardGridTest = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
      <ProductCard>hello</ProductCard>
      <ProductCard>hello</ProductCard>
      <ProductCard>hello</ProductCard>
      <ProductCard>hello</ProductCard>
    </div>
  );
};

export default CardGridTest;
