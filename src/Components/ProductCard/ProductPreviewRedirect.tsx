"use client";
import { IProduct } from "@/interfaces/product.interface";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
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
    e.stopPropagation();
    setIsLoading(true);

    router.push(`/products/${product?.productUrlSlug}`);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className={`${className} relative`} onClick={handleRedirect}>
      {isLoading && <CustomLoading />}
      {children}
    </div>
  );
};

export default ProductPreviewRedirect;
