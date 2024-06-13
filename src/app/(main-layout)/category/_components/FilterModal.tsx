"use client";
import Modal from "@/Components/Modal";
import { IconFilter } from "@tabler/icons-react";
import React, { useState } from "react";
import FilteringSection, { IFilteringSectionProps } from "./FilteringSection";

const FilterModal = ({
  categories,
  products,
  brands,
}: IFilteringSectionProps) => {
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
          <FilteringSection
            categories={categories}
            products={products}
            brands={brands}
          />
        </Modal>
      )}
    </div>
  );
};

export default FilterModal;
