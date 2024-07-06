import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import SpecificationDetails from "./SpecificationDetails";
import Image from "next/image";
import { gradientLine } from "@/assets";

const Specifications = ({ product }: { product: IProduct }) => {
  return (
    <div>
      {/* == Specification == */}
      <div id="specification">
        <div id="specification" className="w-full">
          <SpecificationDetails
            specificationDetails={product?.specifications}
          />
        </div>
      </div>
      {/* == Description == */}
      <div id="description" className="description my-16">
        <h2 className="text-[18px] md:text-[22px] font-semibold pb-3 border-b border-black-10">
          Description
        </h2>
        {product?.description ? (
          <div
            className="mt-3 md:mt-7"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        ) : (
          <span>No description in this product!!</span>
        )}
      </div>
    </div>
  );
};

export default Specifications;
