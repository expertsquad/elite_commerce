"use client";
import { server_url } from "@/constants";
import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageZoomComponent from "./ImageZoomComponent";
import { IconPlayerPlay, IconX } from "@tabler/icons-react";
import Modal from "@/Components/Modal";

const ProductViewImage = ({ product }: { product: IProduct }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoLink = product?.videoLink
    ? `https://www.youtube.com/embed/${product.videoLink.split("v=")[1]}`
    : null;

  useEffect(() => {
    setSelectedImage(product?.productPhotos[0]);
  }, [product]);

  const handleChangePhoto = (item: string) => {
    setSelectedImage(item);
    localStorage.setItem("selectedImage", item);
  };

  const slicedProducts = product?.productPhotos.slice(0, 5);
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 md:flex-1">
      <div className="flex md:flex-col gap-4">
        {slicedProducts?.map((image: any, index: number) => (
          <div
            key={index}
            className={`cursor-pointer flex items-center justify-center hover:shadow-md overflow-hidden p-[1px] bg-image-background transition duration-300 rounded-md ${
              selectedImage === image
                ? "border-gradient-primary "
                : "border border-black-10 bg-image-background transition duration-300"
            }`}
            onClick={() => handleChangePhoto(image)}
          >
            <div className="w-[59px] h-[69px] relative overflow-hidden">
              <Image
                src={`${server_url + image}`}
                alt="Product Photo"
                fill
                sizes="(max-width: 80px) 10vw, (max-width: 100px) 10vw, 15vw"
                className="inset-0 object-contain p-1 md:p-2"
              />
            </div>
          </div>
        ))}
        {videoLink && (
          <div
            onClick={() => setShowVideoModal(true)}
            className="w-[63px] h-[73px] relative overflow-hidden bg-image-background rounded-md flex items-center justify-center cursor-pointer border border-black-10"
          >
            <span className="bg-danger p-2 rounded-full">
              <IconPlayerPlay className="text-white size-4 md:size-6" />
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center rounded-lg w-full border border-black-10 bg-image-background">
        {selectedImage && <ImageZoomComponent selectedImage={selectedImage} />}
      </div>
      {showVideoModal && (
        <Modal
          alignment="center"
          show={showVideoModal}
          setShow={setShowVideoModal}
          className="h-screen md:max-h-[720px] w-screen md:max-w-[1024px] relative rounded-md p-5"
          rounded={false}
        >
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-1 right-1"
          >
            <IconX size={20} />
          </button>

          <iframe
            width="100%"
            height="100%"
            src={`${videoLink}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </Modal>
      )}
    </div>
  );
};
export default ProductViewImage;
