"use client";
import FileUploader from "@/Components/FileUploder";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";
import { server_url } from "@/constants";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";

const AddCommentModalContent = ({
  orderItem,
  orderId,
  addCommentSubmitAction,
}: {
  orderItem: OrderItem;
  orderId: string;
  addCommentSubmitAction: (
    productId: string,
    orderId: string,
    rating: number,
    formData: FormData
  ) => Promise<void>;
}) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setRating(index + 1);
  };

  const addCommentAction = (formData: FormData) => {
    addCommentSubmitAction(orderItem?.productId, orderId, rating, formData);
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <p>Product Review</p>
        <div className="py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
          <div className="bg-gradient-primary-light p-8 rounded-full h-40 w-40">
            <Image
              src={`${server_url + orderItem?.productPhotos[0]}`}
              height={100}
              width={100}
              alt="Product Photo"
            />
          </div>
          <p>{orderItem?.productName}</p>
        </div>
      </div>
      <Form handleSubmit={addCommentAction}>
        <div className="my-6 flex-grow">
          <div className="flex items-center justify-between">
            <small>Rate your satisfaction</small>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <IconStarFilled
                  key={index}
                  width={20}
                  height={20}
                  className={
                    index <= rating - 1 ? "text-secondary" : "text-black-50"
                  }
                  onClick={(e) => handleStarClick(index, e)}
                />
              ))}
            </div>
          </div>

          <textarea
            className="w-full h-36 border border-black-10 rounded-lg p-5 my-5"
            maxLength={100}
            placeholder="Write Here"
            name="comment"
          ></textarea>

          <FileUploader name="reviewPhotos" />
        </div>

        <div>
          <SubmitButton className="py-2 w-full bg-gradient-primary rounded-full text-white">
            Submit Review
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
};

export default AddCommentModalContent;
