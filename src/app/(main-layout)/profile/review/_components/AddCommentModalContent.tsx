"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import CustomLoader from "@/Components/CustomLoader";
import FileUploader from "@/Components/FileUploder";
import { server_url } from "@/constants";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddCommentModalContent = ({
  reviewNow,
  id,
  setAddComments,
}: {
  reviewNow: any;
  id: string;
  setAddComments: any;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRating((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  // <== Handle file upload ==>
  const handleFilesChange = (files: FileList) => {
    const newPhotos = Array.from(files);
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim() && rating === 0) {
      toast.error("Rating and comment are required.");
      return;
    }
    if (!comment.trim()) {
      toast.error("Comment is required.");
      return;
    }
    if (rating === 0) {
      toast.error("Rating is required.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("rating", rating.toString());
    for (let i = 0; i < photos.length; i++) {
      formData.append("reviewPhotos", photos[i]);
    }

    try {
      const response = await updateDataMutation({
        route: `/review/${id}`,
        data: formData,
        dataType: "formData",
        method: "PUT",
      });
      if (response?.success) {
        toast.success(response?.message);
        revalidateTagAction("/review");
        revalidateTagAction("profile/review");
        revalidateTagAction(`/review/${id}`);
        revalidateTagAction("/products/[slug]");
        revalidateTagAction("/profile/dashboard");
        router.push("/profile/review/all-review-history");
        setAddComments(false);
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      console.log("An error occurred while submitting your review.");
    } finally {
      router.push("/profile/review/all-review-history");
      setAddComments(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {loading && <CustomLoader />}
      <div>
        <p>Product Review</p>
        <div className="py-3 md:py-6 flex items-center justify-center flex-col gap-2 border-b border-black-10">
          <div className="relative bg-gradient-primary-light rounded-full h-40 w-40">
            <Image
              src={`${server_url + reviewNow?.product?.productPhoto}`}
              alt="Product Photo"
              fill
              style={{
                objectFit: "contain",
              }}
              className="inset-0 object-contain p-5"
            />
          </div>
          <p>{reviewNow?.product?.productName}</p>
        </div>
      </div>
      <form onSubmit={handleAddCommentSubmit}>
        <div className="my-6 flex-grow">
          <div className="flex items-center justify-between">
            <small>How Much Ratings This Product</small>
            <div className="flex cursor-pointer">
              {[...Array(5)].map((_, index) => (
                <IconStarFilled
                  key={index}
                  size={20}
                  className={`${
                    index < rating ? "text-secondary" : "text-white"
                  } stroke-secondary`}
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          ></textarea>
          <small className="flex items-end justify-end text-xs text-positive">
            {comment?.length}/100
          </small>

          <div className="flex items-start justify-start space-x-2 mt-5">
            {[...Array(1)].map((_, index) => (
              <FileUploader
                key={index}
                name={`reviewPhotos${index}`}
                // multiple={true}
                onChange={(e) => handleFilesChange(e.target.files!)}
                maxSize={5}
                accept="image/*"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="py-2 w-[90%] bg-gradient-primary rounded-full text-white fixed bottom-5"
            disabled={loading}
          >
            {loading ? "LOADING..." : "Submit Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCommentModalContent;
