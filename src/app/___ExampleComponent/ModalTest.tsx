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
          className=" w-3/4"
          alignment="left"
          setShow={setShowLeft}
        >
          Hello
        </Modal>
      )}
      {/*center modal */}
      {show && (
        <Modal
          show={show}
          className="h-3/4 w-3/4"
          alignment="center"
          setShow={setShow}
        >
          Hello
        </Modal>
      )}
      {/*right side modal */}
      {showRight && (
        <Modal
          show={showRight}
          className="w-3/4"
          alignment="right"
          setShow={setShowRight}
        >
          Hello
        </Modal>
      )}
    </div>
  );
};

export default ModalTest;
