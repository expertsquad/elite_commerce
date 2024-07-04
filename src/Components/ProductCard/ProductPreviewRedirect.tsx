"use client";
import { IProduct } from "@/interfaces/product.interface";
import { useRouter } from "next/navigation";
import React from "react";

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

  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/products/${product?._id}`);
  };

  return (
    <div className={className} onClick={handleRedirect}>
      {children}
    </div>
  );
};

export default ProductPreviewRedirect;
