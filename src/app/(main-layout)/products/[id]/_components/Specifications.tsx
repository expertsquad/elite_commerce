import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import SpecificationsMenu from "./SpecificationsMenu";
import SpecificationDetails from "./SpecificationDetails";
import SpecBulkProduct from "./SpecBulkProduct";
import Image from "next/image";
import { gradientLine } from "@/assets";

const Specifications = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <SpecificationsMenu />
      {/* == Specification == */}
      <div className="mt-12">
        <div
          id="specification"
          className="flex justify-between md:gap-7 gap-0 w-full"
        >
          <div id="specification" className="w-full">
            <SpecificationDetails
              specificationDetails={product?.specifications}
            />
          </div>
          <div>
            <SpecBulkProduct productdata={product} />
          </div>
        </div>
      </div>
      {/* == Description == */}
      <div id="description" className="description mb-16">
        <h2 className="text-[18px] md:text-[24px] font-semibold">
          Description
        </h2>
        <Image src={gradientLine} alt="underline" />
        <div
          className="mt-3 md:mt-7"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        />
      </div>
    </div>
  );
};

export default Specifications;
