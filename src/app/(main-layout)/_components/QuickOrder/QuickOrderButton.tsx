"use client";
import React, { Fragment, useState } from "react";
import QuickOrderModal from "./QuickOrderModal";
import { IProduct, IProductVariant } from "@/interfaces/product.interface";
import { ICartProduct } from "@/interfaces/cart.interface";

interface IQuickOrderButtonProps {
  product: IProduct | ICartProduct | IProduct[] | ICartProduct[];
  buttonText?: string;
  buttonStyle?: string;
  buttonIcon?: any;
  currencyIcon?: string;
  shippingAmount?: number;
  variant?: IProductVariant;
}

const QuickOrderButton = ({
  product,
  buttonIcon,
  buttonStyle,
  buttonText,
  currencyIcon,
  shippingAmount,
  variant,
}: IQuickOrderButtonProps) => {
  const [show, setShow] = useState(false);

  const handleQuickOrderButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShow(true);
  };
  const productsArray = Array.isArray(product) ? product : [product];
  return (
    <Fragment>
      <button
        disabled={variant && variant?.inStock < 1 ? true : false}
        onClick={(e) => handleQuickOrderButton(e)}
        className={`${buttonStyle} ${
          variant && variant?.inStock < 1 ? "cursor-not-allowed" : ""
        }`}
      >
        {buttonIcon && <span>{buttonIcon}</span>}
        {buttonText}
      </button>
      {show && (
        <QuickOrderModal
          show={show}
          setShow={setShow}
          products={productsArray}
          currencyIcon={currencyIcon}
          shippingAmount={shippingAmount ? shippingAmount : 0}
        />
      )}
    </Fragment>
  );
};

export default QuickOrderButton;
