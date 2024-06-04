"use client";

import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
import { searchIcon } from "@/assets";
import Image from "next/image";
import React from "react";

const ModalTest = () => {
  const [showLeft, setShowLeft] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [showRight, setShowRight] = React.useState(false);

  return (
    <div>
      <div className="min-h-screen flex items-center">
        <Button
          className="border p-2 bg-gradient-primary text-white"
          onClick={() => setShowLeft(true)}
        >
          Left Modal <Image src={searchIcon} alt="Icon" />
        </Button>
      </div>

      <div className="min-h-screen flex items-center">
        <Button
          className="border p-2 bg-gradient-primary text-white"
          onClick={() => setShow(true)}
        >
          Center Modal <Image src={searchIcon} alt="Icon" />
        </Button>
      </div>
      <div className="min-h-screen flex items-center">
        <Button
          className="border p-2 bg-gradient-primary text-white"
          onClick={() => setShowRight(true)}
        >
          Right Modal <Image src={searchIcon} alt="Icon" />
        </Button>
      </div>

      {/* ====================================
 modals 
==================================== */}
      {/*left side modal */}
      {showLeft && (
        <Modal
          show={showLeft}
          className="h-[calc(100%-16px)] w-1/2 m-2"
          appearAnimation="translate-x-0"
          disappearAnimation="-translate-x-1/2"
          setShow={setShowLeft}
        >
          Hello
        </Modal>
      )}
      {/*center modal */}
      {show && (
        <Modal
          show={show}
          className="h-1/2 w-1/2 mx-auto translate-y-1/2"
          appearAnimation="scale-1"
          disappearAnimation="scale-0"
          setShow={setShow}
        >
          Hello
        </Modal>
      )}
      {/*right side modal */}
      {showRight && (
        <Modal
          show={showRight}
          className="h-[calc(100%-16px)] w-1/2 ml-auto m-2"
          appearAnimation="translate-x-0"
          disappearAnimation="translate-x-1/2"
          setShow={setShowRight}
        >
          Hello
        </Modal>
      )}
    </div>
  );
};

export default ModalTest;
