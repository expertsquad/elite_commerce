import React from "react";
import ReviewSection from "./_components/ReviewSection";
import Link from "next/link";
import { Button } from "@/Components/Buttons";

const page = () => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-start">
        <Link className=" " href="/profile/review">
          <Button className="px-5 py-2 rounded-full bg-gradient-primary text-white ">
            To Review
          </Button>
        </Link>
        <Link className=" " href="/profile/review/review-history">
          <Button className="px-5 py-2 rounded-full border border-black-10  ">
            Review History
          </Button>
        </Link>
      </div>

      <ReviewSection />
    </div>
  );
};

export default page;
