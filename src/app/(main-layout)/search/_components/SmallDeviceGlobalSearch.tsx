"use client";
import React, { useEffect, useState } from "react";
import { IGlobalSearchProps } from "../../_components/GlobalSearch/GlobalSearch";
import Modal from "@/Components/Modal";
import { IconSearch } from "@tabler/icons-react";
import SearchingProducts from "../../_components/GlobalSearch/SearchingProducts";
import { ICategory } from "@/interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import ProductCard from "@/Components/ProductCard/ProductCard";

const SmallDeviceGlobalSearch = ({
  categories,
  products,
}: IGlobalSearchProps) => {
  const [show, setShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Modal
      show={show}
      setShow={setShow}
      className="w-screen h-screen overflow-y-scroll scrollbar-x-remove scrollbar-y-remove rounded-none"
      alignment="center"
      rounded={false}
    >
      <div className="my-3 sticky top-1 z-50 p-2">
        <input
          type="text"
          placeholder="Searching..."
          className="border border-black-10 w-full outline-none px-3 md:px-5 rounded-md py-2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <span className="absolute right-4 top-[15px]">
          <IconSearch stroke={1} color="#4C4C4C" />
        </span>
      </div>
      <div className="p-2">
        {searchValue ? (
          <div>
            <SearchingProducts
              setShow={setShow}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        ) : (
          <div>
            <span className="text-gradient-primary font-bold text-xl">
              Feature Keywords Today
            </span>
            <div className="flex items-center flex-wrap gap-3.5 mt-5 mb-8">
              {categories?.map((item: ICategory) => (
                <span
                  key={item?._id}
                  onClick={() => setSearchValue(item?.categoryName)}
                  className="text-xs md:text-base text-black-50 border border-black-10 px-2 py-1 rounded-md cursor-pointer"
                >
                  {item?.categoryName}
                </span>
              ))}
            </div>
            <div>
              <span className="text-sm md:text-base font-semibold">
                Recently Viewed Product
              </span>
              <div className="grid grid-cols-product-grid gap-5 mt-5">
                {products?.map((item: IProduct) => (
                  <ProductCard key={item?._id} product={item} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default SmallDeviceGlobalSearch;
