"use client";
import { revalidateTagAction } from "@/actions/revalidateTag";
import { updateDataMutation } from "@/actions/updateDataMutation";
import FileUploader from "@/Components/FileUploder";
import { server_url } from "@/constants";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

const AddCommentModalContent = ({
  reviewNow,
  id,
}: {
  reviewNow: any;
  id: string;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [photos, setPhotos] = useState<(File | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  console.log(photos);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleStarClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setRating((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  const handleFilesChange = (index: number, files: FileList) => {
    if (files[0]) {
      const updatedPhotos = [...photos];
      updatedPhotos[index] = files[0]; // Store the File object directly
      setPhotos(updatedPhotos);
    }

    console.log(photos);
  };
  console.log(photos);

  const handleAddCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("rating", rating.toString());

    // Append photos directly to FormData with the server's expected key 'reviewPhotos'
    photos.forEach((photo) => {
      if (photo) {
        formData.append("reviewPhotos", photo); // Append file object directly
      }
    });

    try {
      const response = await updateDataMutation({
        route: `/review/${id}`,
        data: formData,
        dataType: "formData",
        method: "PUT",
      });
      console.log(response);

      if (response.success) {
        revalidateTagAction("/review");
        revalidateTagAction(`/review/${id}`);
        router.push("/profile/review/all-review-history");
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
            className="w-full border border-black-10 rounded-lg my-5 resize-none outline-none p-2 md:p-4"
            maxLength={100}
            placeholder="Write Here"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          ></textarea>

          <div className="flex items-center space-x-2">
            {[...Array(4)].map((_, index) => (
              <FileUploader
                key={index}
                name={`reviewPhotos`}
                multiple={true}
                onChange={(e) => handleFilesChange(index, e.target.files!)}
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
