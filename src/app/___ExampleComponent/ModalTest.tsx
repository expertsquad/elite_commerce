"use client";

import { IconAB2 } from "@tabler/icons-react";

import { Button } from "@/Components/Buttons";
import Modal from "@/Components/Modal";
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
          Left Modal
          <IconAB2 />
        </Button>
      </div>

      <div className="min-h-screen flex items-center">
        <Button
          className="border p-2 bg-gradient-primary text-white"
          onClick={() => setShow(true)}
        >
          Center Modal
          <IconAB2 />
        </Button>
      </div>
      <div className="min-h-screen flex items-center">
        <Button
          className="border p-2 bg-gradient-primary text-white"
          onClick={() => setShowRight(true)}
        >
          Right Modal
          <IconAB2 />
        </Button>
      </div>

      {/* ====================================
 modals 
==================================== */}
      {/*left side modal */}
      {showLeft && (
        <Modal
          show={showLeft}
          className="w-3/4"
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
          className="h-2/4 w-3/4"
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
          className="w-1/4"
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
