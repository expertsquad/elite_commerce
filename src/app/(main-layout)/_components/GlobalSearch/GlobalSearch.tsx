"use client";
import Modal from "@/Components/Modal";
import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { ICategory } from "../../../../interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import ProductCard from "@/Components/ProductCard/ProductCard";
import SearchingProducts from "./SearchingProducts";

export interface IGlobalSearchProps {
  categories: ICategory[];
  products?: IProduct[];
  currencyIcon: string;
}

const GlobalSearch = ({
  categories,
  products,
  currencyIcon,
}: IGlobalSearchProps) => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hanldeGlobalSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setShow(true);
  };

  const iconStroke = 1.2;

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <button
        className="first:after:content-['|'] after:text-black-50 after:opacity-50 flex items-center gap-2"
        onClick={(e) => hanldeGlobalSearch(e)}
      >
        <IconSearch stroke={iconStroke} />
      </button>
      {show && (
        <Modal
          show={show}
          setShow={setShow}
          className="w-[clamp(450px,70vw,1000px)] min-h-[650px] overflow-hidden"
          alignment="center"
          isOnlyLargeDevice={true}
        >
          <div className="mb-[30px] sticky -top-4 z-50">
            <input
              type="text"
              placeholder="Searching..."
              className="border border-black-10 w-full outline-none px-3 md:px-5 rounded-md py-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <span className="absolute right-4 top-[10px]">
              <IconSearch stroke={1} color="#4C4C4C" />
            </span>
          </div>
          <div>
            {searchValue ? (
              <div>
                <SearchingProducts
                  setShow={setShow}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  currencyIcon={currencyIcon}
                />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-5">
                  <span className="text-gradient-primary font-bold text-xl">
                    Feature Keywords Today
                  </span>
                  <div className="flex items-center flex-wrap gap-3.5 ">
                    {categories?.map((item: ICategory) => (
                      <div
                        key={item?._id}
                        onClick={() => setSearchValue(item?.categoryName)}
                        className="text-xs transition-all duration-300 hover:bg-gradient-primary hover:text-white  md:text-base text-black-50 border border-black-10 px-3 py-2.5 rounded-full cursor-pointer"
                      >
                        {item?.categoryName}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-5">
                  <span className="text-sm md:text-base font-semibold">
                    Recently Viewed Product
                  </span>
                  <div className="flex items-center justify-start gap-5 overflow-x-auto scrollbar-x-remove ">
                    {products?.map((item: IProduct) => (
                      <ProductCard
                        key={item?._id}
                        product={item}
                        onClick={() => setShow(false)}
                        currencyIcon={currencyIcon}
                        quickAction={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GlobalSearch;
