"use client";
import { IProduct } from "@/interfaces/product.interface";
import { useRouter } from "next/navigation";
import React from "react";

const ProductPreviewRedirect = ({
  className,
  children,
  product,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  product: IProduct;
  onClick?: () => void;
}) => {
  const router = useRouter();

  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick && onClick();
    router.push(`/products/${product?.productUrlSlug}`);
  };

  return (
    <div className={className} onClick={handleRedirect}>
      {children}
    </div>
  );
};

export default ProductPreviewRedirect;
