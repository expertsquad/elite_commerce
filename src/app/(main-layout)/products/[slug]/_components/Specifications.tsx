import { IProduct } from "@/interfaces/product.interface";
import React from "react";
import SpecificationDetails from "./SpecificationDetails";
import DescriptionReader from "@/Components/DescriptionReader";

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
        <h2 className="text-[18px] md:text-[22px] font-semibold pb-3 border-b border-black-10 mb-5">
          Description
        </h2>
        <DescriptionReader description={product?.description?.data} />
      </div>
    </div>
  );
};

export default Specifications;
