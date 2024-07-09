"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import { Button } from "@/Components/Buttons";
import FileUploader from "@/Components/FileUploder";
import StarRating from "@/Components/StarRating";
import { server_url } from "@/constants";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

const EditCommentModalContent = ({ comment }: any) => {
  const [rating, setRating] = useState(comment?.rating || 0);
  const [comments, setComment] = useState(comment?.comment || "");
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
    formData.set("comment", comments);
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
        route: `/review/${comment?._id}`,
        method: "PUT",
        data: formData,
      });

      if (result.success) {
        console.log("API Response: ", result);
        revalidateTagAction(`/review/${comment?._id}`);
        redirect("/profile/review/all-review-history");
      } else {
        console.error("Error updating review: ", result.error);
      }
    } catch (error) {
      console.error("Error updating review: ", error);
    }
    // redirect("/profile/review/all-review-history");
  };

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
            value={comments}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          {/* <FileUploader name="reviewPhotos" inputRef={fileInputRef} /> */}
        </div>

        <div>
          <Button className="py-2 w-full bg-gradient-primary rounded-full text-white">
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCommentModalContent;
