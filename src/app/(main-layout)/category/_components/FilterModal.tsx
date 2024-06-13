"use client";
import Modal from "@/Components/Modal";
import { IconFilter } from "@tabler/icons-react";
import React, { useState } from "react";
import PriceRange from "./PriceRange";
import CategoryCard from "./CategoryCard";
import FilterByColor from "./FilterByColor";
import TopRatingProductCard from "./TopRatingProductCard";
import FilterByAvailableProducts from "./FilterByAvailableProducts";
import ProductFilterByBrands from "./ProductFilterByBrands";
import WidgetCard from "@/Components/WidgetCard";

const FilterModal = () => {
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
          <div className="">
            <PriceRange />
            <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
            <div>
              <CategoryCard title="CATEGORIES" />
            </div>
            <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
            <FilterByColor />
            <span className="bg-black-10 h-0.5 w-full hidden md:flex my-5 md:my-[30px]"></span>
            <div className="hidden md:block">
              <TopRatingProductCard />
            </div>
            <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
            <FilterByAvailableProducts />
            <span className="bg-black-10 h-0.5 w-full flex my-5 md:my-[30px]"></span>
            <ProductFilterByBrands />
            <span className="bg-black-10 h-0.5 w-full my-5 md:my-[30px] hidden md:flex"></span>
            <div className="hidden md:block">
              <WidgetCard />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FilterModal;
