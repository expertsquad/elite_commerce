"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(photos);

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRating((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  const handleFilesChange = (index: number, files: FileList) => {
    if (files[0]) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = files[0];
      setPhotos(updatedPhotos);
    }
  };

  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("rating", rating.toString());

    const filteredPhotos = photos.filter((photo) => photo !== undefined);

    filteredPhotos.forEach((file: File) => {
      formData.append("reviewPhotos", file);
    });

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
        revalidateTagAction(`/review/${id}`);
        router.push("/profile/review/all-review-history");
        setAddComments(false);
      } else {
        toast.error(response?.message);
        console.error(response?.message);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting your review.");
    } finally {
      setAddComments(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
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

          <div className="flex items-center space-x-2 mt-5">
            {[...Array(4)].map((_, index) => (
              <FileUploader
                key={index}
                name={`reviewPhotos${index}`}
                multiple={true}
                onChange={(e) => handleFilesChange(index, e.target.files!)}
                maxSize={5}
                accept="image/*"
              />
            ))}
          </div>
        </div>

        {error && <p className="text-danger text-xs">{error}</p>}

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
