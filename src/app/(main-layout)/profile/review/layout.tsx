import { Button } from "@/Components/Buttons";
import React from "react";

import ReviewCustomLink from "./_components/reviewCustomLink";

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-start">
        <ReviewCustomLink path="/profile/review/reviewPage">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            To Review
          </Button>
        </ReviewCustomLink>
        <ReviewCustomLink path="/profile/review/allReviewHistory">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            Review History
          </Button>
        </ReviewCustomLink>
      </div>
      {children}
    </div>
  );
};

export default ReviewLayout;
