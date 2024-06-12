import { Button } from "@/Components/Buttons";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import Image from "next/image";
import React from "react";

const EditCommentModalContent = ({ comment }: any) => {
  let rating = 3;
  return (
    <div className="flex flex-col h-full">
      <div>
        <p>Product Review</p>
        <div className="py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
          <div className="bg-gradient-primary-light p-8 rounded-full h-40 w-40">
            <Image
              src={`${server_url + comment?.product?.productPhoto}`}
              height={100}
              width={100}
              alt="Product Photo"
            />
          </div>
          <p>{comment?.product?.productName}</p>
        </div>
      </div>

      <div className="my-6 flex-grow">
        <div className="flex items-center justify-between">
          <small>Rate your satisfaction</small>
          <StarRating rating={rating} />
        </div>

        <textarea
          className="w-full h-36 border border-black-10 rounded-lg p-5 my-5"
          maxLength={100}
          placeholder="Write Here"
          value={comment?.comment}
        ></textarea>
      </div>

      <div>
        <Button className="py-2 w-full bg-gradient-primary rounded-full text-white">
          Submit Review
        </Button>
      </div>
    </div>
  );
};

export default EditCommentModalContent;
