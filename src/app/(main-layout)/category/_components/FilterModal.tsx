"use client";
import Modal from "@/Components/Modal";
import React, { useEffect, useState } from "react";

const FilterModal = ({ filter }: { filter: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Filter</button>
      {show && (
        <Modal show={show} setShow={setShow} alignment="left">
          {filter}
        </Modal>
      )}
    </div>
  );
};

export default FilterModal;
