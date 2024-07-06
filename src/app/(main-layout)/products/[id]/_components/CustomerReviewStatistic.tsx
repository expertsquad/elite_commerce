import StarRating from "@/Components/StarRating";
import { IconStarFilled } from "@tabler/icons-react";

type CustomerReviewStatisticProps = {
  ratingInfo: any[];
  averageRating: number;
};

const CustomerReviewStatistic = ({
  averageRating,
  ratingInfo,
}: CustomerReviewStatisticProps) => {
  const ratings = [5, 4, 3, 2, 1];
  const totalRatings = ratingInfo?.length;

  return (
    <div className="my-6">
      <div className="flex items-center gap-x-4 mb-5">
        <span className="text-4xl md:text-6xl font-bold">
          {averageRating?.toFixed(2) || 0}
        </span>
        <div className="flex flex-col gap-y-2">
          <StarRating rating={averageRating || 0} />
          <span className="text-black-80">
            {totalRatings} Rating{totalRatings !== 1 && "s"}
          </span>
        </div>
      </div>

      {ratings.map((rating) => {
        const ratingCount = ratingInfo?.filter(
          (item) => item?.rating === rating
        ).length;
        const percentage = totalRatings
          ? ((ratingCount / totalRatings) * 100).toFixed(2)
          : 0;

        return (
          <div key={rating} className="flex items-center gap-x-2">
            <span>{rating}</span>
            <span className="">
              <IconStarFilled className="text-[#E73C17] w-4 h-4" />
            </span>
            <div className="relative w-[230px] h-1 bg-black-10 rounded-full ">
              <span
                style={{ width: `${percentage}%` }}
                className="h-1 w-[230px] flex bg-gradient-secondary rounded-full "
              ></span>
            </div>
            <span>{percentage}%</span>
            <span>({ratingCount})</span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerReviewStatistic;
