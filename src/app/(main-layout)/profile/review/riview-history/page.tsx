import React from "react";
import ReviewHistorySection from "./_components/ReviewHistorySection";
import Link from "next/link";
import { Button } from "@/Components/Buttons";

const page = () => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-start">
        <Link className=" " href="/profile/review">
          <Button className="px-5 py-2 rounded-full border border-black-10  ">
            To Review
          </Button>
        </Link>
        <Link className=" " href="/profile/review/review-history">
          <Button className="px-5 py-2 rounded-full bg-gradient-primary text-white ">
            Review History
          </Button>
        </Link>
      </div>

      <ReviewHistorySection />
    </div>
  );
};

export default page;
