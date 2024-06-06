import Modal from "@/Components/Modal";
import React from "react";
import Category from "./Category";
import { ICategory } from "@/interfaces/category.interface";
import { fetchData } from "@/actions/fetchData";
import SmallProductCard from "./SmallProductCard";

interface IBrandFilterDrawerProps {
  showFilterDrawer: boolean;
  setShowFilterDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const BrandFilterDrawer = async ({
  setShowFilterDrawer,
  showFilterDrawer,
}: IBrandFilterDrawerProps) => {
  return (
    <div>
      <Modal
        show={showFilterDrawer}
        alignment="left"
        setShow={setShowFilterDrawer}
        className="w-9/12"
      >
        <div className="flex flex-col gap-7  py-10 px-5 overflow-y-auto h-screen">
          <div className="flex flex-col gap-7">
            <span className="uppercase text-lg font-semibold">Categories</span>

            <div className="flex flex-col gap-5">
              {[...Array(10)].map((category: ICategory, index: number) => {
                return <Category categoryData={category} key={index} />;
              })}
            </div>
          </div>
          <hr className="border-black-10 " />
          <div className="flex flex-col gap-7 ">
            <span className="uppercase text-lg font-semibold">
              To Selling Brands Product
            </span>
            <div className="flex flex-col gap-7">
              {[...Array(5)].map((_, index) => {
                return <SmallProductCard key={index} />;
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BrandFilterDrawer;
