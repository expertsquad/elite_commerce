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
    <div className="flex md:flex-row flex-col-reverse items-center gap-5 md:flex-1">
      <div className=" flex md:flex-col gap-3">
        {slicedProducts?.map((image: any) => (
          <div
            key={image._id}
            className={`cursor-pointer flex items-center justify-center hover:shadow-md overflow-hidden p-[1px] rounded-full ${
              selectedImage === image ? "border-gradient-primary" : ""
            }`}
            onClick={() => handleChangePhoto(image)}
          >
            <div className="w-10 h-10 md:w-24 md:h-24 shrink-0 relative rounded-full bg-gradient-primary-light">
              <Image
                src={`${server_url + image}`}
                alt="demo Printer"
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                className="w-full h-full top-0 left-0 object-cover rounded-full p-1 md:p-3"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center border-black-10 rounded-lg w-full bg-gradient-primary-light">
        {selectedImage && (
          <div className="relative shrink-0 h-96 w-96 md:h-[400px] md:w-[400px]">
            <Image
              src={`${server_url + selectedImage}`}
              alt="Product Photo"
              fill
              objectFit="cover"
              sizes="(max-width: 350px) 50vw, (max-width: 350px) 60vw, 65vw"
              className="w-full h-full top-0 left-0 object-cover p-10 rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductViewImage;
