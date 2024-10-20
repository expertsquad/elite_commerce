"use client";
import { postDataMutation } from "@/actions/postDataMutation";
import { revalidateTagAction } from "@/actions/revalidateTag";
import FileUploader from "@/Components/FileUploder";
import SubmitButton from "@/Components/SubmitButton";
import { server_url } from "@/constants";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const AddCommentModalContent = ({
  reviewNow,
  id,
  orderId,
  productId,
}: {
  reviewNow: any;
  id: string;
  productId: string;
  orderId: string;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (rating === index + 1) {
      setRating(0);
    } else {
      setRating(index + 1);
    }
  };

  // Update photos array when new files are selected
  const handleFilesChange = (files: FileList) => {
    setPhotos(Array.from(files)); // Convert FileList to an array
  };
  console.log(photos);

  // Handle form submission
  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("orderId", orderId);
    formData.set("productId", productId);
    formData.set("reviewStatus", "Reviewed");
    formData.set("comment", comment);
    formData.set("rating", rating.toString());

    // Append each photo in the array to the formData
    photos.forEach((photo) => {
      formData.append("reviewPhotos", photo);
    });

    try {
      const result = await postDataMutation({
        route: `/review/add`,
        data: formData,
        dataType: "formData",
      });

      if (result.success) {
        console.log("API Response: ", result);
        revalidateTagAction(`/review/${id}`);
        redirect("/profile/review/all-review-history");
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
        <div className="py-3 md:py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
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
            <small>How Much Ratings This Product</small>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <IconStarFilled
                  key={index}
                  size={20}
                  className={`${
                    index < rating ? "text-secondary" : "text-black-50"
                  } stroke-secondary`}
                  onClick={(e) => handleStarClick(index, e)}
                />
              ))}
            </div>
          </div>

          <textarea
            className="w-full border border-black-10 rounded-lg  my-5 resize-none outline-none p-2 md:p-4"
            maxLength={100}
            placeholder="Write Here"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          ></textarea>

          <div className="flex items-center">
            <FileUploader
              name="reviewPhotos"
              multiple={true}
              onChange={(e) => handleFilesChange(e.target.files!)}
            />
            <FileUploader
              name="reviewPhotos"
              multiple={true}
              onChange={(e) => handleFilesChange(e.target.files!)}
            />
            <FileUploader
              name="reviewPhotos"
              multiple={true}
              onChange={(e) => handleFilesChange(e.target.files!)}
            />
            <FileUploader
              name="reviewPhotos"
              multiple={true}
              onChange={(e) => handleFilesChange(e.target.files!)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <SubmitButton className="py-2 w-[90%] bg-gradient-primary rounded-full text-white fixed bottom-5">
            Submit Review
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddCommentModalContent;
