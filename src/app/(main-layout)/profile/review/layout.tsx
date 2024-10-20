import { Button } from "@/Components/Buttons";

import ReviewCustomLink from "./_components/reviewCustomLink";
import { Suspense } from "react";

const ReviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-start mb-5">
        <ReviewCustomLink path="/profile/review">
          <Button className="px-5 py-2 rounded-full border border-black-10">
            To Review
          </Button>
        </ReviewCustomLink>
        <ReviewCustomLink path="/profile/review/all-review-history">
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
