"use client";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageZoomComponent from "./ImageZoomComponent";

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
    <div className="flex flex-col-reverse md:flex-row gap-5 md:flex-1">
      <div className="flex md:flex-col gap-4">
        {slicedProducts?.map((image: any) => (
          <div
            key={image._id}
            className={`cursor-pointer flex items-center justify-center hover:shadow-md overflow-hidden p-[1px] bg-[#F8F8F8] transition duration-300 rounded-md ${
              selectedImage === image
                ? "border-gradient-primary "
                : "border border-black-10 bg-gradient-primary-light transition duration-300"
            }`}
            onClick={() => handleChangePhoto(image)}
          >
            <div className="w-[50px] h-[50px] md:w-20 md:h-[100px] relative overflow-hidden">
              <Image
                src={`${server_url + image}`}
                alt="Product Photo"
                fill
                sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                className="inset-0 object-contain p-1 md:p-3"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center rounded-lg w-full border border-black-10 bg-gradient-primary-light">
        {selectedImage && <ImageZoomComponent selectedImage={selectedImage} />}
      </div>
    </div>
  );
};

export default ProductViewImage;
