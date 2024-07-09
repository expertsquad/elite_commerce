"use client";
import { postDataMutation } from "@/actions/postDataMutation";
import { updateDataMutation } from "@/actions/updateDataMutation";
import FileUploader from "@/Components/FileUploder";
import Form from "@/Components/Form";
import SubmitButton from "@/Components/SubmitButton";
import { server_url } from "@/constants";
import { IconStarFilled } from "@tabler/icons-react";

import Image from "next/image";
import { redirect } from "next/navigation";
import { Router, useRouter } from "next/router";
import React, { useRef, useState } from "react";

const AddCommentModalContent = ({
  reviewNow,
  id,
}: {
  reviewNow: any;
  id: string;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const fileInputRef = useRef(null);

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRating(index + 1);
  };

  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("reviewStatus", "Reviewed");
    formData.set("comment", comment);
    formData.set("rating", rating.toString());
    const files = fileInputRef.current
      ? (fileInputRef.current as HTMLInputElement).files
      : null;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("reviewPhotos", files[i]);
      }
    }

    try {
      const result = await updateDataMutation({
        route: `/review/${id}`,
        method: "PUT",
        data: formData,
      });

      if (result.success) {
        console.log("API Response: ", result);
        // router.push("/profile/review/allReviewHistory");
        redirect("/profile/review/allReviewHistory");
      } else {
        console.error("Error updating review: ", result.error);
      }
    } catch (error) {
      console.error("Error updating review: ", error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div>
        <p>Product Review</p>
        <div className="py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
          <div className="bg-gradient-primary-light p-8 rounded-full h-40 w-40">
            <Image
              src={`${server_url + reviewNow?.product?.productPhoto}`}
              height={100}
              width={100}
              alt="Product Photo"
            />
          </div>
          <p>{reviewNow?.product?.productName}</p>
        </div>
      </div>
      <form onSubmit={handleAddCommentSubmit}>
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <FileUploader name="reviewPhotos" />
        </div>

        <div>
          <SubmitButton className="py-2 w-full bg-gradient-primary rounded-full text-white">
            Submit Review
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddCommentModalContent;
