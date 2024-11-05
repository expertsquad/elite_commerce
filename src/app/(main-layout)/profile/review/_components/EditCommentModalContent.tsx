"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import CustomLoader from "@/Components/CustomLoader";
import FileUploader from "@/Components/FileUploder";
import { server_url } from "@/constants";
import { IReviewTypes } from "@/interfaces/reviewData.interfaces";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EditCommentModalContent = ({
  reviewData,
  setEditComment,
}: {
  reviewData: IReviewTypes;
  setEditComment: any;
}) => {
  const [rating, setRating] = useState(reviewData?.rating || 0);
  const [comments, setComment] = useState(reviewData?.comment || "");
  const [photos, setPhotos] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRating((prev: number) => (prev === index + 1 ? 0 : index + 1));
  };

  // <== Handle file upload ==>
  const handleFilesChange = (files: FileList) => {
    const newPhotos = Array.from(files);
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  // <== Update review data ==>
  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("comment", comments);
    formData.append("rating", rating.toString());
    // photos.forEach((photo) => {
    //   formData.append("reviewPhotos[]", photo.name);
    // });

    for (let i = 0; i < photos.length; i++) {
      formData.append("reviewPhotos", photos[i]);
    }

    try {
      const response = await updateDataMutation({
        route: `/review/${reviewData?._id}`,
        data: formData,
        dataType: "formData",
        method: "PUT",
      });
      console.log(response);
      if (response?.success) {
        toast.success(response?.message);
        revalidateTagAction("/profile/review/all-review-history");
        revalidateTagAction(`/review/${reviewData?._id}`);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting your review.");
    } finally {
      setLoading(false);
      setEditComment(false);
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {loading && <CustomLoader />}
      <div>
        <p>Product Review</p>
        <div className="py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
          <div className="bg-gradient-primary-light relative h-40 w-40 rounded-full">
            <Image
              src={`${server_url + reviewData?.product?.productPhoto}`}
              alt="Product Photo"
              fill
              style={{
                objectFit: "contain",
              }}
              className="inset-0 top-0 left-0 object-contain p-5"
            />
          </div>
          <p>{reviewData?.product?.productName}</p>
        </div>
      </div>
      <form onSubmit={handleAddCommentSubmit}>
        <div className="my-6 flex-grow">
          <div className="flex items-center justify-between">
            <small>Rate your satisfaction</small>
            <div className="flex cursor-pointer">
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
            className="w-full border border-black-10 rounded-lg mt-5 resize-none outline-none p-2 md:p-4"
            maxLength={100}
            placeholder="Write Here"
            name="comment"
            value={comments}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
          ></textarea>
          <small className="flex items-end justify-end text-xs text-positive">
            {comments?.length}/100
          </small>
          <div className="flex items-center space-x-2 mt-5">
            {[...Array(4)].map((_, index) => (
              <FileUploader
                key={index}
                name={`reviewPhotos${index}`}
                multiple={true}
                onChange={(e) => handleFilesChange(e.target.files!)}
                maxSize={5}
                accept="image/*"
                url={reviewData?.reviewPhotos[index]}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="py-2 w-[90%] bg-gradient-primary rounded-full text-white fixed bottom-5"
          >
            {loading ? "Loading..." : "Update Review"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditCommentModalContent;
