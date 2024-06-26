"use client";
import React, { Fragment, useState } from "react";
import QuickOrderModal from "../../_components/QuickOrder/QuickOrderModal";
import { IProduct } from "@/interfaces/product.interface";
import { ICartProduct } from "@/interfaces/cart.interface";

interface IQuickOrderButtonProps {
  product: IProduct | ICartProduct | IProduct[] | ICartProduct[];
  buttonText?: string;
  buttonStyle?: string;
  buttonIcon?: any;
}

const QuickOrderButton = ({
  product,
  buttonIcon,
  buttonStyle,
  buttonText,
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
        onClick={(e) => handleQuickOrderButton(e)}
        className={`${buttonStyle}`}
      >
        {buttonIcon && <span>{buttonIcon}</span>}
        {buttonText}
      </button>
      {show && (
        <QuickOrderModal
          show={show}
          setShow={setShow}
          products={productsArray}
        />
      )}
    </Fragment>
  );
};

export default QuickOrderButton;
