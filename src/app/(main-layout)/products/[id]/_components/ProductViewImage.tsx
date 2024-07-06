"use client";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductViewImage = ({ product }: { product: IProduct }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImage(product?.productPhotos[0]);
  }, [product]);

  const handleChangePhoto = (item: string) => {
    setSelectedImage(item);
    localStorage.setItem("selectedImage", item);
  };

  const slicedProducts = product?.productPhotos.slice(0, 4);
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:flex-1">
      <div className=" flex md:flex-col gap-3">
        {slicedProducts?.map((image: any) => (
          <div
            key={image._id}
            className={`cursor-pointer flex items-center justify-center hover:shadow-md overflow-hidden p-[1px] rounded-md ${
              selectedImage === image ? "border-gradient-primary" : ""
            }`}
            onClick={() => handleChangePhoto(image)}
          >
            <div className="w-10 h-10 md:w-20 md:h-20 relative overflow-hidden">
              <Image
                src={`${server_url + image}`}
                alt="Product Photo"
                fill
                sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                className="inset-0 object-contain p-3"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center rounded-lg w-full border border-black-10">
        {selectedImage && (
          <div className="relative shrink-0 flex-1 h-[515px]">
            <Image
              src={`${server_url + selectedImage}`}
              alt="Product Photo"
              fill
              placeholder="blur"
              blurDataURL={`${server_url + selectedImage}`}
              sizes="(max-width: 350px) 50vw, (max-width: 350px) 60vw, 65vw"
              className="inset-0 object-contain rounded-lg py-10 px-5 md:px-0"
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductViewImage;
