import { server_url } from "@/constants";
import { OrderItem } from "@/interfaces/OrderItem.interface";
import { dateFormat } from "@/utils/dateFormat";
import Image from "next/image";
import ButtonSection from "./ButtonSection";

const ReviewCard = ({
  orderItem,
  createdAt,
  orderStatus,
}: {
  orderItem: OrderItem;
  createdAt: string;
  orderStatus: string;
}) => {
  return (
    <div
      className="flex w-full lg:flex-row flex-col  border-b border-black-10 py-5
     "
    >
      {/* Image and titile */}
      <div className="w-full lg:w-1/2 flex lg:justify-center justify-start items-center gap-4">
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
          isReviewed={orderItem?.isReviewed}
          orderStatus={orderStatus}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
