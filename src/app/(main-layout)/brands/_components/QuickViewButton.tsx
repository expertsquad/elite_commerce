"use client";
import React, { Fragment, useState } from "react";
import ProductQuickViewModal from "./ProductQuickViewModal";
import { IProduct } from "@/interfaces/product.interface";

const QuickViewButton = ({ product }: { product: IProduct }) => {
  const [show, setShow] = useState(false);
  const handleProductCard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShow(true);
  };
  return (
    <Fragment>
      <button
        onClick={(e) => handleProductCard(e)}
        className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full"
      >
        Quick View
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
