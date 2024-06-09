"use client";
import Modal from "@/Components/Modal";
import { IconFilter } from "@tabler/icons-react";
import React, { useState } from "react";

const FilterModal = ({ filter }: { filter: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="flex items-center gap-x-1 border border-black-10 p-1 rounded-md"
      >
        <span>
          <IconFilter width={18} height={18} />
        </span>
        Filter
      </button>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          alignment="left"
          className="overflow-y-scroll p-3 w-[clamp(250px,80vw,350px)] md:hidden"
        >
          {filter}
        </Modal>
      )}
    </div>
  );
};

export default FilterModal;
