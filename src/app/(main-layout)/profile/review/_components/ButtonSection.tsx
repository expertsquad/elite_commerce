import { Button } from "@/Components/Buttons";
import React from "react";

const ButtonSection = ({
  isReviewed,
  orderStatus,
}: {
  isReviewed: boolean;
  orderStatus: string;
}) => {
  return (
    <div>
      {isReviewed === false && orderStatus === "Delivered" ? (
        <Button className="py-2 px-5 bg-gradient-primary text-white rounded-lg">
          Review Now
        </Button>
      ) : isReviewed === false && orderStatus !== "Delivered" ? (
        <Button className="py-2 px-5 bg-gradient-primary text-white rounded-lg disabled cursor-not-allowed opacity-50">
          Review Now
        </Button>
      ) : (
        <Button className="py-2 px-5 bg-gradient-primary text-white rounded-lg">
          Edit Review
        </Button>
      )}
    </div>
  );
};

export default ButtonSection;
