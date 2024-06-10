import { Button } from "@/Components/Buttons";
import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <div
      className="flex w-full lg:flex-row flex-col  border-b border-black-10 py-5
     "
    >
      {/* Image and titile */}
      <div className="w-full lg:w-1/2 flex lg:justify-center justify-start items-center gap-4">
        <div className="flex justify-center items-center bg-gradient-primary-light rounded-lg w-16 h-16">
          <Image
            alt="Product Image"
            src="/images/product-image.png"
            width={60}
            height={60}
          />
        </div>{" "}
        <p className="line-clamp-2">
          Apple Watch Series 8 GPS 45mm Silver Aluminum Case Sport Band.
        </p>
      </div>

      {/* Purchase on and review */}
      <div className="flex w-full lg:w-1/2  justify-between items-center">
        <div className="flex justify-start flex-col">
          <p className="text-black-50 text-sm">Purchase on</p>
          <p>12/01/2021</p>
        </div>
        <Button className="py-2 px-5 bg-gradient-primary text-white rounded-lg">
          Review Now
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
