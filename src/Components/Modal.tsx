import React, { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Buttons";
import Image from "next/image";
import { XIcon } from "@/assets";

const Modal = ({
  setShow,
  className,
  children,
}: {
  setShow: Dispatch<SetStateAction<boolean>>;
  className: string;
  children: React.ReactNode;
}) => {
  return createPortal(
    <div
      className="absolute inset-0 z-50 backdrop-blur-sm bg-black-transparent transition-all duration-300 ease-in-out"
      onClick={(prev) => setShow(!prev)}
    >
      <div
        className={`rounded-3xl relative shadow-lg shadow-black-50 bg-white p-3 lg:p-5 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* close handler */}
        <Button
          className="absolute top-5 right-5 lg:top-6 lg:right-6"
          onClick={(prev) => setShow(!prev)}
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
