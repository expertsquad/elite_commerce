"use client";
import React, { Fragment, useState } from "react";
import ProductQuickViewModal from "./ProductQuickViewModal";
import { IProduct } from "@/interfaces/product.interface";

const QuickViewButton = ({
  product,
  children,
  btnClassName,
}: {
  product: IProduct;
  children?: React.ReactNode;
  btnClassName?: string;
}) => {
  const [show, setShow] = useState(false);
  const handleProductCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShow(true);
  };

  return (
    <Fragment>
      <button
        onClick={(e) => handleProductCard(e)}
        className={`text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full ${btnClassName}`}
      >
        {children ? children : "Quick View"}
      </button>

      {show && (
        <ProductQuickViewModal
          show={show}
          setShow={setShow}
          product={product}
        />
      )}
    </Fragment>
  );
};

export default QuickViewButton;
