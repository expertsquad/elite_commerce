"use client";
import Modal from "@/Components/Modal";
import { IconFilter } from "@tabler/icons-react";
import React, { useState } from "react";
import BrandFilterSection from "./BrandFilterSection";
import { ICategory } from "@/interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import { IBrand } from "@/interfaces/brand.interface";

const BrandFilterModal = ({
  categories,
  products,
  brands,
  params,
}: {
  categories: ICategory[];
  products: IProduct[];
  brands: IBrand[];
  params: { slug: string };
}) => {
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
          className="overflow-y-scroll scrollbar-y-remove p-3 w-[clamp(250px,80vw,350px)] md:hidden"
        >
          <BrandFilterSection
            brands={brands}
            products={products}
            categories={categories}
            params={params}
          />
        </Modal>
      )}
    </div>
  );
};

export default BrandFilterModal;
