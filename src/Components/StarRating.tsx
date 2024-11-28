import React from "react";
import { IconStarFilled } from "@tabler/icons-react";

const StarRating = ({
  rating,
  className = "w-3.5 h-3.5 md:w-4.5 md:h-4.5",
}: {
  rating: number;
  className?: string;
}) => {
  const maxRating = 5;

  // Validate and normalize the rating
  const normalizedRating = Number.isFinite(rating)
    ? Math.max(0, Math.min(rating, maxRating))
    : 0;

  // Calculate star counts
  const filledStars = Math.round(normalizedRating);
  const emptyStars = Math.max(0, maxRating - filledStars);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(filledStars)].map((_, index) => (
        <IconStarFilled
          key={`filled-${index}`}
          className={`text-[#E73C17] ${className}`}
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <IconStarFilled
          key={`empty-${index}`}
          className={`text-black-10 ${className}`}
        />
      ))}
    </div>
  );
};

export default StarRating;
