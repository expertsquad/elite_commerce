import StarRating from "@/Components/StarRating";
import { IconStarFilled } from "@tabler/icons-react";

type CustomerReviewStatisticProps = {
  ratingInfo: any;
  averageRating: number;
};

const CustomerReviewStatistic = ({
  averageRating,
  ratingInfo,
}: CustomerReviewStatisticProps) => {
  return (
    <div className="my-6">
      <div className="flex items-center gap-x-4">
        <span className="text-4xl md:text-6xl font-bold">
          {averageRating.toFixed(2)}
        </span>
        <div className="flex flex-col gap-y-2">
          <StarRating rating={averageRating} />
          <span className="text-black-80">{ratingInfo?.length} Rating</span>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <span>5</span>
          <span className="">
            <IconStarFilled className="text-[#E73C17] w-4 h-4" />
          </span>
          <span className="w"></span>
          <span>
            ({ratingInfo?.filter((item: any) => item.rating === 5).length})
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewStatistic;
