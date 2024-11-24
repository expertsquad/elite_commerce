"use client";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CustomLoading from "../CustomLoader";

const ProductPreviewRedirect = ({
  className,
  children,
  product,
}: {
  className?: string;
  children: React.ReactNode;
  product: IProduct;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event propagation
    setIsLoading(true); // Show custom loading

    // Simulate loading for 2 seconds before navigating
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      router.push(`/products/${product?.productUrlSlug}`); // Navigate after delay
    }, 3000);
  };

  return (
    <div className={`${className} relative`} onClick={handleRedirect}>
      {isLoading && <CustomLoading />}
      {children}
    </div>
  );
};

export default ProductPreviewRedirect;
