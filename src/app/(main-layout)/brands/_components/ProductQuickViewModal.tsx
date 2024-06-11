import { fetchData } from "@/actions/fetchData";
import Modal from "@/Components/Modal";
import React from "react";

const ProductQuickViewModal = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal show={show} setShow={setShow} alignment="right" className="w-2/4">
      <div className="">
        <div></div>
        <div></div>
      </div>
    </Modal>
  );
};

export default ProductQuickViewModal;
