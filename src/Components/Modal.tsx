import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Buttons";
import Image from "next/image";
import { XIcon } from "@/assets";

const Modal = ({
  show,
  setShow,
  className,
  appearAnimation,
  disappearAnimation,
  children,
}: {
  show: boolean | any;
  setShow: Dispatch<SetStateAction<boolean>>;
  className: string;
  appearAnimation: string;
  disappearAnimation: string;
  children: React.ReactNode;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [show]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setShow(false), 300);
  };

  return createPortal(
    <div
      className={`fixed inset-0 z-50 backdrop-blur-sm bg-black-transparent transition-opacity duration-300 ease-in-out ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`rounded-3xl relative shadow-lg shadow-black-50 bg-white p-3 lg:p-5 transition-transform duration-300 ease-in-out ${
          +animate ? appearAnimation : disappearAnimation
        } ${className} `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close handler */}
        <Button
          className="absolute top-5 right-5 lg:top-6 lg:right-6"
          onClick={handleClose}
        >
          <Image src={XIcon} alt="Close" />
        </Button>
        {/* children */}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
