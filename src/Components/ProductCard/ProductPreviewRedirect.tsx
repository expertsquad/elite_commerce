"use client";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";
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
  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Link
      href={`/products/${product?.productUrlSlug}`}
      className={className}
      onClick={handleRedirect}
    >
      {children}
    </Link>
  );
};

export default ProductPreviewRedirect;
