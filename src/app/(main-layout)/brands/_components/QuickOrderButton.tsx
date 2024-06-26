"use client";
import React, { Fragment, useState } from "react";
import QuickOrderModal from "../../_components/QuickOrder/QuickOrderModal";
import { IProduct } from "@/interfaces/product.interface";

interface IQuickOrderButtonProps {
  product: IProduct;
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
  console.log(product);
  const [show, setShow] = useState(false);

  const handleQuickOrderButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShow(true);
  };

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
        <QuickOrderModal show={show} setShow={setShow} products={[product]} />
      )}
    </Fragment>
  );
};

export default QuickOrderButton;
