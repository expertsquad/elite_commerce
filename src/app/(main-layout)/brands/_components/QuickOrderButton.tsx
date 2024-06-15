"use client";
import React, { Fragment, useState } from "react";
import QuickOrderModal from "./QuickOrderModal";

const QuickOrderButton = () => {
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
        className="text-base bg-white py-1.5 whitespace-nowrap px-5 rounded-full"
      >
        Quick Order
      </button>
      {show && <QuickOrderModal show={show} setShow={setShow} />}
    </Fragment>
  );
};

export default QuickOrderButton;
