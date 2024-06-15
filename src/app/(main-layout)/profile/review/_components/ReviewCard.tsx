import { server_url } from "@/constants";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import ButtonSection from "./ButtonSection";
import { fetchData } from "@/actions/fetchData";
import StarRating from "@/Components/StarRating";
import { postDataMutation } from "@/actions/postDataMutation";

const ReviewCard = async ({
  orderId,
  orderItem,
  createdAt,
  orderStatus,
}: {
  orderItem: OrderItem;
  createdAt: string;
  orderStatus: string;
  orderId: string;
}) => {
  const comments = await fetchData({
    route: "/review",
    query: `product.productId=${orderItem?.productId}&orderId=${orderId}`,
  });

  // add comment submit action

  const addCommentSubmitAction = async (
    productId: string,
    orderId: string,
    rating: number,
    formData: FormData
  ) => {
    "use server";
    formData.set("productId", productId);
    formData.set("orderId", orderId);
    // formData.set("rating", rating);

    const result = await postDataMutation({
      route: "/review/add",
      data: formData,
    });
    console.log(result);
  };

  return (
    <>
      <div
        className="flex w-full lg:flex-row flex-col  border-b border-black-10 py-5
     "
      >
        {/* Image and titile */}
        <div className="w-full lg:w-1/2 flex  justify-start items-center gap-4">
          <div className="flex justify-center items-center bg-gradient-primary-light rounded-lg w-16 h-16">
            <Image
              alt="Product Image"
              src={`${server_url + orderItem.productPhotos[0]}
            `}
              width={60}
              height={60}
            />
          </div>{" "}
          <p className="line-clamp-2">{orderItem.productName}</p>
        </div>

        {/* Purchase on and review */}
        <div className="flex w-full lg:w-1/2  justify-between items-center">
          <div className="flex justify-start flex-col">
            <p className="text-black-50 text-sm">Purchase on</p>
            <p>{dateFormat(createdAt)}</p>
          </div>
          <ButtonSection
            comment={comments?.data?.length && comments?.data[0]}
            isReviewed={orderItem?.isReviewed}
            orderStatus={orderStatus}
            orderItem={orderItem}
            orderId={orderId}
            addCommentSubmitAction={addCommentSubmitAction}
          />
        </div>
      </div>
      {comments?.data?.length && (
        <div className="border-b border-black-10 py-5">
          <div className="my-4">
            <StarRating rating={comments?.data[0]?.rating} />
          </div>
          <p>{comments?.data[0]?.comment}</p>
          <div>
            <Image
              src="/images/product-image.png"
              width={60}
              height={60}
              alt="Review Image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewCard;
