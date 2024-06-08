import { fetchData } from "@/actions/fetchData";
import { server_url } from "@/constants";
import { IBrand } from "@/interfaces/brand.interface";
import Image from "next/image";
import React from "react";

const ProductFilterByBrands = async () => {
  const response = await fetchData({ route: "/brand", limit: 10 });
  return (
    <div>
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl uppercase whitespace-nowrap">
        BRANDS
      </h2>
      <div>
        {response?.data?.map((brand: IBrand) => (
          <div key={brand?._id} className="flex items-center gap-x-2.5">
            <input
              type="checkbox"
              className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
              name="inStock"
              id="inStock"
            />
            <div className="relative shrink-0 w-7 h-4">
              <Image
                src={`${server_url}${brand?.brandPhoto}`}
                alt="Brand Image"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full top-0 left-0"
              />
            </div>
            <span className="text-black-80">{brand?.brandName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterByBrands;
