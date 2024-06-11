"use client";
import React, { useState } from "react";
import ProductQuickViewModal from "./ProductQuickViewModal";

const QuickViewButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full"
      >
        Quick View
      </button>

      {show && <ProductQuickViewModal show={show} setShow={setShow} />}
    </div>
  );
};

export default QuickViewButton;
